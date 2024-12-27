import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg" fill={true} alt='my compny' />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who we are?</h2>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum distinctio saepe magni dignissimos quam vel eveniet iusto dolore at corrupti.</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What we do?</h2>
          <p  className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum distinctio saepe magni dignissimos quam vel eveniet iusto dolore at corrupti.</p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About