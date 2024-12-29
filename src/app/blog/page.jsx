import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();

  return (
    <div className={styles.maincontainer}>

      {posts.map((post) => (
        <Link href="/blog/testId" className={styles.container}>
          <div key={post.id} className={styles.imgContainer}>
              <Image
                className={styles.img} 
                fill={true} 
                alt='bbbbbb' 
                src="https://images.pexels.com/photos/29904625/pexels-photo-29904625/free-photo-of-rustic-breakfast-bowls-and-pancakes-in-tulum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            
            
            <div className={styles.content}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.desc}>{post.body}</p>
            </div>
        </Link>
      ))}

      
    </div>
  )
}

export default Blog