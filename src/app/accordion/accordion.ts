export interface Accordion {
	title: string;
	data?: string;
	author?: {
		name: string;
		link: string;
	};
	image?: string;
	contents?: Accordion[];
}
