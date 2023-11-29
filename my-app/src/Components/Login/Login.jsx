import React, { useState } from 'react';

//CSS:
import styles from "/src/Components/Login/Login.module.css";

const Login = () => {
    //States:
    const [data, setData] = useState({
        userName: "",
        password: "",
    });

    //Functions:
    //Handling Input changes
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    }

    //Submitting form handler function
    const submitHandler = () => {

    };

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={submitHandler}>
                <h1>Login</h1>
                <div className={styles.formField}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="userName"
                        value={data.userName}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.formField}>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button type="submit">Login</button>
                </div>
                <div className={styles.linksBox}>
                    <div>
                        Don't have an account? <a href='#'>Sign up here!</a>
                    </div>
                    <div>
                        <a href="#">Forget password?</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;