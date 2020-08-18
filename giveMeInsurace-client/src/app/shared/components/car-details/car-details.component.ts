import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICar } from '../../models/car.model';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit, AfterContentInit {
    @Input() carDetails:ICar;
    carDetailsForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        
        ) { }

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
        this.updateCarDetails();
    }

    ngAfterContentInit(){
        
    }
    updateCarDetails(){
        this.carDetailsForm.patchValue({
            "modelCode": "12345",
            "year": "2020",
            "description": "יונדאי I10",
            "date": "01/01/2011",
            "air_bags": "6",
            
        });
    }

    onSubmit() {

    }
}

/*

const updatedUserInfo = {
  'name': 'Leonardo Giroto',
  'email': 'leonardo@email.com',
  'address': {
    'zipCode': '22630-010',
    'street': 'Avenida Lucio Costa',
    'number': 9999
  }
};
formGroup.setValue( updatedUserInfo );



*/

