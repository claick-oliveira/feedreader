/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

        /* 
         * This test verify if the feeds are defined. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* 
         * This test verify each feed has the URL defined.
         */
        it('are defined URL', function() {
          allFeeds.forEach(feed => {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });


        /* 
         * This test verify each feed has the URL defined.
         */
        it('are defined Name', function() {
          allFeeds.forEach(feed => {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });

    describe('The menu', function() {

      /* 
        * This test verify if the menu is hidden by default.
        */
      it('hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      /* 
        * This test verify the function to hidden/display the menu.
        */
      it('visibility on click', function() {
        $('a.menu-icon-link').trigger('click'); // show menu
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('a.menu-icon-link').trigger('click'); // hide menu again
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

    });

    describe('Initial Entries', function() {
      
      /* 
        * Load the feeds before the tests.
        */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      /* 
        * This test verify if after the loadFeed function the feeds were loaded.
        */
      it('are data', function() {
        expect($('.feed .entry').length).toBeGreaterThan(0);
      });
  
    });

    describe('New Feed Selection', function() {

      var oldFeed;

      /* 
        * Load the feeds and after load again to see new feeds.
        */
      beforeEach(function(done) {
        loadFeed(0, function() {
          oldFeed = $('.feed').html();
          loadFeed(1, done);
        });
      });

      /* 
        * This test compare the both feeds and test if they are differents.
        */
      it('is different data', function() {
        expect($('.feed').html()).not.toBe(oldFeed);
      });
  
    });
    
}());
