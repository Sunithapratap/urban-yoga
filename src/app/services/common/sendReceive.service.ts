import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SendReceiveService {

    constructor(protected http: HttpClient) { }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        return Observable.throw(errMsg);
    }

    public sendData(apiId): Observable<any> {
        return this.http.get(environment.url + apiId);
    }

}
