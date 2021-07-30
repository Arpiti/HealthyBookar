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
    headline: 'What do we do ?',
    description: 'We at Healthy Bookar believe providing healthy nutritious food for pregnancy women, Post pregnancy & 6Mounths+ Baby Food.  We collected data from 125+ Doctors where specialist in Obstetrics & Gynecology, we prepared chat How much daily consume nutrients needed for pregnancy woman & Post pregnancy. And we preparing food accordingly. Then I came up with this idea of serving my friends circle and I collected honest feedbacks from them, I decided that day to spread this around the world. 2021 was Healthy Bookar started the operations in Hyderabad being the first healthy nutritious food provider for pregnancy women. The aim of the Healthy Bookar is keep pregnancy woman healthy, Post pregnancy & Healthy baby.',
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
    topLine: ' 3 Months Plan ',
    headline: 'Pregnancy Nutritious Food',
    description: 'Eating a nutritious diet during pregnancy is linked to good brain development and a healthy birth weight, and can reduce the risk of many birth defects. A balanced diet will also reduce the risks of anemia, as well as other unpleasant pregnancy symptoms such as fatigue and morning sickness',
    buttonLabel: 'Subscribe now',
    imgStart: true,
    img: svg3,
    alt: '3 months plan - healthybookar',
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
        eatPreference: VEG_PREFERENCE,
        planDurationMother: 3,
        planDurationBaby: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        paused: false
    }
};

export const homeObj3 = {
    name: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '6 Months Plan',
    headline: 'Post Pregnancy Nutritious Food',
    description: 'After you give birth, your diet is just as important. It helps your body recover and gives you the energy you need to care for your little one.',
    buttonLabel: 'Subscribe Now',
    imgStart: false,
    img: svg4,
    alt: '6 month plan - healthybookar',
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
        eatPreference: VEG_PREFERENCE,
        planDurationMother: 6,
        planDurationBaby: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        paused: false,
    }
};

export const homeObj4 = {
    name: 'babyFood',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Custom Plan for the New Born',
    headline: 'Baby Nutritious Food',
    description: 'Baby nutrition involves making sure that Baby eat healthy foods to help them grow and develop normally, as well as to prevent obesity and future disease.',
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
        eatPreference: VEG_PREFERENCE,
        planDurationMother: null,
        planDurationBaby: 3,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        paused: false,
    }
};