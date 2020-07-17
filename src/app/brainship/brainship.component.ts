import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
	selector: 'app-brainship',
	templateUrl: './brainship.component.html',
	styleUrls: ['./brainship.component.scss']
})
export class BrainshipComponent {

	constructor(private gaService: GoogleAnalyticsService) { }

	gaTrack(category: string, action: string, item?: string) {
		this.gaService.event(category, action, item);
	}

}
