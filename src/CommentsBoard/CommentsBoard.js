import React from 'react';
import styles from './CommentsBoard.module.css'
import Comment from '../Comment/Comment';

export default class CommentsBoard extends React.Component {

    render() {
        return (
                <div className={styles["comments"]}>
                    <h2>{this.props.comments.length} Comments</h2>
                    <div className={styles["user-comments-wrapper"]}>
                        <textarea 
                            className={styles["comment-text-area"]}
                            />
                        <div className={styles["comments-btn-wrapper"]}>
                            <button className={styles["submit-comment-btn"]}>Submit</button>
                        </div>
                    </div>

                    <div className={styles["user-comments"]}>
                        {  this.props.comments ? this.props.comments.map((comment, i) => <Comment key={i} userComment={comment}/>) : null }           
                    </div>
                </div>
        );
    }
}

