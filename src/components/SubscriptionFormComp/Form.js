import React from 'react';
import { PageH1, PageContainer, PageWrapper, ImgWrap, Img, ImgAndTotalContainer } from './FormElements';
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
import { Button, Paper, StepContent, StepLabel, Stepper, Typography, Step } from '@material-ui/core';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import FORM_IMAGE from '../../images/form.svg';
import Subtotal from './Subtotal';
import PreferenceForm from './PreferenceForm';



const STRIPE_PUBLISHABLE_KEY = 'pk_test_51JCAK2SDVEGR2R43nTb9DmfCC7dB40gEPlXED7JvcRQzHm3XlcbGZ8YApf3uk1jUZdA4yREIolYctuaPlf9qiJ2C00laxGxwxO';
const promise = loadStripe(STRIPE_PUBLISHABLE_KEY);


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '60%',
        marginLeft: '3rem',
    },
    formControl: {
        margin: theme.spacing(1),
        color: '#01bbf71',
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
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

function getStepContent(step, setFormClicked, formClicked, setAnyFormError) {
    switch (step) {
        case 0:
            return <PreferenceForm setFormClicked={setFormClicked} formClicked={formClicked} setAnyFormError={setAnyFormError}/>;
        case 1:
            return <AddressForm setAnyFormError={setAnyFormError}/>;
        case 2:
            return (
                <Elements stripe={promise}>
                    <PaymentForm />
                </Elements>
            )
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

    const [formClicked, setFormClicked] = React.useState(false);
    const showPriceCalculateMessage = React.useMemo(() => formClicked,[formClicked]);

    const [anyFormError, setAnyFormError] = React.useState(false);
   // console.log('formClicked in Form > ', formClicked);
  //  console.log('showPriceCalculateMessage in Form > ', showPriceCalculateMessage);
   

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
                                            <Typography>{getStepContent(index , setFormClicked, formClicked, setAnyFormError)}</Typography>
                                            {!anyFormError && <div className={classes.actionsContainer}>
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
                                            </div>}
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
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

                        <ImgAndTotalContainer>
                            <Subtotal showPriceCalculateMessage={showPriceCalculateMessage}/>

                            <ImgWrap>
                                <Img src={FORM_IMAGE} alt='form_display_image' />
                            </ImgWrap>
                        </ImgAndTotalContainer>


                    </PageContainer>

                </ThemeProvider>
            </PageWrapper>
        </>
    )
}

export default Form;
