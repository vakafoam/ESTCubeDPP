import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';


@Injectable()

export class UploadService {



    makeFileRequest(url: string, params: Array<string>, file: File)
        : Observable<any> 
    {

        return Observable.create(obs => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            
            formData.append("file", file, file.name);
            
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        //obs.next(JSON.parse(xhr.response));
                        obs.complete();
                        console.log("Request complete");
                    } else {
                        obs.error(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            console.log("Request opened");
            xhr.send(formData);
            console.log("Request sent");
        },
        err => { return Observable.throw(err); });


        
        
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



    }

}