import { Component } from '@angular/core';
import { AccordionService } from './accordion.service';
import { Accordion } from './accordion';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
	accordions: Accordion[];
	params: Params;

	constructor(private svc: AccordionService, private route: ActivatedRoute) {
		svc.getData().subscribe((accordions) => {
					this.accordions = accordions;
					setTimeout(() => this.route.queryParams.subscribe((params: Params) => this.params = params));
					// ?item=investimento&subitem=spaceship
				});
	}
}
