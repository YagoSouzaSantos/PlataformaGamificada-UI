import { Component, Input } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    @Input() title: string = '';

}