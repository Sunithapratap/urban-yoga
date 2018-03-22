import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    public showDashboardsLinks = true;
    public navLinks = [
        {
            'label': 'Dashboard',
            'path': '',
            'isActive': true,
            'subLinks': [
                {
                    'label': 'Dashboard',
                    'path': '',
                    'isActive': false
                },
                {
                    'label': 'Business Overview',
                    'path': '',
                    'isActive': true
                },
                {
                    'label': 'Schedule',
                    'path': '',
                    'isActive': false
                },
                {
                    'label': 'Reports',
                    'path': '',
                    'isActive': false
                }
            ],
            'showDashboardsLinks': true
        },
        {
            'label': 'Sign In',
            'path': '',
            'isActive': false,
            'subLinks': []
        },
        {
            'label': 'Classes',
            'path': '',
            'isActive': false,
            'subLinks': []
        },
        {
            'label': 'Appointments',
            'path': '',
            'isActive': false,
            'subLinks': []
        },
        {
            'label': 'Workshops',
            'path': '',
            'isActive': false,
            'subLinks': []
        },
        {
            'label': 'Client Home',
            'path': '',
            'isActive': false,
            'subLinks': []
        },
        {
            'label': 'Retail',
            'path': '',
            'isActive': false,
            'subLinks': []
        }
    ];

    public subLinks = [
        {
            'label': 'Dashboard',
            'path': '',
            'isActive': false
        },
        {
            'label': 'Business Overview',
            'path': '',
            'isActive': true
        },
        {
            'label': 'Schedule',
            'path': '',
            'isActive': false
        },
        {
            'label': 'Reports',
            'path': '',
            'isActive': false
        }
    ];


    constructor() {
    }

    ngOnInit() {
    }

}
