import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-radio-button-control',
    templateUrl: './radio-button-control.component.html',
    styleUrls: ['./radio-button-control.component.scss']
})
export class RadioButtonControlComponent implements OnInit {
    @Input() inputValue:string;
    @Input() labelValue:string;
    @Input() isChecked:boolean;
    constructor() { }

    ngOnInit(): void {
    }

}
