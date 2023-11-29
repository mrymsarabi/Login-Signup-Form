import React from 'react';

//CSS:
import styles from "/src/Components/Login/Login.module.css";

const Login = () => {
    const submitHandler = () => {

    };

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={submitHandler}>
                <h1>Login</h1>
                <div className={styles.formField}>
                    <input type="text" placeholder="Username" />
                </div>
                <div className={styles.formField}>
                    <input type="password" placeholder="Password" />
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