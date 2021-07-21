import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import MuiPhoneNumber from "material-ui-phone-number";
import AddressInput from 'material-ui-address-input';
import { useStateValue } from '../../context/StateContext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
    addressClass: {
        margin: '2rem',
    }
}));

const AddressForm = ({ setAnyFormError }) => {

    const [state, dispatch] = useStateValue();

    const classes = useStyles();

    const [contactNumber, setContactNumber] = React.useState('');
    const handleConNoChange = (value) => {
        setContactNumber(value);
    };

    const [address, setAddress] = React.useState('');
    const [addresses, setAddresses] = React.useState([]);
    const [fullName, setFullName] = React.useState('');

    const handleAddAddress = (address) => {
        setAddresses([...addresses, address])
    }

    const handleChangeAddress = (address) => {
        setAddress(address)
    }

    React.useEffect(() => {
        dispatch({
            type: "SET_USER_DETAILS",
            details: {
                fullNameForDelivery: fullName,
                address: address,
                contactNumber: contactNumber,
                orderid
            }
        })
    }, [fullName, address, contactNumber]);

    console.log('state', state);
    if(!fullName || !contactNumber)
        setAnyFormError(true);
    else
        setAnyFormError(false);

    return (
        <div>
            <form className={classes.root} autoComplete="on">
                
                <TextField required error={!fullName} id="nameField" label="Name" value={fullName} onChange={(event) => setFullName(event.target.value)} />

                <MuiPhoneNumber
                    required
                    error={!contactNumber}
                    name="phone"
                    label="Contact Number"
                    data-cy="user-phone"
                    defaultCountry={"in"}
                    value={contactNumber}
                    onChange={handleConNoChange}
                />
                <AddressInput
                    onAdd={handleAddAddress}
                    onChange={handleChangeAddress}
                    value={address}
                    allAddresses={addresses}
                    className={classes.addressClass}
                />
            </form>
        </div>
    )
}

export default AddressForm
