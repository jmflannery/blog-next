import React from 'react';
import IconButton from '../icon-button';
import BlogIcon from '../../../src/components/icons/blog';
import GithubIcon from '../../../src/components/icons/github';
import ResumeIcon from '../../../src/components/icons/resume';
import SocialismIcon from '../../../src/components/icons/socialism';
import TwitterIcon from '../../../src/components/icons/twitter';

import profile from '../../profile.js';

import styles from './Home.module.css';

const buttons = [
  {
    text: 'Blog',
    href: '/blog',
    component: BlogIcon,
  },
  {
    text: 'Github',
    href: 'https://github.com/jmflannery',
    component: GithubIcon,
  },
  {
    text: 'Resume',
    href: '/resume',
    component: ResumeIcon,
  },
  {
    text: 'Twitter',
    href: 'https://twitter.com/jackflannery81',
    component: TwitterIcon,
  },
];

const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.pics}>
          <img
            src={profile.images.meAndOliviaRedBow.src}
            className={styles.pic}
          />
        </div>
        <div className={styles.header}>
          <h1 className={styles.name}>{profile.name}</h1>
          <div className={styles.buttonWrapper}>
            {buttons.map((button, index) => {
              const IconComponent = button.component;
              return (
                <IconButton text={button.text} href={button.href} key={index} >
                  <IconComponent className={styles.iconButton} />
                </IconButton>
              )
            })}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.bio}>
            {profile.bio.paragraphs.map((paragraph, id) => (
              <p className={styles.bioParagraph} key={id}>
                {paragraph}
              </p>
            ))}
          </div>
          <SocialismIcon className={styles.footerIcon} />
        </div>
      </div>
    </div>
  );
};

export default Home;
