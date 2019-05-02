import { Component } from '@angular/core';

@Component({
    selector: 'app-carpool',
    templateUrl: './carpool.component.html',
    styleUrls: ['./carpool.component.css']
})
export class CarpoolComponent {

    carPool1 = false;
    carPool2 = false;
    carPool3 = false;
    carPool4 = false;

    constructor() {
    }

    changeCarpool(carpoolName: number) {
        switch (carpoolName) {
            case 1: this.carPool1 = !this.carPool1; break;
            case 2: this.carPool2 = !this.carPool2; break;
            case 3: this.carPool3 = !this.carPool3; break;
            case 4: this.carPool4 = !this.carPool4; break;
        }
    }
}
