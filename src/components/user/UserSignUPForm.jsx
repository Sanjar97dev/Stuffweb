import React from 'react'
import styles from '../../styles/User.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../store/slices/userSlices'

const UserSignUPForm = ( {closeForm, toggleCurrentFormType} ) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    })

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isNotEmpty = Object.values(values).every((val) => val);
        if(!isNotEmpty) return;

        dispatch(createUser(values))
        closeForm()
    }
    return (
        <div>
            <div className={styles.wrapper}>
                <div onClick={()=>closeForm()} className={styles.close}>
                    <svg id='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    </div>

                    <div className={styles.title}>
                        Sign Up
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form} >
                        <div className={styles.group}>
                            <input type="email"
                                name='email'
                                id='Your email'
                                value={values.email}
                                autoComplete='off'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.group}>
                            <input type="name"
                                name='name'
                                id='Your name'
                                value={values.name}
                                autoComplete='off'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.group}>
                            <input type="password"
                                name='password'
                                id='Your password'
                                value={values.password}
                                autoComplete='off'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.group}>
                            <input type="avatar"
                                name='avatar'
                                id='Your avatar'
                                value={values.avatar}
                                autoComplete='off'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div onClick={()=>toggleCurrentFormType("login")} className={styles.link}>
                            I already have an account
                        </div>

                        <button type='submit' className={styles.submit}>Create an account</button>
                    </form>
                
            </div>
        </div>
    )
}

export default UserSignUPForm