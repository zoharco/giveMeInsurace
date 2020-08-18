import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {


    constructor(private http: HttpClient) { }

    subscribetion: Subscription;
    ngOnInit(): void {
        this.subscribetion = this.http.get('assets/data').subscribe(data => {
            console.log(data);
        });
    }

    ngOnDestroy(): void {
        this.subscribetion.unsubscribe();
    }
}
