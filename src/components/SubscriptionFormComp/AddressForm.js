import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import MuiPhoneNumber from "material-ui-phone-number";
import AddressInput from 'material-ui-address-input'

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

   // console.log('contactNumber', contactNumber);
    if(!fullName || !contactNumber || !address)
        setAnyFormError(true);

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
                    error={!address}
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
