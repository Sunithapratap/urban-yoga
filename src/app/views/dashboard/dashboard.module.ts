import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import {
    MatCardModule,
    MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';


@NgModule({
    imports: [

        CommonModule,
        MatCardModule,
        MatListModule,
        FlexLayoutModule,
        RouterModule.forChild(DashboardRoutes)
    ],
    exports: [

    ],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [DashboardComponent]
})

export class AppDashboardModule { }
