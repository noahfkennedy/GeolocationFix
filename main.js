/* Javascript, this does NOT include map initialization (there are many guides for that online) */
Template.map.rendered = function(){

  Session.set('coords', null)
  var map = L.map('map', {
    doubleClickZoom: false
  })
  map.setView([0, 0], 17);

  Tracker.autorun(function() {
    console.log("Running");
    Session.set('coords', Geolocation.latLng())
    if (Session.get('coords') != null) {
      var lat = Session.get('coords').lat;
      var lng = Session.get('coords').lng;
      map.setView([lat, lng],17);
    }
  })
}
