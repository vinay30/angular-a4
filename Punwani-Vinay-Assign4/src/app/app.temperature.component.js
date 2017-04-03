"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_myremoteservice_1 = require('./app.myremoteservice');
// This component consumes the re-usable service.
var TemperatureComponent = (function () {
    function TemperatureComponent(remoteService) {
        this.remoteService = remoteService;
    }
    TemperatureComponent.prototype.processData = function (data) {
        if (data["Celsius"]) {
            this.returnedCelsius = data["Celsius"];
            this.displayedFahrenheit = this.fahrenheit;
        }
        else if (data["Fahrenheit"]) {
            this.returnedFahrenheit = data["Fahrenheit"];
            this.displayedCelsius = this.celsius;
        }
    };
    TemperatureComponent.prototype.submitCelsius = function (valid) {
        this.celsiusFormSubmitted = true;
        if (valid) {
            this.convertToF(this.celsius);
        }
    };
    TemperatureComponent.prototype.submitFahrenheit = function (valid) {
        this.fahrenheitFormSubmitted = true;
        if (valid) {
            this.convertToC(this.fahrenheit);
        }
    };
    TemperatureComponent.prototype.convertToC = function (fahrenheit) {
        var _this = this;
        this.remoteService.getCelsius(fahrenheit)
            .subscribe(
        // Success.
        function (data) {
            _this.processData(data);
        }, 
        // Error.
        function (error) {
            //alert(error)
        }, 
        // Final Instructions.
        function () {
            console.log("Finished");
        });
    };
    TemperatureComponent.prototype.convertToF = function (celsius) {
        var _this = this;
        this.remoteService.getFahrenheit(celsius)
            .subscribe(
        // Success.
        function (data) {
            _this.processData(data);
        }, 
        // Error.
        function (error) {
            //alert(error)
        }, 
        // Final Instructions.
        function () {
            console.log("Finished");
        });
    };
    TemperatureComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/temperature.html'
        }), 
        __metadata('design:paramtypes', [app_myremoteservice_1.MyRemoteService])
    ], TemperatureComponent);
    return TemperatureComponent;
}());
exports.TemperatureComponent = TemperatureComponent;
//# sourceMappingURL=app.temperature.component.js.map