/**
 * Created by prrathore on 2/6/15.
 */

var url = require('url');

var urlString = 'https://cardmigrationtoolnodeweb-staging-1.qa.paypal.com/cardmigrationtool/?agentName=ALL%20ALL';

var parsedURL = url.parse(urlString, true);

console.log("Parsed URL: " + JSON.stringify(parsedURL, null, 4));
console.log("Agent Name from Query String: " + parsedURL.query.agentName);
