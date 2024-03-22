import React from 'react'
import { useSelector } from 'react-redux'

import styles from "../../styles/User.module.css"
import { useDispatch } from 'react-redux';
import { toggleForm, toggleFormType } from '../../store/slices/userSlices';
import UserLoginForm from './UserLoginForm';
import UserSignUPForm from './UserSignUPForm';

const UserForm = () => {
    const dispatch = useDispatch();
    const {showForm, formType} = useSelector(({user})=> user);
    const closeForm = () => {dispatch(toggleForm(false))}

    const toggleCurrentFormType = (type)=> {
        dispatch(toggleFormType(type))
    }

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignUPForm
          closeForm={closeForm}
          toggleCurrentFormType={toggleCurrentFormType}
        />
      ) : (
        <UserLoginForm
          closeForm={closeForm}
          toggleCurrentFormType={toggleCurrentFormType}
        />
      )}
    </>
  ) : (
    <></>
  );
}

export default UserForm