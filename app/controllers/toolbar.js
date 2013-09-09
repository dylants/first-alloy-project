var showHome = function(event) {
    Ti.API.log("info", "showing home");
    var view = Alloy.createController("home").getView();
    Alloy.Globals.parent.add(view);
};

var showMap = function(event) {
    Ti.API.log("info", "showing map");
    var view = Alloy.createController("map").getView();
    Alloy.Globals.parent.add(view);
};