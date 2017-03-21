import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlatformComponent } from './platform/platform.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ 
        BrowserModule,
        ReactiveFormsModule ],
    declarations: [ 
        AppComponent,
        PlatformComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}