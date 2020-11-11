import '../css/index.scss';

import firstFormHandler from './firstForm/formHandler';
import showPassword from './firstForm/showPassword';

import inputPhoneMask from './secondForm/inputPhoneMask';
import secondFormHandler from './secondForm/formHandler';

import thirdFormHandler from './thirdForm/formHandler';
import {showAppropriateSubscription} from "./thirdForm/showAppropriateSubscription";

import {fourFormHandler} from "./fourForm/formHandler";
import {cardMask} from './common/masks';
import {expiryDayMask} from './common/masks'

import {setTheme} from './changeTheme';

export let errors = new Map();


firstFormHandler();
showPassword();

secondFormHandler();
inputPhoneMask();

thirdFormHandler();
showAppropriateSubscription();

fourFormHandler();
cardMask();
expiryDayMask();

setTheme();