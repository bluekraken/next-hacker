import Error from "next/error";
import axios from "axios";

import Layout from "../components/Layout";
import CommentList from "../components/CommentList";

import styles from "../styles/Story.module.css";

const Story = ({ story }) => {
  if (!story) {
    return <Error statusCode={503} />;
  }

  return (
    <Layout backButton={true}>
      <main className={styles.main}>
        <h1 className={styles.story_title}>
          <a href={story.url}>{story.title}</a>
        </h1>

        <div className={styles.story_details}>
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>

        {story.comments.length > 0 ? <CommentList comments={story.comments} /> : <div>No comments for this story</div>}
      </main>
    </Layout>
  );
};

export const getServerSideProps = async ({ query: { id } }) => {
  let story;

  try {
    const response = await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`);
    story = response.data;
  } catch (err) {
    console.log(err);
    story = null;
  }

  return {
    props: { story }
  };
};

export default Story;
