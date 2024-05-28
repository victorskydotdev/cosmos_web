import '../scss/main.scss';

import { showHideNav } from './menu-interaction';
import { checkAvailFunct } from './ride-availability';
import { animateOnScroll } from './scrollAnimation';
import { storeUserDetails } from './handleForm';
import { handleRadioChange, pTrigger } from './payment';

showHideNav();
animateOnScroll();
handleRadioChange();
