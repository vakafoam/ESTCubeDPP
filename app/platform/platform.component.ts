import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PLATFORM } from '../shared/constant/constants';


@Component({
    moduleId: module.id,
    selector: 'platform',
    templateUrl: 'platform.component.html',
    styleUrls: [ 'platform.component.css']
})

export class PlatformComponent implements OnInit { 
    private platforms = PLATFORM;
    private platformArr: string[] = [];
    private platForm: FormGroup;
    private selectedPlatform: string;

    constructor(private formB: FormBuilder) {}

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
}