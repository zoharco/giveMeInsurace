import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarsService } from 'src/app/shared/services/cars.service';
import { ICar } from 'src/app/shared/models/car.model';

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
    car: ICar;


    constructor(private fb: FormBuilder,
        private carData: CarsService) { }

    ngOnInit(): void {
        this.searchCarForm = this.fb.group({
            carNumber: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit($event) {
        const cardNumber = this.searchCarForm.value['carNumber'];
        this.carData.getCar(cardNumber).subscribe(carD => this.car = carD);
    }

}
