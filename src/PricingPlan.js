import { BABY, BOTH, EGG_PREFERENCE, MOTHER, NON_VEG_PREFERENCE, VEG_PREFERENCE } from "./components/SubscriptionFormComp/Data";

const BREAKFAST_INDEX = 0;
const LUNCH_INDEX = 1;
const DINNER_INDEX = 2;

const mother_veg = [
//                            B,   L,    D
/* Dummy amount @0 */[0, 0, 0],
/* 1 month amounts */[500, 500, 500],
/* 2 month amounts */[499, 499, 499],
/* 3 month amounts */[498, 498, 498],
/* 4 month amounts */[497, 497, 497],
/* 5 month amounts */[496, 496, 496],
/* 6 month amounts */[495, 495, 495],
];


// similarly amounts are set in 2D matrix for other variantions

const mother_egg = [
    [0, 0, 0],
    [600, 600, 600],
    [599, 599, 599],
    [598, 598, 598],
    [597, 597, 597],
    [596, 596, 596],
    [595, 595, 595],
];

const mother_nonVeg = [
    [0, 0, 0],
    [700, 700, 700],
    [699, 699, 699],
    [698, 698, 698],
    [697, 697, 697],
    [696, 696, 696],
    [695, 695, 695],
];

const baby_veg = [
    [0, 0, 0],
    [400, 400, 400],
    [399, 399, 399],
    [398, 398, 398],
    [397, 397, 397],
    [396, 396, 396],
    [395, 395, 395],
];

const baby_nonVeg = [
    [0, 0, 0],
    [400, 400, 400],
    [399, 399, 399],
    [398, 398, 398],
    [397, 397, 397],
    [396, 396, 396],
    [395, 395, 395],
];

