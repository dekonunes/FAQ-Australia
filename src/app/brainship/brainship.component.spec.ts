import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainshipComponent } from './brainship.component';

describe('BrainshipComponent', () => {
	let component: BrainshipComponent;
	let fixture: ComponentFixture<BrainshipComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BrainshipComponent ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrainshipComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
