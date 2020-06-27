import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { RouterModule } from '@angular/router';

describe('AccordionComponent', () => {
	let component: AccordionComponent;
	let fixture: ComponentFixture<AccordionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AccordionComponent ],
			imports: [
				RouterModule.forRoot([])
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccordionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => expect(component).toBeTruthy());
});
