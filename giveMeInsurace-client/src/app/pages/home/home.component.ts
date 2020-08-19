import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetailsCarService } from 'src/app/shared/services/details-car.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /* cars number
        2089204, 2078010, 2078011, 2078016, 2079554, 2018052
        2078012, 2078015, 2078013, 2079695, 2089204 
    */
    searchCarForm: FormGroup;
    carYear: number;
    showDetaild: boolean = false;

    constructor(private fb: FormBuilder,
                private detailCarService: DetailsCarService,
                private router: Router) { }

    ngOnInit(): void {
        this.searchCarForm = this.fb.group({
            carNumber: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit($event) {
        const cardNumber = this.searchCarForm.value['carNumber'];
        this.detailCarService.getCar(cardNumber).subscribe(carD => {
            this.carYear = carD['year'];
            this.detailCarService.notifyCar(carD);
            this.showDetaild = true;
        });
    }

    showResult() {
        if(!this.carYear){
            alert('Please search for car then look for result');
        } else{
            this.router.navigateByUrl(`result/${this.carYear}`);
        }
    }

}
