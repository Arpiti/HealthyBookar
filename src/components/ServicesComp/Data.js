import Icon1 from '../../images/3_month_image.png';
import Icon2 from '../../images/6_month_image.png';
import Icon3 from '../../images/baby.png';

const RECOMMENDED_PLAN_TYPE_1 = '3MonthsPostDeliveryMother';
const RECOMMENDED_PLAN_TYPE_2 = '6MonthsPreDeliveryMother';
const RECOMMENDED_PLAN_TYPE_3 = '3MonthsNewBorn';

const MOTHER = 'Mother';
const BABY = 'Baby';

const VEG_PREFERENCE = 'Vegetarian';
const NON_VEG_PREFERENCE = 'Non-Vegetarian';
const EGG_PREFERENCE = 'Eggetarian';

export const servicesData = {
    topLine: 'Our Offerings',
    mainHeading: 'Food Subscriptions',
    cardIcon1: Icon1,
    cardHeading1: "3 months",
    cardInfo1: "Nutriotious food for mothers to keep them healthy and strong in their motherhood.",
    cardLink1: "/subscribe",
    item1: {
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
    },
    cardIcon2: Icon2,
    cardHeading2: "6 months",
    cardInfo2: "Nutriotious food for mothers to keep them healthy and strong in their motherhood.",
    cardLink2: "/subscribe",
    item2: {
        id: RECOMMENDED_PLAN_TYPE_2,
        type: 'recommended',
        subject: MOTHER,
        deliveryDone: false,
        eatPreference: 'Vegetarian',
        planDurationMother: 6,
        planDurationNewBorn: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        price: 12000,
        paused: false
    },
    cardIcon3: Icon3,
    cardHeading3: "Baby Food",
    cardInfo3: `Nutriotious food for babies to help them build the immunity and be fit like their parents.`,
    cardLink3: "/subscribe",
    item3: {
        id: RECOMMENDED_PLAN_TYPE_3,
        type: 'recommended',
        subject: BABY,
        deliveryDone: true,
        eatPreference: 'Vegetarian',
        planDurationMother: 3,
        planDurationNewBorn: null,
        breakFastRequired: true,
        lunchRequired: true,
        dinnerRequired: true,
        price: 10000,
        paused: false
    }
}