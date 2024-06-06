import React from 'react';
import styles from '../styles/LoginModal.module.scss';

const LoginModal = ({ show, handleClose }) => {
    return (
        <div className={`${styles.modal} ${show ? styles.displayBlock : styles.displayNone}`}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={handleClose}>&times;</span>
                <h2>Login</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
