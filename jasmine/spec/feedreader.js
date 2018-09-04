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
			* ensures it has a URL defined
    	* and URL is not empty.
    	*/
		it('have objects with URLs that are defined and not empty', function() {
			for (let eachObject of allFeeds) {
				expect(eachObject.url).toBeDefined();
				expect(eachObject.url).toMatch('http');
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
		let menuClass;
		let menuIcon = $( '.menu-icon-link' );
		it('is hidden by default', function() {
			menuClass = $( 'body' ).hasClass( 'menu-hidden' );
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
			console.log('load feed 1');
			loadFeed(0, function(){
				done();
			});
		});

		it('have at least one entry in feed container', function() {
			let entryList = $( '.feed' ).find('a');
			// entryList should at least one entry
			expect(entryList.length >0).toBe(true);
		});
	});


	describe('New Feed Selection', function() {
	/** TODO: Write a test that ensures when a new feed is loaded
  	* by the loadFeed function that the content actually changes.
  	* Remember, loadFeed() is asynchronous.
  	*/
		let itemCompare = [];
		let itemPush = function(arg) {
			itemCompare.push(arg);
		}

		beforeEach(function() {
		});

		it('content changes when loadFeed() is called', function() {
			console.log(itemCompare[0]);
			console.log(itemCompare[1]);
			expect(itemCompare[0]).not.toMatch(itemCompare[1]);
		});
	});
}());
