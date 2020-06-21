import { Injectable } from '@angular/core';
import { accordions } from './accordion.mock';
import { Observable } from 'rxjs';
import { Accordion } from './accordion';

@Injectable({
	providedIn: 'root'
})
export class AccordionService {

	constructor() { }

	getData(): Observable<Accordion[]> {
		return new Observable<Accordion[]>(subscriber => subscriber.next(accordions));
	}
}
