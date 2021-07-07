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
import { Button, Paper, StepContent, StepLabel, Stepper, TextField, Typography, Step } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const GreenRadio = withStyles({

    checked: {
        color: '#01bf71',
    },
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '90%',
        color: '#01bbf71',
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

const PreferenceForm = () => {

    const classes = useStyles();

    //handling state for Radio button
    const [requiredForValue, setRequiredForValue] = React.useState('Both');

    const handleRequiredForRadioChange = (event) => {
        setRequiredForValue(event.target.value);
    };


    // handling state for Input preference
    const [foodPreference, setFoodPreference] = React.useState('');

    const handlePreferenceChange = (event) => {
        setFoodPreference(event.target.value);
    };

    // handling state for Input SubsPlanMother
    const [subscriptionPlanMother, setSubscriptionPlanMother] = React.useState('');

    const handleSubsPlanMotherChange = (event) => {
        setSubscriptionPlanMother(event.target.value);
    };

    // handling state for Input SubsPlanbaby
    const [subscriptionPlanBaby, setSubscriptionPlanBaby] = React.useState('');

    const handleSubsPlanBabyChange = (event) => {
        setSubscriptionPlanBaby(event.target.value);
    };

    return (
        <div>
            <FormContainer>
                {/* <BackArrowIcon to="/" /> */}

                <FormWrap>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">You are buying this subscription for</FormLabel>
                        <RadioGroup row aria-label="chooseSubject" name="subject" value={requiredForValue} onChange={handleRequiredForRadioChange}>
                            <FormControlLabel control={<GreenRadio />} value="Mother" label="Mother" />
                            <FormControlLabel control={<GreenRadio />} value="New Born" label="New Born" />
                            <FormControlLabel control={<GreenRadio />} value="Both" label="Both" />
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
                                <MenuItem value="veg">Vegetarian</MenuItem>
                                <MenuItem value="non-veg">Non-vegetarian</MenuItem>
                                <MenuItem value="egg">Eggitarian</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>


                    <FormDropdownContainer>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="Subscription-plan-mother-label">Subscription Plan duration for mother</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={subscriptionPlanMother}
                                onChange={handleSubsPlanMotherChange}
                                className={classes.selectEmpty}>
                                <MenuItem value="1month">1 month</MenuItem>
                                <MenuItem value="2month">2 months</MenuItem>
                                <MenuItem value="3month">3 months</MenuItem>
                                <MenuItem value="4month">4 months</MenuItem>
                                <MenuItem value="5month">5 months</MenuItem>
                                <MenuItem value="6month">6 months</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>

                    <FormDropdownContainer>
                        <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">Subscription Plan duration for New Born</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={subscriptionPlanBaby}
                                onChange={handleSubsPlanBabyChange}
                                className={classes.selectEmpty}>
                                <MenuItem value="1month">1 month</MenuItem>
                                <MenuItem value="2month">2 months</MenuItem>
                                <MenuItem value="3month">3 months</MenuItem>
                                <MenuItem value="4month">4 months</MenuItem>
                                <MenuItem value="5month">5 months</MenuItem>
                                <MenuItem value="6month">6 months</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </FormDropdownContainer>

                    <FormBtnContainer>
                        <FormBtn>Proceed</FormBtn>
                    </FormBtnContainer>


                </FormWrap>
            </FormContainer>
        </div>
    )
}

export default PreferenceForm
