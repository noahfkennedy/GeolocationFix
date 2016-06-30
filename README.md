# GeolocationFix For Meteor

This is a workaround for the problem I had with using the Geolocation Atmosphere package to center map initialization. Upon trying to use Geolocation.latLng().lat(/lng), The asynch data call from Gelocation was slower than my code, so my map would initialize with the coordinates [null, null], since Geolocation.latLng() = null before asynchronous data loaded. 
This workaround uses Session.set and Tracker.autorun to create a data dependency, and wait for the data! 
Pointers/fixes/additions would be appreciated, still a work in progress! 
