import React, { useContext } from 'react';
import { FormWrap, PageH1, PageH4, FormInput, FormContainer, FormLabel, FormDropdown, FormRadioContainer, FormDropdownContainer, FormBtnContainer, FormBtn, FormDropdownItem, FormDropdownSelectedItem, FormInputRadio, PageContainer, CartContainer, CartAmount, CartText, CartBtn, CartCouponContainer } from './FormElements';

import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormGroup, Checkbox } from '@material-ui/core';
import { BREAKFAST, DINNER, LUNCH, MOTHER, BABY, requiredForData, prePostDeliverySelect, CUSTOM, PLAN_TYPE, VEG_PREFERENCE, NON_VEG_PREFERENCE, EGG_PREFERENCE } from './Data';
import { StateContext, useStateValue } from '../../context/StateContext';
import { Button, ButtonPress } from '../ButtonElements';
import { calculatePrice } from '../../PricingPlan';


const GreenRadio = withStyles({
    checked: {
        color: '#01bf71',
    },
})((props) => <Radio color="default" {...props} />);

const GreenCheckbox = withStyles({
    checked: {
        color: '#01bf71',
    },
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '90%',
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
    checked: {
        color: '#01bf71',
    },
}));

const PreferenceForm = ({ setFormClicked, formClicked }) => {

    const [{ basket, user }] = useContext(StateContext);
    const [state, dispatch] = useStateValue();

    //  console.log('Basket from pref form', basket);

    const itemSelected = basket[0];

    const classes = useStyles();
    const [subject, setSubject] = React.useState(itemSelected?.subject || requiredForData[0]);
    const [prePostSelect, setPrePostSelect] = React.useState(itemSelected?.deliveryDone ? prePostDeliverySelect[1] : prePostDeliverySelect[0]);

    // handling state for Input preference
    let initialFoodPref = itemSelected?.eatPreference;
    const [foodPreference, setFoodPreference] = React.useState(initialFoodPref);

    const handlePreferenceChange = (event) => {
        setFoodPreference(event.target.value);
    };



    // handling state for Input SubsPlanMother
    let initialSubPlanMother = itemSelected?.planDurationMother;
    const [subscriptionPlanMother, setSubscriptionPlanMother] = React.useState(initialSubPlanMother);

    const handleSubsPlanMotherChange = (event) => {
        setSubscriptionPlanMother(event.target.value);
    };


    // handling state for Input SubsPlanbaby
    let initialSubPlanNewBorn = itemSelected?.planDurationBaby;
    const [subscriptionPlanBaby, setSubscriptionPlanBaby] = React.useState(initialSubPlanNewBorn);

    const handleSubsPlanBabyChange = (event) => {
        setSubscriptionPlanBaby(event.target.value);
    };
    
    //handling state for Radio button
    let radioSelect = subject;
    let subscriptionReqForMother = true;
    let subscriptionReqForBaby = true;

    let isPrePostSelectRequired = false;

    // handling boolean values for corresponding field
    if (radioSelect?.toUpperCase() === MOTHER.toUpperCase()) {
        subscriptionReqForMother = true;
        subscriptionReqForBaby = false;
        isPrePostSelectRequired = true;
    }
    else if (radioSelect?.toUpperCase() === BABY.toUpperCase()) {
        subscriptionReqForBaby = true;
        subscriptionReqForMother = false;
    }
    else
        radioSelect = requiredForData[0];

    // console.log('radioSelect >>', radioSelect);
    // console.log('final subscriptionReqForMother >>', subscriptionReqForMother);
    // console.log('final subscriptionReqForBaby >>', subscriptionReqForBaby);


    const handleRequiredForRadioChange = (event) => {
        radioSelect = event.target.value;
        setSubject(radioSelect);
    };



    

    //handling submit click and make changes to basket here
    const handleSubmitClick = (event) => {

        setFormClicked(false);

        // event.preventDefault();

        // console.log('Hello from AddtoBasket');
        // dispatch the item into the data layer

        let newSelection = {
            id: CUSTOM,
            type: PLAN_TYPE,
            subject: subject,
            deliveryDone: (((prePostSelect.toUpperCase()) === (prePostDeliverySelect[0].toUpperCase())) ? false : true),
            eatPreference: foodPreference,
            planDurationMother: subscriptionPlanMother,
            planDurationBaby: subscriptionPlanBaby,
            breakFastRequired: checkboxSelect.Breakfast,
            lunchRequired: checkboxSelect.Lunch,
            dinnerRequired: checkboxSelect.Dinner,
            paused: false,
        };

        if(!subscriptionReqForBaby)
            newSelection['planDurationBaby'] = null;

        if(!subscriptionReqForMother)
            newSelection['planDurationMother'] = null;

        // Calling self calling asyc function to dispatch the data, but this doesn't seem to work this way though.
        // Think about it.    
        (async () => {
            await dispatch({
                type: "ADD_TO_BASKET",
                item: newSelection,
            });

            console.log('newSelection', newSelection);
//            console.log('basket', basket[0]);
        })();

        calculatePrice(newSelection, dispatch);


    }


    // handling the meal checkboxes
    const [checkboxSelect, setCheckboxSelect] = React.useState({
        Breakfast: true,
        Dinner: true,
        Lunch: true,
    });

    const handleChange = (event) => {
        setCheckboxSelect({ ...checkboxSelect, [event.target.name]: event.target.checked });
    };

    const handlePrePostSelectChange = (event) => {
        setPrePostSelect(event.target.value);
    }

    // console.log('formClicked in Pref Form > ', setFormClicked);

    return (
        <div>
            <FormContainer>
                <FormWrap onClick={() => {
                    setFormClicked(true);
                    //   console.log('formClicked');
                    //   return true;
                }
                }>
                    <FormRadioContainer>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup row aria-label="chooseSubject" name="subject" value={subject} onChange={handleRequiredForRadioChange}>
                                {
                                    requiredForData.map(input => {
                                        return (
                                            <FormControlLabel key={input} control={<GreenRadio />} value={input} label={input} />
                                        );
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                    </FormRadioContainer>

                    <FormRadioContainer>
                        {isPrePostSelectRequired && <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup row aria-label="chooseSubject" name="subject" value={prePostSelect} onChange={handlePrePostSelectChange}>
                                {
                                    prePostDeliverySelect.map(input => {
                                        return (
                                            <FormControlLabel key={input} control={<GreenRadio />} value={input} label={input} />
                                        );
                                    })
                                }
                            </RadioGroup>
                        </FormControl>}
                    </FormRadioContainer>

                    <FormDropdownContainer>
                        <FormControl component="fieldset" className={classes.formControl}>
                            {/* <FormLabel component="legend">Select the required meals</FormLabel> */}
                            <FormGroup row>
                                <FormControlLabel
                                    control={<GreenCheckbox checked={checkboxSelect.Breakfast} onChange={handleChange} name={BREAKFAST} />}
                                    label={BREAKFAST}
                                />
                                <FormControlLabel
                                    control={<GreenCheckbox checked={checkboxSelect.Lunch} onChange={handleChange} name={LUNCH} />}
                                    label={LUNCH}
                                />
                                <FormControlLabel
                                    control={<GreenCheckbox checked={checkboxSelect.Dinner} onChange={handleChange} name={DINNER} />}
                                    label={DINNER}
                                />
                            </FormGroup>
                        </FormControl>
                    </FormDropdownContainer>

                    <FormDropdownContainer>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="food-preference-label">Choose your food preference</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={foodPreference}
                                onChange={handlePreferenceChange}
                                className={classes.selectEmpty}>
                                <MenuItem value={VEG_PREFERENCE}>{VEG_PREFERENCE}</MenuItem>
                                <MenuItem value={NON_VEG_PREFERENCE}>{NON_VEG_PREFERENCE}</MenuItem>
                                <MenuItem value={EGG_PREFERENCE}>{EGG_PREFERENCE}</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>

                    {subscriptionReqForMother && <FormDropdownContainer>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="Subscription-plan-mother-label">Subscription Plan duration for mother</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={subscriptionPlanMother}
                                onChange={handleSubsPlanMotherChange}
                                className={classes.selectEmpty}>
                                <MenuItem value="1">1 month</MenuItem>
                                <MenuItem value="2">2 months</MenuItem>
                                <MenuItem value="3">3 months</MenuItem>
                                <MenuItem value="4">4 months</MenuItem>
                                <MenuItem value="5">5 months</MenuItem>
                                <MenuItem value="6">6 months</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>}

                    {subscriptionReqForBaby && <FormDropdownContainer>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Subscription Plan duration for New Born</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={subscriptionPlanBaby}
                                onChange={handleSubsPlanBabyChange}
                                className={classes.selectEmpty}>
                                <MenuItem value="1">1 month</MenuItem>
                                <MenuItem value="2">2 months</MenuItem>
                                <MenuItem value="3">3 months</MenuItem>
                                <MenuItem value="4">4 months</MenuItem>
                                <MenuItem value="5">5 months</MenuItem>
                                <MenuItem value="6">6 months</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>}

                    {formClicked && <FormBtnContainer>
                        <Button onClick={handleSubmitClick}>Calculate</Button>
                    </FormBtnContainer>}

                </FormWrap>
            </FormContainer>



        </div>
    )
}

export default PreferenceForm
