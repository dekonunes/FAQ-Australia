import { Injectable } from '@angular/core';
import { accordions } from './accordion.mock';

@Injectable({
	providedIn: 'root'
})
export class AccordionService {

	constructor() { }

	getData() {
		return accordions;
	}
}
