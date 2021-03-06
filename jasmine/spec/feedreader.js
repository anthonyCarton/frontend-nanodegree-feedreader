/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/** This is our first test suite - a test suite just contains
  	* a related set of tests. This suite is all about the RSS
  	* feeds definitions, the allFeeds variable in our application.
  	*/
	describe('RSS Feeds', function() {
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/** Test loops through each of allFeeds
			* ensures it has a URL defined and not empty
    	*/
		it('have objects with URLs that are defined and not empty', function() {
			for (let eachObject of allFeeds) {
				// URL Regex Matcher from https://www.regextester.com/96146
				let regexMatcher = /((http|ftp|https):\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
				expect(eachObject.url).toBeDefined();
				expect(eachObject.url).toMatch(regexMatcher);
			}
		});


		/** Test loops through each of allFeeds
		 	* ensures a name defined
    	* and name is not empty.
    	*/
		it('have individual feed objects have name defined for each', function() {
			for (let eachObject of allFeeds) {
				expect(eachObject.name).toBeDefined();
				expect(eachObject.name).toMatch(/\w/);
			}
		});
	});


	describe('The menu', function() {
		/** Test ensures menu is hidden by default.
			*/
		let menuClass = $( 'body' ).hasClass( 'menu-hidden' );
		let menuIcon = $( '.menu-icon-link' );
		it('is hidden by default', function() {
			expect(menuClass).toBe(true);
		});
		/** Test ensures menu changes visibility when icon is clicked.
      */
		it('changes visibility when the menu icon is clicked', function() {
			// simulate a click
			let testClick = $.Event( 'click' );
			menuIcon.trigger( testClick );
			// update menuClass
			menuClass = $( 'body' ).hasClass( 'menu-hidden' );
			expect(menuClass).toBe(false);
			// simulate a click again
			menuIcon.trigger( testClick );
			// update menuClass
			menuClass = $( 'body' ).hasClass( 'menu-hidden' );
			expect(menuClass).toBe(true);
		});
	});


	describe('Initial Entries', function() {
	/** Test ensures there is at least a single .entry element
		* within the .feed container when loadFeed() completes.
  	* Remember, loadFeed() is asynchronous so this test will require
  	* the use of Jasmine's beforeEach and asynchronous done() function.
  	*/
		beforeEach(function(done) {
			loadFeed(0, function(){
				done();
			});
		});

		it('have at least one entry in feed container', function() {
			let entryList = $( '.feed .entry' );
			// entryList should at least one entry
			expect(entryList.length).not.toBe(0);
		});
	});


	describe('New Feed Selection', function() {
	/** Test ensures content actually changes when
		* new feed is loaded by the loadFeed()
  	*/
		let itemCompare = [];

		// Note to Self: Remember to pass done and call done() or it won't work
		beforeEach(function(done) {
			// load the 2nd feed initially
			loadFeed(1, function() {
				// first item to itemCompare[0]
				itemCompare[0] = $('.feed').html();
				done();
			});
		});

		// need to pass and call done in it as well
		it('content changes when loadFeed() is called', function(done) {
			// load the 1st feed again
			loadFeed(0, function() {
				// push first item to itemCompare[1]
				itemCompare[1] = $('.feed').html();
				// expect both feeds to be defined at this point.
				expect(itemCompare[0]).toBeDefined();
				expect(itemCompare[1]).toBeDefined();
				done();
			});

			// itemCompare[0] should not match itemCompare[1]
			expect(itemCompare[0]).not.toBe(itemCompare[1]);
		});
	});
}());
