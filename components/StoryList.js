import Link from "next/link";

import styles from "../styles/StoryList.module.css";

const StoryList = ({ stories }) => {
  return (
    <div>
      {stories.map((story) => (
        <div className={styles.story} key={story.id}>
          <h2 className={styles.story_title}>
            <a href={story.url}>{story.title}</a>
          </h2>

          <div className={styles.story_details}>
            <span>{story.points || 0} points</span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
