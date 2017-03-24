import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PLATFORM } from '../shared/constant/constants';

import { UploadService } from './service/upload.service';

@Component({
    moduleId: module.id,
    selector: 'platform',
    templateUrl: 'platform.component.html',
    styleUrls: ['platform.component.css'],
    providers: [UploadService]
})

export class PlatformComponent implements OnInit {
    private platforms = PLATFORM;
    private platformArr: string[] = [];
    private platForm: FormGroup;
    private selectedPlatform: string;
    private scriptFile: File;

    constructor(private formB: FormBuilder, private service: UploadService) { }

    ngOnInit() {
        this.platformArr = Object.keys(this.platforms).filter(Number);
        this.configureForm();
    }

    configureForm() {
        this.platForm = this.formB.group({
            platform: [1, Validators.required]
        });
    }

    submitSelected() {
        this.selectedPlatform = this.platforms[this.platForm.value["platform"]];
        console.log("Selected Platform: " + this.selectedPlatform);
    }

    fileChange(event) {
        this.scriptFile = event.target.files[0];
        console.log("file chosen");
        console.log(this.scriptFile.name);
    }

    upload() {
        this.service.makeFileRequest("http://127.0.0.1:5000/", [], this.scriptFile) // to flask application
            .subscribe((result) => {
                console.log(result);
                console.log("Something happened");
            }, (error) => {
                console.error(error);
            });
    }
}