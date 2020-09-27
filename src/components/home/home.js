import Head from 'next/head';
import styles from './Home.module.scss';
import profile from '../../profile.js';

const Home = () => {
  console.log(profile);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Trade+Winds"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.name}>{profile.name}</span>
          <span></span>
        </div>
        <div className={styles.pics}>
          <img
            src={profile.images.meAndOliviaRedBow.src}
            className={styles.pic}
          />
        </div>
        <div className={styles.main}>
          <div className={styles.bio}>
            {profile.bio.paragraphs.map((paragraph, id) => (
              <p className={styles.bioParagraph} key={id}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
