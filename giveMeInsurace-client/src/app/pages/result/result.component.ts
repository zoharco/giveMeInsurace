import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IResultsServer, IResultPrint } from 'src/app/shared/models/results.model';
import { ResultService } from 'src/app/shared/services/result.service';
import { CompanyDataService } from 'src/app/shared/services/company-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ICompany } from 'src/app/shared/models/company.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
    totalResult: number;
    displayedColumns: string[] = ['company', 'track', 'comprehensive', 'compulsory', 'total'];
    resultPrint: IResultPrint[] = [];

    carYear: number;
    resultServer: IResultsServer[];
    companiesData: ICompany[];

    companiesSubscription: Subscription;
    resultSubscription: Subscription;
    carYearSubscrition: Subscription;

    constructor(private companiesDataService: CompanyDataService,
        private resultsService: ResultService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.companiesSubscription = this.companiesDataService.getCompanyDetails().subscribe(data => {
            this.companiesData = data;
            this.carYearSubscrition = this.route.params.subscribe((params: Params) => {
                this.carYear = params['year'];
                this.showResult();
            });
        });
    }

    showResult() {
        this.resultSubscription = this.resultsService.getResults(this.carYear).subscribe(res => {
            this.resultServer = res;
            console.log({ res });

            this.resultServer.forEach(resultItem => {
                let resultNew: IResultPrint = {
                    company: this.companiesData.find(comp => resultItem.company_id === comp.id).name,
                    track: this.companiesData.find(comp => resultItem.company_id === comp.id).track,
                    comprehensive: resultItem.compeherensive,
                    compulsory: resultItem.compulsory,
                    total: resultItem.compeherensive + resultItem.compulsory,
                };
                this.resultPrint.push(resultNew);
            });
            this.totalResult = this.resultPrint.length;
        });
       
    }

    navigateToPrevPage($event) {
        this.location.back();
    }

    ngOnDestroy(): void {
        this.companiesSubscription.unsubscribe();
        this.carYearSubscrition.unsubscribe();
        this.resultSubscription.unsubscribe();
    }
}
