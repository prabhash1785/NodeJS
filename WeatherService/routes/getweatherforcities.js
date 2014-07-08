/**
 * This Router instance provides the middleware capabilities by taking the input values from web form and making multiple calls
 * to Weather UnderGround API to fetch the weather details.
 * This API will set the final list of cities with their weather details in the Response object. Based on the requirement,
 * this API will only return weather for cities which returns a successful response. If search for all cities fail then
 * it returns an error message and directs the control back to Weather Search page.
 *
 * Created by Prabhash Rathore on 7/6/2014.
 */

var https = require('https');

var weatherData = []; //array to hold the weather result for all cities
var error; // this will hold error message

//this function will need to be called to get weather details
exports.callweatherapi = function(request, response) {

    console.log("Request Attributes:");
    console.log("City 1: " + request.query.city1);
    console.log("State 1: " + request.query.state1);
    console.log("Country 1: " + request.query.country1);

    console.log("City 2: " + request.query.city2);
    console.log("State 2: " + request.query.state2);
    console.log("Country 2: " + request.query.country2);

    console.log("City 3: " + request.query.city3);
    console.log("State 3: " + request.query.state3);
    console.log("Country 3: " + request.query.country3);

    console.log("City 4: " + request.query.city4);
    console.log("State 4: " + request.query.state4);
    console.log("Country 4: " + request.query.country4);

    /* URI Encoding all request fields to prevent any white space between words like "New York" to be submitted to service*/
    var uriEncodedCity1 = encodeURIComponent(request.query.city1.trim());
    var uriEncodedState1 = encodeURIComponent(request.query.state1.trim());
    var uriEncodedCountry1 = encodeURIComponent(request.query.country1.trim());

    var uriEncodedCity2 = encodeURIComponent(request.query.city2.trim());
    var uriEncodedState2 = encodeURIComponent(request.query.state2.trim());
    var uriEncodedCountry2 = encodeURIComponent(request.query.country2.trim());

    var uriEncodedCity3 = encodeURIComponent(request.query.city3.trim());
    var uriEncodedState3 = encodeURIComponent(request.query.state3.trim());
    var uriEncodedCountry3 = encodeURIComponent(request.query.country3.trim());

    var uriEncodedCity4 = encodeURIComponent(request.query.city4.trim());
    var uriEncodedState4 = encodeURIComponent(request.query.state4.trim());
    var uriEncodedCountry4 = encodeURIComponent(request.query.country4.trim());

    //formatted url texts to be passed to options object while calling the https.request() API
    var url1 = '/api/d72899a6a48b791b/conditions/q/' + uriEncodedCountry1 + '/' + uriEncodedState1 + '/' + uriEncodedCity1 + '.json';
    var url2 = '/api/d72899a6a48b791b/conditions/q/' + uriEncodedCountry2 + '/' + uriEncodedState2 + '/' + uriEncodedCity2 + '.json';
    var url3 = '/api/d72899a6a48b791b/conditions/q/' + uriEncodedCountry3 + '/' + uriEncodedState3 + '/' + uriEncodedCity3 + '.json';
    var url4 = '/api/d72899a6a48b791b/conditions/q/' + uriEncodedCountry4 + '/' + uriEncodedState4 + '/' + uriEncodedCity4 + '.json';

    //option object to be passed to https.req(option, function(res)) function
    var options1 = {
        hostname: 'api.wunderground.com',
        port: 443,
        path: url1,
        method: 'GET'
    };

    var options2 = {
        hostname: 'api.wunderground.com',
        port: 443,
        path: url2,
        method: 'GET'
    };

    var options3 = {
        hostname: 'api.wunderground.com',
        port: 443,
        path: url3,
        method: 'GET'
    };

    var options4 = {
        hostname: 'api.wunderground.com',
        port: 443,
        path: url4,
        method: 'GET'
    };

    //first API call to Weather Underground Service
    var req1 = https.request(options1, function(res) {
        console.log("statusCode: ", res.statusCode);
        console.log("headers: ", res.headers);

        res.on('data', function(d) {
            console.log("Response from Service: " + d); //logging the response to standard out for debugging, this will be turned off in Production Env

            var result; //this will hold the intermediate result object to save the parsed JSON response from each API call

            try {
                result = JSON.parse(d);
            } catch (err) {
                result = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
            }

            //Reset weatherData array object to prevent stale values from showing on the weather result response
            while(weatherData.length > 0) {
                weatherData.pop();
            }

            //if JSON response has current_observation attribute then weather data was successfully received, push this object to result array
            if(result.current_observation != null) {
                weatherData.push(result);
            }

            //second API call to Weather Underground Service
            var req2 = https.request(options2, function(res) {
                console.log("statusCode: ", res.statusCode);
                console.log("headers: ", res.headers);

                res.on('data', function(d) {
                    console.log("Response from Service: " + d); //logging the response to standard out for debugging, this will be turned off in Production Env

                    var result2; //this will hold the intermediate result object to save the parsed JSON response from each API call

                    try {
                        result2 = JSON.parse(d);
                    } catch (err) {
                        result2 = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
                    }

                    //if JSON response has current_observation attribute then weather data was successfully received, push this object to result array
                    if(result2.current_observation != null) {
                        weatherData.push(result2);
                    }

                    //third API call to Weather Underground Service
                    var req3 = https.request(options3, function(res) {
                        console.log("statusCode: ", res.statusCode);
                        console.log("headers: ", res.headers);

                        res.on('data', function(d) {
                            console.log("Response from Service: " + d); //logging the response to standard out for debugging, this will be turned off in Production Env

                            var result3; //this will hold the intermediate result object to save the parsed JSON response from each API call

                            try {
                                result3 = JSON.parse(d);
                            } catch (err) {
                                result3 = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
                            }

                            //if JSON response has current_observation attribute then weather data was successfully received, push this object to result array
                            if(result3.current_observation != null) {
                                weatherData.push(result3);
                            }

                            //forth API call to Weather Underground Service
                            var req4 = https.request(options4, function(res) {
                                console.log("statusCode: ", res.statusCode);
                                console.log("headers: ", res.headers);

                                res.on('data', function(d) {
                                    console.log("Response from Service: " + d); //logging the response to standard out for debugging, this will be turned off in Production Env

                                    var result4; //this will hold the intermediate result object to save the parsed JSON response from each API call

                                    try {
                                        result4 = JSON.parse(d);
                                    } catch (err) {
                                        result4 = {'status_code': 500, 'status_text': 'JSON Parse Failed'};
                                    }

                                    //if JSON response has current_observation attribute then weather data was successfully received, push this object to result array
                                    if(result4.current_observation != null) {
                                        weatherData.push(result4);
                                    }

                                    //After making all four calls to Weather API, render the response page based on the size of final Response Object
                                    console.log("Array size of response: " + weatherData.length);
                                    if(weatherData != null) {
                                        console.log("More than one record in weatherdata object!!!");
                                        response.render('weather/WeatherResultForCities', {
                                            title: 'Weather Data',
                                            weatherInfo: weatherData
                                        });
                                    } else {
                                        console.log("Some error occured!!");
                                        response.render('weather/WeatherSearch', {
                                            title: 'Search Failed',
                                            error: "Search failed, please try again!!"
                                        });
                                    }

                                });
                            });
                            req4.end();

                        });
                    });
                    req3.end();

                });
            });
            req2.end();

        });


    });
    req1.end();

};
