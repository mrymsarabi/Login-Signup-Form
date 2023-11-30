import React, { useState } from 'react';

//CSS:
import styles from "/src/Components/Login.module.css";

const SignUp = () => {
    //State:
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        age: null,
        email: "",
        userName: "",
        password: ""
    });

    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    const submitHandler = () => {

    };

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={submitHandler}>
                <h1>Sign Up</h1>
                <div>
                    <div className={styles.formField}>
                        <label>First Name</label>
                        <input type="text" name="firstName" value={data.firstName} onChange={changeHandler} />
                    </div>
                    <div className={styles.formField}>
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={data.lastName} onChange={changeHandler} />
                    </div>
                </div>
                
                <div className={styles.formField}>
                    <label></label>
                    <input />
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;