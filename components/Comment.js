import styles from "../styles/Comment.module.css";

const Comment = ({ comment }) => (
  <div className={styles.comment}>
    <div className={styles.comment_user}>{comment.user}</div>
    <div className={styles.comment_content} dangerouslySetInnerHTML={{ __html: comment.content }}></div>

    {comment.comments && (
      <div className={styles.nested_comments}>
        {comment.comments.map((nestedComment) => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    )}
  </div>
);

export default Comment;
