"use strict";
var router_1 = require('@angular/router');
var app_feedback_component_1 = require("./app.feedback.component");
var app_temperature_component_1 = require("./app.temperature.component");
var appRoutes = [
    { path: 'home', component: app_temperature_component_1.TemperatureComponent },
    { path: 'feedback', component: app_feedback_component_1.FeedBackComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map