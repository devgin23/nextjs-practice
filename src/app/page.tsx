import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getSortedPostsData } from "../../lib/post";
import homeStyles from './styles/Home.module.css';


export const metadata = {
  title: 'My Blog',
  description: 'This is my blog page',
};

const Home = ({allPostsData}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <div>
      <section className={homeStyles.headingMd}>
        <p>[Dev Jin Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id,date,title}) => (
            <li className={homeStyles.listItem} key={id}>
              <a>{title}</a>
              <br/>
              <small className={homeStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
          
        </ul>
      </section>
    </div>
  );
}

export default Home

export const getStaticProps: GetStaticProps =async () => {
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData
    }
  }
}