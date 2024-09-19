
import Head from "next/head";
import Image from "next/image";
import homeStyles from './styles/Home.module.css';

export const metadata = {
  title: 'My Blog',
  description: 'This is my blog page',
};

export default function Home() {
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
          
        </ul>
      </section>
    </div>
  );
}
