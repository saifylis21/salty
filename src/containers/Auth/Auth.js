import React, {useState} from 'react';
import {connect} from 'react-redux';

// import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import * as authActions from '../../store/actions/index';

const Auth = (props) => {
    const [authForm, setAuthForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },

        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            touched: false
        },
    });
    const [isLogin, setIsLogin] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    const checkValidity = (value, rules) => {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedAuthForm = {
            ...authForm,
            [inputIdentifier]: {
                ...authForm[inputIdentifier],
                value: event.target.value,
                valid: checkValidity(event.target.value, authForm[inputIdentifier].validation),
                touched: true
            }
        }

        let validForm = true;
        for (let inputIdentifier in updatedAuthForm) {
            validForm = updatedAuthForm[inputIdentifier].valid && validForm;
        }

        setFormIsValid(validForm);
        setAuthForm(updatedAuthForm);
    }

    let formElementsArray = [];

    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.password.value)
        // if(isLogin) {
        //     // log me in
        // } else {
        //     axios.post()
        // }
    }

    let form = (
        <form onSubmit={submitHandler}>
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
            <Button disabled={!formIsValid}>{isLogin ? 'Log In' : 'Sign Up'}</Button>
        </form>
    )

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            {form}
            <Button clicked={switchAuthModeHandler} >
                {isLogin ? 'Create new account' : 'Login with existing account'}
            </Button>
        </div>
      );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password) => dispatch(authActions.auth(email, password))
    };
}

export default connect(null, mapDispatchToProps)(Auth);