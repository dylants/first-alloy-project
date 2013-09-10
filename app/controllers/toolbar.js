/*
 * Click events
 */

var showHome = function(event) {
    var view;

    Ti.API.log("info", "showing home");

    // build the home view    
    view = Alloy.createController("home").getView();

    // update the main view
    updateMainView(view);
};

var showMap = function(event) {
    var view;

    Ti.API.log("info", "showing map");

    // build the map view
    view = Alloy.createController("map").getView();

    // update the main view
    updateMainView(view);
};

/*
 * Helper functions
 */

var updateMainView = function(view) {
    var mainView;

    // This main view is set in the Globals in the index controller
    mainView = Alloy.Globals.mainView;

    // Remove the existing view
    mainView.removeAllChildren();

    // add the new view to our main view
    mainView.add(view);
};

Ti.App.addEventListener("showHome", function(event) {
    showHome(event);
});

Ti.App.addEventListener("showMap", function(event) {
    showMap(event);
});