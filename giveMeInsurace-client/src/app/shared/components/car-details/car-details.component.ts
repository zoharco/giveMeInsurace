import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICar } from '../../models/car.model';
import { DetailsCarService } from '../../services/details-car.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit, OnDestroy {
    private carSubscription: Subscription;
    private carDetails;
    carDetailsForm: FormGroup;
    @Input() showDetaild:boolean;
    constructor(private fb: FormBuilder,
                private commonHCD: DetailsCarService) { }

    ngOnInit(): void {
        this.carDetailsForm = this.fb.group({
            modelCode: [''],
            year: [''],
            description: [''],
            road_ascent_date: [''],
            air_bags: [''],
            esp: [''],
            fcw: [''],
            ldw: [''],
            gear_type: ['']
        });
        this.carSubscription = this.commonHCD.notifyObservable.subscribe(car => 
            this.updateCarDetails(car)
        );
    }
    
    updateCarDetails(car: ICar){
        this.carDetailsForm.patchValue({
            "modelCode": car.modelCode,
            "year": car.year,
            "description": car.description,
            "road_ascent_date": car.road_ascent_date,
            "air_bags": car.air_bags,
            "gear_type": car.gear_type === 1 ? 'gear_type_1' : 'gear_type_0',
            "esp": car.esp === 1 ? 'esp_1' : 'esp_0',
            "fcw": car.fcw === 1 ? 'fcw_1' : 'fcw_0',
            "ldw": car.ldw === 1 ? 'ldw_1' : 'ldw_0'
        });
    }

    ngOnDestroy() {
        this.carSubscription.unsubscribe();
    }
}

