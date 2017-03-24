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
var Observable_1 = require('rxjs/Observable');
var UploadService = (function () {
    function UploadService() {
    }
    UploadService.prototype.makeFileRequest = function (url, params, file) {
        return Observable_1.Observable.create(function (obs) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("file", file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        //obs.next(JSON.parse(xhr.response));
                        obs.complete();
                        console.log("Request complete");
                    }
                    else {
                        obs.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            console.log("Request opened");
            xhr.send(formData);
            console.log("Request sent");
        }, function (err) { return Observable_1.Observable.throw(err); });
        //---------------------------------
        // var xhr = new XMLHttpRequest();
        // if ("withCredentials" in xhr) {
        //     // Check if the XMLHttpRequest object has a "withCredentials" property.
        //     // "withCredentials" only exists on XMLHTTPRequest2 objects.
        //     xhr.open('POST', url, true);
        // } else if (typeof XDomainRequest != "undefined") {
        //     // Otherwise, check if XDomainRequest.
        //     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        //     xhr = new XDomainRequest();
        //     xhr.open('POST', url);
        // } else {
        //     // Otherwise, CORS is not supported by the browser.
        //     xhr = null;
        // }
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map