export const calculatePrice = (basket, dispatch) => {

    let item = basket;
    let amount = 0;
   // console.log('basket in PricingPlan after price dispatch', basketAftDispatch);


    switch (item?.subject.toUpperCase()) {

        case (MOTHER.toUpperCase()):
            {
                // console.log('In Mother Switch');

                if (item?.eatPreference.toUpperCase() === NON_VEG_PREFERENCE.toUpperCase()) {
                    // console.log('In Mother NV Switch');
                    if (item?.breakFastRequired)
                        amount = amount + (mother_nonVeg[item?.planDurationMother][BREAKFAST_INDEX] * item?.planDurationMother);
                    if (item?.lunchRequired)
                        amount = amount + (mother_nonVeg[item?.planDurationMother][LUNCH_INDEX] * item?.planDurationMother);
                    if (item?.dinnerRequired)
                        amount = amount + (mother_nonVeg[item?.planDurationMother][DINNER_INDEX] * item?.planDurationMother);
                }
                else if (item?.eatPreference.toUpperCase() === VEG_PREFERENCE.toUpperCase()) {
                    // console.log('In Mother V Switch');
                    if (item?.breakFastRequired)
                        amount = amount + (mother_veg[item?.planDurationMother][BREAKFAST_INDEX] * item?.planDurationMother);
                    if (item?.lunchRequired)
                        amount = amount + (mother_veg[item?.planDurationMother][LUNCH_INDEX] * item?.planDurationMother);
                    if (item?.dinnerRequired)
                        amount = amount + (mother_veg[item?.planDurationMother][DINNER_INDEX] * item?.planDurationMother);
                }
                else if (item?.eatPreference.toUpperCase() === EGG_PREFERENCE.toUpperCase()) {
                    // console.log('In Mother Egg Switch');
                    if (item?.breakFastRequired)
                        amount = amount + (mother_egg[item?.planDurationMother][BREAKFAST_INDEX] * item?.planDurationMother);
                    if (item?.lunchRequired)
                        amount = amount + (mother_egg[item?.planDurationMother][LUNCH_INDEX] * item?.planDurationMother);
                    if (item?.dinnerRequired)
                        amount = amount + (mother_egg[item?.planDurationMother][DINNER_INDEX] * item?.planDurationMother);
                }

                // console.log('Price >', amount);
                const basketAftDispatch = dispatch({
                    type: "ADD_PRICE",
                    price: amount,
                })
                console.log('basket in PricingPlan after price dispatch', basketAftDispatch);
            }
            break;
        case (BABY.toUpperCase()):
            {
                // console.log('In Baby Switch');
                if (item?.eatPreference.toUpperCase() === NON_VEG_PREFERENCE.toUpperCase()) {
                    if (item?.breakFastRequired)
                        amount = amount + (baby_nonVeg[item?.planDurationBaby][BREAKFAST_INDEX] * item?.planDurationBaby);
                    if (item?.lunchRequired)
                        amount = amount + (baby_nonVeg[item?.planDurationBaby][LUNCH_INDEX] * item?.planDurationBaby);
                    if (item?.dinnerRequired)
                        amount = amount + (baby_nonVeg[item?.planDurationBaby][DINNER_INDEX] * item?.planDurationBaby);
                }
                else if (item?.eatPreference.toUpperCase() === VEG_PREFERENCE.toUpperCase()) {
                    if (item?.breakFastRequired)
                        amount = amount + (baby_veg[item?.planDurationBaby][BREAKFAST_INDEX] * item?.planDurationBaby);
                    if (item?.lunchRequired)
                        amount = amount + (baby_veg[item?.planDurationBaby][LUNCH_INDEX] * item?.planDurationBaby);
                    if (item?.dinnerRequired)
                        amount = amount + (baby_veg[item?.planDurationBaby][DINNER_INDEX] * item?.planDurationBaby);
                }
                // console.log('Price >', amount);
                const basketAftDispatch = dispatch({
                    type: "ADD_PRICE",
                    price: amount,
                })
                console.log('basket in PricingPlan after price dispatch', basketAftDispatch);
            }
            break;
        case (BOTH.toUpperCase()):
            {
                // console.log('In Both Switch');
                if (item?.eatPreference.toUpperCase() === NON_VEG_PREFERENCE.toUpperCase()) {
                    if (item?.breakFastRequired) {
                        amount = amount + (mother_nonVeg[item?.planDurationMother][BREAKFAST_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_nonVeg[item?.planDurationBaby][BREAKFAST_INDEX] * item?.planDurationBaby);
                    }
                    if (item?.lunchRequired) {
                        amount = amount + (mother_nonVeg[item?.planDurationMother][LUNCH_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_nonVeg[item?.planDurationBaby][LUNCH_INDEX] * item?.planDurationBaby);
                    }
                    if (item?.dinnerRequired) {
                        amount = amount + (mother_nonVeg[item?.planDurationMother][DINNER_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_nonVeg[item?.planDurationBaby][DINNER_INDEX] * item?.planDurationBaby);
                    }
                }
                else if (item?.eatPreference.toUpperCase() === VEG_PREFERENCE.toUpperCase()) {
                    if (item?.breakFastRequired) {
                        amount = amount + (mother_veg[item?.planDurationMother][BREAKFAST_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_veg[item?.planDurationBaby][BREAKFAST_INDEX] * item?.planDurationBaby);
                    }
                    if (item?.lunchRequired) {
                        amount = amount + (mother_veg[item?.planDurationMother][LUNCH_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_veg[item?.planDurationBaby][LUNCH_INDEX] * item?.planDurationBaby);
                    }
                    if (item?.dinnerRequired) {
                        amount = amount + (mother_veg[item?.planDurationMother][DINNER_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_veg[item?.planDurationBaby][DINNER_INDEX] * item?.planDurationBaby);
                    }
                }
                else if (item?.eatPreference.toUpperCase() === EGG_PREFERENCE.toUpperCase()) {
                    if (item?.breakFastRequired) {
                        amount = amount + (mother_egg[item?.planDurationMother][BREAKFAST_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_veg[item?.planDurationBaby][BREAKFAST_INDEX] * item?.planDurationBaby);
                    }
                    if (item?.lunchRequired) {
                        amount = amount + (mother_egg[item?.planDurationMother][LUNCH_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_veg[item?.planDurationBaby][LUNCH_INDEX] * item?.planDurationBaby);
                    }
                    if (item?.dinnerRequired) {
                        amount = amount + (mother_egg[item?.planDurationMother][DINNER_INDEX] * item?.planDurationMother);
                        amount = amount + (baby_veg[item?.planDurationBaby][DINNER_INDEX] * item?.planDurationBaby);
                    }
                }
                // console.log('Price >', amount);
                const basketAftDispatch = dispatch({
                    type: "ADD_PRICE",
                    price: amount,
                })
                console.log('basket in PricingPlan after price dispatch', basketAftDispatch);
            }
            break;
        default:
            return 'Unknown step';



    }


}