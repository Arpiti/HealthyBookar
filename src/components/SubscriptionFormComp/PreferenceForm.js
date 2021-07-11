import React from 'react';
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
import { BREAKFAST, DINNER, LUNCH, MOTHER, BABY, requiredForData } from './Data';
import { useStateValue } from '../../context/StateContext';





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

const PreferenceForm = () => {

    const [{ basket }] = useStateValue();
    const itemSelected = basket[0];

    const classes = useStyles();
    const [subject, setSubject] = React.useState(itemSelected?.subject || requiredForData[0]);

    //handling state for Radio button
    let radioSelect = subject;
    let subscriptionReqForMother = true;
    let subscriptionReqForBaby = true;

    // handling boolean values for corresponding field
    if (radioSelect?.toUpperCase() === MOTHER.toUpperCase()) {
        subscriptionReqForMother = true;
        subscriptionReqForBaby = false;
    }
    else if (radioSelect?.toUpperCase() === BABY.toUpperCase()) {
        subscriptionReqForBaby = true;
        subscriptionReqForMother = false;
    }
    else
        radioSelect = requiredForData[0];

    console.log('radioSelect >>', radioSelect);
    console.log('final subscriptionReqForMother >>', subscriptionReqForMother);
    console.log('final subscriptionReqForBaby >>', subscriptionReqForBaby);


    const handleRequiredForRadioChange = (event) => {
        radioSelect = event.target.value;
        setSubject(radioSelect);
    };



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
    let initialSubPlanNewBorn = itemSelected?.planDurationNewBorn;
    const [subscriptionPlanBaby, setSubscriptionPlanBaby] = React.useState(initialSubPlanNewBorn);

    const handleSubsPlanBabyChange = (event) => {
        setSubscriptionPlanBaby(event.target.value);
    };

    //handling submit click
    const handleSubmitClick = (event) => {
        event.preventDefault();
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



    return (
        <div>
            <FormContainer>
                <FormWrap>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">You are buying this subscription for</FormLabel>
                        <RadioGroup row aria-label="chooseSubject" name="subject" value={subject} onChange={handleRequiredForRadioChange}>
                            {
                                requiredForData.map(input => {
                                    return (
                                        <FormControlLabel control={<GreenRadio />} value={input} label={input} />
                                    );
                                })
                            }
                        </RadioGroup>
                    </FormControl>

                    <FormDropdownContainer>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="food-preference-label">Choose your food preference</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={foodPreference}
                                onChange={handlePreferenceChange}
                                className={classes.selectEmpty}>
                                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                                <MenuItem value="Non-vegetarian">Non-Vegetarian</MenuItem>
                                <MenuItem value="Eggitarian">Eggitarian</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>

                    <FormDropdownContainer>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Select the required meals</FormLabel>
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

                    <FormBtnContainer>
                        <FormBtn onClick={handleSubmitClick}>Calculate</FormBtn>
                    </FormBtnContainer>

                </FormWrap>
            </FormContainer>



        </div>
    )
}

export default PreferenceForm
