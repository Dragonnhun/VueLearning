import { useState } from 'react';
import { useRouter } from 'next/router';

export default function User({ user }) {
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Delete user.
    const deleteUser = async (userId) => {
        // Change deleting state.
        setDeleting(true);

        try {
            // Delete user.
            await fetch('/api/posts', {
                method: 'DELETE',
                body: userId,
            });

            // Reset the deleting state.
            setDeleting(false);

            // Reload the page.
            return router.push(router.asPath);
        } catch (error) {
            // Stop deleting state.
            return setDeleting(false);
        }
    };
    return (
        <>
            <li>
                <h3>{user.title}</h3>
                <p>{user.content}</p>
                <small>{new Date(user.createdAt).toLocaleDateString()}</small>
                <br />
                <button type="button" onClick={() => deleteUser(user['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button>
            </li>
        </>
    );
}