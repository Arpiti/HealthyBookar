import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import MuiPhoneNumber from "material-ui-phone-number";
import AddressInput from 'material-ui-address-input'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
        },
    },
    addressClass: {
        margin: '2rem',
    }
}));

const AddressForm = () => {

    const classes = useStyles();

    const [contactNumber, setContactNumber] = React.useState('');
    const handleConNoChange = (value) => {
        setContactNumber(value);
    };

    const [address, setAddress] = React.useState('');
    const [addresses, setAddresses] = React.useState([]);

    const handleAddAddress = (address) => {
        setAddresses([...addresses, address])
    }

    const handleChangeAddress = (address) => {
        setAddress(address)
    }

    return (
        <div>
            <form className={classes.root} autoComplete="on">
                <TextField required id="nameField" label="Name" />
                <MuiPhoneNumber
                    required
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
