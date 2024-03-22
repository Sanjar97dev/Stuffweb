import React from 'react'
import styles from '../../styles/User.module.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { loginUser } from '../../store/slices/userSlices';

const UserLoginForm = ({ toggleCurrentFormType, closeForm }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;
        dispatch(loginUser(values));
        closeForm();
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg id='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>

            <div className={styles.title}>Log In</div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        value={values.email}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        type="password"
                        placeholder="Your password"
                        name="password"
                        value={values.password}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div
                    onClick={() => toggleCurrentFormType("signup")}
                    className={styles.link}
                >
                    Create an account
                </div>

                <button type="submit" className={styles.submit}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default UserLoginForm