import Icon1 from '../../images/pregnant.png';
import Icon2 from '../../images/mother.png';
import Icon3 from '../../images/baby-boy.png';

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
    cardHeading1: "3 Months Plan",
    cardInfo1: "Pregnancy nutritious food (during the pregnancy)",
    cardLink1: "/subscribe",
    item1: {
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
    },
    cardIcon2: Icon2,
    cardHeading2: "6 Months Plan",
    cardInfo2: "Post pregnancy nutritious food",
    cardLink2: "/subscribe",
    item2: {
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
        paused: false
    },
    cardIcon3: Icon3,
    cardHeading3: "Custom Nutrition Plan",
    cardInfo3: `Baby Nutritious food for the new born`,
    cardLink3: "/subscribe",
    item3: {
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
        paused: false
    }
}