import React from 'react';
import { FormWrap, PageH1, PageH4, FormInput, FormContainer, FormLabel, FormDropdown, FormRadioContainer, FormDropdownContainer, FormBtnContainer, FormBtn, FormDropdownItem, FormDropdownSelectedItem, FormInputRadio, PageContainer, CartContainer, CartAmount, CartText, CartBtn, CartCouponContainer, PageWrapper, PageH2 } from './FormElements';
import { HiArrowLeft as BackArrowIcon } from 'react-icons/hi';

import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Paper, StepContent, StepLabel, Stepper, TextField, Typography, Step } from '@material-ui/core';

import PreferenceForm from './PreferenceForm';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import SubTotal from '../Subtotal';
import { useStateValue } from '../../context/StateContext';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '60%',
        paddingLeft: '2rem', 
    },
    formControl: {
        margin: theme.spacing(1),
        color: '#01bbf71',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Choose your preferences', 'Deliver to Address', 'Complete Payment'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <PreferenceForm />;
        case 1:
            return <AddressForm />;
        case 2:
            return <PaymentForm />;
        default:
            return 'Unknown step';
    }
}


const customGreenTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#01bf71',
            light: '#01bf71',
            dark: '#01bf71',
            contrastText: '#fff'
        }
    }
})

const Form = () => {

    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };




    return (
        <>

            <PageWrapper>
            <ThemeProvider theme={customGreenTheme}>
            <PageH1>Create food subscription</PageH1>
                <PageContainer>
                    <div className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset} className={classes.button}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </div>


                    {/* <CartContainer>
                        <FormWrap>

                            <PageH2>Total Amount</PageH2>

                            <CartText>This amount is inclusive of GST</CartText>
                            <CartAmount>  ₹ 800/-</CartAmount>

                            <CartCouponContainer>
                                <TextField id="standard-basic" label="Coupon Code" variant="outlined" />
                                <CartBtn>Proceed</CartBtn>
                            </CartCouponContainer>

                            <PageH4>Final Amount: </PageH4>

                        </FormWrap>

                    </CartContainer> */}

                    <SubTotal />

                </PageContainer>

            </ThemeProvider>
            </PageWrapper>
        </>
    )
}

export default Form;
