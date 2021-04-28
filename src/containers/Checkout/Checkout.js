import React, {useState} from 'react';

import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux';
import axios from '../../axios-main';
import Button from '../../components/UI/Button/Button';

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

    const [formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for(let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const finalOrder = {
            name: props.productName,
            quantity: props.totalPrice,
            price: props.quantity,
            deliveryData: formData
        }
        axios.post('/orders.json', finalOrder)
        .then(response => {
            props.history.push('/');
        })
        .catch(err => {
            console.log(err);
        });
    }

    const checkValidity = (value, rules) => {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm,
            [inputIdentifier]: {
                ...orderForm[inputIdentifier],
                value: event.target.value,
                valid: checkValidity(event.target.value, orderForm[inputIdentifier].validation),
                touched: true
            }
        }

        let validForm = true;
        for (let inputIdentifier in updatedOrderForm) {
            validForm = updatedOrderForm[inputIdentifier].valid && validForm;
        }

        setFormIsValid(validForm);
        setOrderForm(updatedOrderForm);
    }

    const formElementsArray = [];

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }

    let form = (
        <form onSubmit={orderHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => inputChangedHandler(event, formElement.id)}
                    shouldValidate={formElement.config.validation}
                    invalid={!formElement.config.valid}
                    touched={formElement.config.touched}
                />
            ))}
            <Button disabled={!formIsValid}>Place Order</Button>
        </form>
    )



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

const mapStateToProps = state => {
    return {
        productName: state.productName,
        totalPrice: state.totalPrice,
        quantity: state.quantity
    };
}

export default connect(mapStateToProps, undefined)(Checkout);