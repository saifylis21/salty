import React, {useEffect, useState} from 'react';

import Input from '../../components/UI/Input/Input';

const Checkout = (props) => {

    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },

        phone: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Contact No'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },

        address1: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Address Line 1'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            touched: false
        },

        address2: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Address Line 2'
            },
            value: '',
            validation: {
                required: false,
            },
            valid: true,
            touched: false
        },

        city: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'City'
            },
            value: '',
            validation: {
                required: false,
            },
            valid: false,
            touched: false
        },
    });

    useEffect(() => {
        // const query = new URLSearchParams(props.location.search);
        // console.log(query.entries());
        // const orderInfo = {};

    },[])



    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm,
            [inputIdentifier]: {
                ...orderForm[inputIdentifier],
                value: event.target.value
            }
        }
        setOrderForm(updatedOrderForm);
    }

    const formElementsArray = [];

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            // shouldValidate={formElement.config.validation}
            // invalid={!formElement.config.valid}
            // touched={formElement.config.touched}
        />
    ));


    return (
        <div>
            <h1>check dis shet mothertrucker</h1>
            <h1>check dis shet mothertrucker</h1>
            <h1>check dis shet mothertrucker</h1>
            {form}
            <h1>CHECKOUT SUMMARY</h1>
        </div>
    )
}

export default Checkout;