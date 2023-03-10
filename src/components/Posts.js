import React from 'react'
import styles from '../App.module.css';

function Posts(props) {
    return (

        <table className={styles.table}>
            <thead>
                <tr>

                    <th>Id</th>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
                {props.posts.map((post) => (
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                ))}

            </tbody>


        </table>
    );

}

export default Posts