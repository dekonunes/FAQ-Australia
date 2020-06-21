import { Accordion } from '../accordion/accordion';

export const tax: Accordion = {
	title: 'Impostos e documentacao',
	contents: [{
		title: 'Tax file number (TFN)',
		data: 'O TFN é um identificador unico de cada pessoa, ',
		links: [ {
			title: 'Australian Taxation Office',
			url: 'https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/'
		}]
	}]
};
