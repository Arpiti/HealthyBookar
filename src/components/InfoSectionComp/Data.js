import svg2 from '../../images/about.svg';
import svg3 from '../../images/6monthmotherhood.svg';
import svg4 from '../../images/3month.svg';
import svg5 from '../../images/babyFood.svg';

const RECOMMENDED_PLAN_TYPE_1 = '3MonthsPostDeliveryMother';
const RECOMMENDED_PLAN_TYPE_2 = '6MonthsPreDeliveryMother';
const RECOMMENDED_PLAN_TYPE_3 = '3MonthsNewBorn';

const MOTHER = 'Mother';
const BABY = 'Baby';

const VEG_PREFERENCE = 'Vegetarian';
const NON_VEG_PREFERENCE = 'Non-Vegetarian';
const EGG_PREFERENCE = 'Eggetarian';

export const homeObj1 = {
    name: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Us',
    headline: 'Spartans! What is your profession?',
    description: 'We make food for the pregnant women and their newly born knames choosing the best nutrion and ingredients, selected by professionals and recommended by experts.  We deliver it to your doostep 3 times a day corresponding to our subscription plan. First of its kind ever in the Indian health ecosystem in a niche to pregnant women.',
    buttonLabel: 'Get started', 
    imgStart: false,
    img: svg2,
    alt: 'choose food',
    dark: false,
    primary: false,
    darkText: true,
    multipleButtons: false,
    isButtonScroll: true,
    linkTo: 'services'
};

export const homeObj2 = {
    name: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '3 Months Plan',
    headline: 'Food subscription for soon to-be mothers',
    description: 'Recommended - 3 months after the delivery, We make food for the pregnant women and their newly born knames choosing the best nutrion and ingredients, selected by professionals and recommended by experts.',
    buttonLabel: 'Subscribe now',
    imgStart: true,
    img: svg3,
    alt: 'choose food',
    dark: false,
    primary: false,
    darkText: true,
    multipleButtons: false,
    isButtonScroll: false,
    linkTo: '/subscribe',
    item: {
        id: RECOMMENDED_PLAN_TYPE_1,
        type: 'recommended',
        subject: MOTHER,
        deliveryDone: true,
        eatPreference: 'Vegetarian',
        planDurationMother: 3,
        planDurationNewBorn: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        price: 6000,
        paused: false
    }
};

export const homeObj3 = {
    name: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '6 months Plan',
    headline: 'Young to-be-mothers food package',
    description: 'Recommended - 6 months before the delivery, We make food for the pregnant women and their newly born knames choosing the best nutrion and ingredients, selected by professionals and recommended by experts.',
    buttonLabel: 'Subscribe Now',
    imgStart: false,
    img: svg4,
    alt: '6 month plan subscription',
    dark: true,
    primary: true,
    darkText: false,
    multipleButtons: false,
    isButtonScroll: false,
    linkTo: '/subscribe',
    item: {
        id: RECOMMENDED_PLAN_TYPE_2,
        type: 'recommended',
        subject: MOTHER,
        deliveryDone: false,
        eatPreference: 'vegetarian',
        planDurationMother: 6,
        planDurationNewBorn: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        price: 12000,
        paused: false
    }
};

export const homeObj4 = {
    name: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Baby Food Subscription',
    headline: 'Choose the best food for your new born',
    description: 'This is a special craft food subscription plan for new born babies including 3 meals per day as per the expert and professional nutritionist.',
    buttonLabel: 'Subscribe now',
    imgStart: true,
    img: svg5,
    alt: 'Baby food subscription',
    dark: false,
    primary: false,
    darkText: true,
    multipleButtons: true,
    isButtonScroll: false,
    linkTo: '/subscribe',
    item: {
        id: RECOMMENDED_PLAN_TYPE_3,
        type: 'recommended',
        subject: BABY,
        deliveryDone: true,
        eatPreference: 'vegetarian',
        planDurationMother: 3,
        planDurationNewBorn: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        price: 10000,
        paused: false
    }
};