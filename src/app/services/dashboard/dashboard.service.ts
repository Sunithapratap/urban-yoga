import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import {SendReceiveService} from '../../services/common/sendReceive.service';

@Injectable()
export class DashboardService {

    constructor(private router: Router, private sendReceiveService: SendReceiveService) {}

    getAllPrograms() {
        const apiId = '5bdb3';
        return this.sendReceiveService.sendData(apiId);
    }

    getAllPricings() {
        const apiId = '47axv';
        return this.sendReceiveService.sendData(apiId);
    }
}
