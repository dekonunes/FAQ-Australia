import { Component } from '@angular/core';
import { AccordionService } from './accordion.service';
import { Accordion } from './accordion';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
	accordions: Accordion[];

	constructor(svc: AccordionService) {
		this.accordions = svc.getData();
	}
}
