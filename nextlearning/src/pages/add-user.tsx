import { useState } from 'react';

import Nav from '../features/test/Nav';
import styles from '../styles/Home.module.css';

export default function AddUser() {
    const [username, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [profilePictureId, setProfilePictureId] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // Reset error and message.
        setError('');
        setMessage('');

        // Fields check.
        if (!username
            || !emailAddress
            || !fullName
            || !role
            || !password
            || !passwordRepeat
            || !profilePictureId) {
            return setError('All fields are required!');
        }

        if (password != passwordRepeat) {
            return setError('Passwords do not match!');
        }

        // User structure.
        let user = {
            username,
            emailAddress,
            fullName,
            role,
            password,
            passwordRepeat,
            profilePictureId,
            published: false,
            createdAt: new Date().toISOString(),
        };

        // Save the user.
        let response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
        });

        // Get the data.
        let data = await response.json();

        if (data.success) {
            // Reset the fields.
            setUsername('');
            setEmailAddress('');
            setFullName('');
            setRole('');
            setPassword('');
            setPasswordRepeat('');
            setProfilePictureId('');
            // Set the message.
            return setMessage(data.message);
        } else {
            // set the error.
            return setError(data.message);
        }
    };

    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <form onSubmit={handlePost} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}
                    <div className={styles.formItem}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="Username"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>E-mail Address</label>
                        <input
                            type="email"
                            name="emailAddress"
                            onChange={(e) => setEmailAddress(e.target.value)}
                            value={emailAddress}
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Role</label>
                        <input
                            type="text"
                            name="role"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            placeholder="Role"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Repeat Password</label>
                        <input
                            type="password"
                            name="passwordRepeat"
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                            value={passwordRepeat}
                            placeholder="Repeat Password"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Profile Picture ID</label>
                        <input
                            type="number"
                            name="profilePictureId"
                            onChange={(e) => setProfilePictureId(e.target.value)}
                            value={profilePictureId}
                            placeholder="Profile Picture ID"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
}