import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/about.svg';
import svg3 from '../../images/6monthmotherhood.svg';
import svg4 from '../../images/3month.svg';
import svg5 from '../../images/babyFood.svg';

export const homeObj1 = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Us',
    headline: 'Spartans! What is your profession?',
    description: 'We make food for the pregnant women and their newly born kids choosing the best nutrion and ingredients, selected by professionals and recommended by experts.  We deliver it to your doostep 3 times a day corresponding to our subscription plan. First of its kind ever in the Indian health ecosystem in a niche to pregnant women.',
    buttonLabel: 'Get started', 
    imgStart: false,
    img: svg2,
    alt: 'choose food',
    dark: false,
    primary: false,
    darkText: true,
    multipleButtons: false
};

export const homeObj2 = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '3 Months Plan',
    headline: 'Food subscription for soon to-be mothers',
    description: 'Recommended - 3 months before the delivery, We make food for the pregnant women and their newly born kids choosing the best nutrion and ingredients, selected by professionals and recommended by experts.',
    buttonLabel: 'Subscribe now',
    imgStart: true,
    img: svg3,
    alt: 'choose food',
    dark: false,
    primary: false,
    darkText: true,
    multipleButtons: false
};

export const homeObj3 = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '6 months Plan',
    headline: 'Young to-be-mothers food package',
    description: 'Recommended - 6 months before the delivery, We make food for the pregnant women and their newly born kids choosing the best nutrion and ingredients, selected by professionals and recommended by experts.',
    buttonLabel: 'Subscribe Now',
    imgStart: false,
    img: svg4,
    alt: '6 month plan subscription',
    dark: true,
    primary: true,
    darkText: false,
    multipleButtons: false
};

export const homeObj4 = {
    id: 'signup',
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
    multipleButtons: true

};