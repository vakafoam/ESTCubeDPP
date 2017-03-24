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
var forms_1 = require('@angular/forms');
var constants_1 = require('../shared/constant/constants');
var upload_service_1 = require('./service/upload.service');
var PlatformComponent = (function () {
    function PlatformComponent(formB, service) {
        this.formB = formB;
        this.service = service;
        this.platforms = constants_1.PLATFORM;
        this.platformArr = [];
    }
    PlatformComponent.prototype.ngOnInit = function () {
        this.platformArr = Object.keys(this.platforms).filter(Number);
        this.configureForm();
    };
    PlatformComponent.prototype.configureForm = function () {
        this.platForm = this.formB.group({
            platform: [1, forms_1.Validators.required]
        });
    };
    PlatformComponent.prototype.submitSelected = function () {
        this.selectedPlatform = this.platforms[this.platForm.value["platform"]];
        console.log("Selected Platform: " + this.selectedPlatform);
    };
    PlatformComponent.prototype.fileChange = function (event) {
        this.scriptFile = event.target.files[0];
        console.log("file chosen");
        console.log(this.scriptFile.name);
    };
    PlatformComponent.prototype.upload = function () {
        this.service.makeFileRequest("http://127.0.0.1:5000/", [], this.scriptFile) // to flask application
            .subscribe(function (result) {
            console.log(result);
            console.log("Something happened");
        }, function (error) {
            console.error(error);
        });
    };
    PlatformComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'platform',
            templateUrl: 'platform.component.html',
            styleUrls: ['platform.component.css'],
            providers: [upload_service_1.UploadService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, upload_service_1.UploadService])
    ], PlatformComponent);
    return PlatformComponent;
}());
exports.PlatformComponent = PlatformComponent;
//# sourceMappingURL=platform.component.js.map