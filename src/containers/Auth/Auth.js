import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as authActions from '../../store/actions/index';
import classes from './Auth.module.css';

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
        props.onAuth(authForm.email.value, authForm.password.value, isLogin);
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
    );

    if(props.loading) {
        form = <Spinner />
    }

    let errorMessage = null;
    if(props.error) {
        errorMessage = (<p>{props.error.message}</p>);
    }

    let authRedirect = null;
    if(props.isAuthenticated) {
        authRedirect = <Redirect to="/"/>
    }

    return (
        <div className={classes.auth}>
            {authRedirect}
            <h1>Log In Or Sign Up Into Your Account</h1>
            {errorMessage}
            {form}
            <Button clicked={switchAuthModeHandler} >
                {isLogin ? 'Create new account' : 'Login with existing account'}
            </Button>
        </div>
      );
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isLogin) => dispatch(authActions.auth(email, password, isLogin))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);