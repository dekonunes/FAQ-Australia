import { Accordion } from '../accordion/accordion';

export const tax: Accordion = {
	title: 'Impostos e documentação',
	contents: [{
		title: 'Tax file number (TFN)',
		data: 'O TFN é um identificador unico de cada pessoa, ',
		links: [ {
			title: 'Australian Taxation Office',
			url: 'https://www.ato.gov.au/Individuals/Tax-file-number/Apply-for-a-TFN/'
		}]
	}, {
		title: 'Medicare',
		data: `No imposto que você paga, você já está sendo cobrado pelo serviço do medicare que é o sistema de saúde australiano.
			Como estrangeiro não tem acesso a esse serviço, podemos pedir a restituição do valor cobrado quando fazemos a declaração de imposto preenchendo
			o formulário do link e enviando junto de uma cópia autenticada do passaporte.<br><br>
			Avise o seu contador`,
		links: [ {
			title: 'Formulário para isenção do Medicare',
			url: 'https://www.servicesaustralia.gov.au/individuals/forms/ms015'
		}]
	}]
};
