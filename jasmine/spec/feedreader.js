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
		let menuClass = document.querySelector('body').className;
		let menuIcon = $('.menu-icon-link');
		/** Test ensures menu is hidden by default.
			*/
		it('is hidden by default', function() {
			expect(menuClass).toBe('menu-hidden');
		});
		/** TODO: Write test that ensures menu changes
      * visibility when menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
		it('changes visibility when the menu icon is clicked', function() {
			expect(true).toBe(true);
		});
	});

	describe('Initial Entries', function() {
	/** TODO: Write a test that ensures when the loadFeed
  	* function is called and completes its work, there is at least
  	* a single .entry element within the .feed container.
  	* Remember, loadFeed() is asynchronous so this test will require
  	* the use of Jasmine's beforeEach and asynchronous done() function.
  	*/
		it('', function() {
			// placeholder
			expect(true).toBe(true);
			// expect(actual).matcher(expectedValue);
		});
});

	describe('New Feed Selection', function() {
	/** TODO: Write a test that ensures when a new feed is loaded
  	* by the loadFeed function that the content actually changes.
  	* Remember, loadFeed() is asynchronous.
  	*/
		it('content changes when loadFeed() is called', function() {
			// placeholder
			expect(true).toBe(true);
			// expect(actual).matcher(expectedValue);
		});
	});
}());
