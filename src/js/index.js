import '../css/index.css'
import setUpSessionStorage from "./setUpSessionStorage";

import inputPhoneMask from './firstForm/inputPhoneMask'
import firstFormHandler from './firstForm/formHandler'

import secondFormHandler from './secondForm/formHandler'
import {showAppropriateSubscription} from "./secondForm/showAppropriateSubscription";

import thirdFormHandler from "./thirdForm/formHandler";
import inputCardMask from "./thirdForm/inputCardMask";
import expiryDayMask from "./thirdForm/expiryDayMask";

setUpSessionStorage()

inputPhoneMask()
firstFormHandler()

secondFormHandler()
showAppropriateSubscription()

thirdFormHandler()
inputCardMask()
expiryDayMask()
