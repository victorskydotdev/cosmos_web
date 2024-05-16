import '../scss/main.scss';

import { showHideNav } from './menu-interaction';
import { checkAvailFunct } from './ride-availability';
import { animateOnScroll } from './scrollAnimation';
import { storeUserDetails } from './handleForm';
import { pTrigger } from './payment';

showHideNav();
// checkAvailFunct();
animateOnScroll();
storeUserDetails();
pTrigger();
