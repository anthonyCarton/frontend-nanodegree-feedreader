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


		/** TODO: Write a test that loops through each feed
    	* in the allFeeds object and ensures it has a URL defined
    	* and that the URL is not empty.
    	*/
		it('have objects with URLs that are defined and not empty', function() {
			// placeholder
			expect(true).toBe(true);
			// expect(actual).matcher(expectedValue);
			// expect(*the resulting URL of eachFeed*).toBeDefined();
			// expect(*the resulting URL of eachFeed*).not.toBeNull();
		});


		/** TODO: Write a test that loops through each feed
    	* in the allFeeds object and ensures it has a name defined
    	* and that the name is not empty.
    	*/
		it('have individual feed objects have name defined for each', function() {
			// placeholder
			expect(true).toBe(true);
			// expect(actual).matcher(expectedValue);
			// expect(*eachFeed.name*).toBeDefined();
			// expect(*eachFeed.name*).not.toBeNull();
		});
	});


	describe('The menu', function() {
		/** TODO: Write a test that ensures the menu element is
			* hidden by default. You'll have to analyze the HTML and
			* the CSS to determine how we're performing the
			* hiding/showing of the menu element.
			*/
		it('is hidden by default', function() {
			// placeholder
			expect(true).toBe(true);
			// expect(actual).matcher(expectedValue);
			// expect(*the menu element*).toHaveClass('menu-hidden');
			// expect($( body )).toHaveClass('menu-hidden');
		});
		/** TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
		it('changes visibility when the menu icon is clicked', function() {
			// placeholder
			expect(true).toBe(true);
			// expect(actual).matcher(expectedValue);
			// expect(*the menu to display onClick*).toBe(true);
			// expect(*the menu to hide onClick*).toBe(true);
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
