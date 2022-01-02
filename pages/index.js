import Link from "next/link";
import Error from "next/error";
import axios from "axios";

import Layout from "../components/Layout";
import StoryList from "../components/StoryList";

import styles from "../styles/Home.module.css";

const Home = ({ page, stories }) => {
  if (!stories.length) {
    return <Error statusCode={503} />;
  }

  return (
    <div>
      <Layout title="Next Hacker">
        <StoryList stories={stories} />

        <footer className={styles.footer}>
          <Link href={`/?page=${page + 1}`}>
            <a>{`Next Page (${page + 1})`}</a>
          </Link>
        </footer>
      </Layout>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = Number(query.page) || 1;
  let stories;

  try {
    const response = await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`);
    stories = response.data;
  } catch (err) {
    console.log(err);
    stories = [];
  }

  return {
    props: { page, stories }
  };
};

export default Home;
