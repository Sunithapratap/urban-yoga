import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard/dashboard.service';
import { Chart } from 'chart.js';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public programDetails = [];
    public programDetail = {
        'program': {
            'name': '',
            'totalMonthlySales': '',
            'currentYearSalesByMon': [],
            'previousYearSalesByMon': [],
            'pricingOptions': [],
            'monthlyAttendance': '',
            'sales': {
                'currentYear': [],
                'previousYear': []
            },
            'chart': [],
            'showOptionsBool': false
        }
    };
    public programs = [];
    public pricings = [];

    constructor(private dashboardSvc: DashboardService) {}

    getPricings(program) {
        const programDetail = {
            'program': {
                'name': '',
                'totalMonthlySales': '',
                'currentYearSalesByMon': [],
                'previousYearSalesByMon': [],
                'pricingOptions': [],
                'monthlyAttendance': '',
                'sales': {
                    'currentYear': [],
                    'previousYear': []
                },
                'chart': [],
                'showOptionsBool': false,
                'canvasId': ''
            }
        };
        this.dashboardSvc.getAllPricings().subscribe((response) => {
            this.pricings = response;
            const options = this.pricings.filter(function (nodeItem) {
                return (nodeItem.ProgramID === program.ProgramID);
            });
            programDetail.program.pricingOptions = options;
            programDetail.program.name = program.Name;
            programDetail.program.totalMonthlySales = program.TotalMonthlySales;
            programDetail.program.sales.currentYear = program.Sales.CurrentYear;
            programDetail.program.sales.previousYear = program.Sales.PreviousYear;
            programDetail.program.canvasId = program.Name;
            programDetail.program.chart = new Chart('canvas', {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            data: programDetail.program.sales.currentYear,
                            borderColor: '#3cba9f',
                            fill: true
                        },
                        {
                            data: programDetail.program.sales.previousYear,
                            borderColor: '#ffcc00',
                            fill: true
                        },
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: true
                        }],
                        yAxes: [{
                            display: true
                        }],
                    }
                }
            });
        });
        return programDetail;
    }

    getPrograms() {
        this.dashboardSvc.getAllPrograms().subscribe((response) => {
            this.programs = response;
            if (this.programs && this.programs.length !== 0) {
                for (let i = 0; i < this.programs.length; i++) {
                    this.programDetail = this.getPricings(this.programs[i]);
                    this.programDetails.push(this.programDetail);
                }
            }
        });
    }

    showOptions(prog) {
        prog.showOptionsBool = !prog.showOptionsBool;
    }

    ngOnInit() {
        this.getPrograms();
    }
}
