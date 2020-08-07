import { Accordion } from './accordion';
import { uber } from '../data/uber';
import { labour } from '../data/labour';
import { visa } from '../data/visa';
import { investiment } from '../data/investiment';
import { driveLicence } from '../data/drive-licence';
import { transport } from '../data/transport';
import { supermarket } from '../data/supermarket';
import { habitation } from '../data/habitation';
import { tax } from '../data/tax';
import { VET } from '../data/VET';
import { job } from '../data/job';
import { waiter } from '../data/waiter';
import { traffic } from '../data/traffic-controller';
import { auPair } from '../data/au-pair';

export const accordions: Accordion[] =
	[auPair, driveLicence, habitation, investiment, job, labour, supermarket, tax, traffic, transport, uber, VET, visa, waiter];
