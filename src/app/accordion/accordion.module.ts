import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const CMP = [AccordionComponent];

@NgModule({
	declarations: CMP,
	entryComponents: CMP,
	exports: CMP,
	imports: [
		CommonModule,
		MatExpansionModule,
		MatButtonModule,
		MatInputModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AccordionModule { }
