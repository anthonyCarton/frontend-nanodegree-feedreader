# Udacity FEND Feedreader / Jasmine testing project

In this project, we were given a web-based application that reads RSS feeds. We used [Jasmine](http://jasmine.github.io/) to write a series of tests for the application.

## How to run this project
### Fork it!
To run the project, fork it on [Github](https://github.com/anthonyCarton/frontend-nanodegree-feedreader).

### Pull it!
Once you've forked the project, pull it.
```
git pull https://github.com/{your github profile}/frontend-nanodegree-feedreader.git
```

### Open it!
Open the index.html document in your favorite browser.
```
open index.html
```

## [Jasmine](http://jasmine.github.io/)
The project uses [Jasmine](http://jasmine.github.io/) for 'test-driven development'.

### RSS Feeds
#### RSS Feeds are defined
This test checks the RSS feeds definitions, to assure they are defined and not blank.

#### RSS Feeds have objects with URLs that are defined and not empty
This test loops through each of allFeeds ensures it has a URL defined and not empty

#### RSS Feeds have individual feed objects have name defined for each
This test loops through each of allFeeds ensures a name defined and name is not empty.

### The menu
#### The menu is hidden by default
This test ensures menu is hidden by default.

#### The menu changes visibility when the menu icon is clicked
This test ensures menu changes visibility when icon is clicked.

### Initial Entries
#### Initial Entries have at least one entry in feed container
This test ensures there is at least a single .entry element within the .feed container when loadFeed() completes.

### New Feed Selection
#### New Feed Selection content changes when loadFeed() is called
This test ensures content actually changes when new feed is loaded by the loadFeed()

## Contributing
This is a project for my class so I will not be accepting contributions.

## Other Attributions

### URL Regex Matching
URL Regex Matching method from [RegEx Texting](https://www.regextester.com/96146).
