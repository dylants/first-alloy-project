if (Ti.Geolocation.locationServicesEnabled) {
    // set the geolocation purpose which is required
    Titanium.Geolocation.purpose = "Get current location";

    Titanium.Geolocation.getCurrentPosition(function(event) {
        var region = {
            latitude: event.coords.latitude,
            longitude: event.coords.longitude,
            animate: true,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        };

        Ti.API.log("info", "setting region to: " + JSON.stringify(region));

        $.mapView.region = region;
    });
} else {
    alert("Please enable location services");
}