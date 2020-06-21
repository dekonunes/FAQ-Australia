import { Accordion } from '../accordion/accordion';

export const transport: Accordion = {
	title: 'Transporte',
	contents: [{
		title: 'Horários e planejamento',
		data: `O Google Maps te dá o numero da linha que você pode usar e acompanhar em tempo real os horários.<br><br>
			Há o aplicativo trip view que te permite verificar em tempo real o horário de cada modo de transporte (trem, ônibus, ferry, light rail, etc)<br><br>`,
		links: [{
				title: 'Android',
				url: 'https://play.google.com/store/apps/details?id=com.grofsoft.tripview.lite'
			}, {
				title: 'iOS',
				url: 'https://apps.apple.com/au/app/tripview-lite/id312389512' }]
	}, {
		title: 'Meios de pagamento',
		data: 'Em Sydney o sistema de transporte é o Opal card, que serve para todos os modos de transporte, ou o seu cartão de débito e crédito que possua tecnologia contactless payment'
	}, {
		title: 'Horários de pico',
		data: 'Das 7: às 9:00, e das 16:00 às 18:30 o preço da passagem fica 50% maior'
	}, {
		title: 'Limites',
		data: 'Depois de 8 viagens o preço da passagem cai pela metade. O valor maximo diario é de $16.10 o dia (fora Domingo) ou $50 a semana'
	}, {
		title: 'Domingos e feriados',
		data: 'Preço é fixo em $2.80 independente de quantas viagens ou distancia'
	}, {
		title: 'Recargas',
		data: `O cartão do opal pode ser recarregado através do próprio aplicativo Opal,
			por algumas maquinas de recarga que ficam em grandes terminais (Quando usar esse metodo espere concluir tudo antes de tirar o cartão se não você pode perder seu dinheiro),
			ou você pode solicitar a recarga automática (auto top up) pelo app`,
		links: [{
				title: 'Android',
				url: 'https://play.google.com/store/apps/details?id=au.com.opal.travel'
			}, {
				title: 'iOS',
				url: 'https://apps.apple.com/au/app/opal-travel/id941006607' }]
	}, {
		title: 'Perda',
		data: 'Registrando seu opal você consegue recuperar seu saldo através da central de atendimento ou site'
	}]
};
