import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = async ({params}) => {


  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await data.json();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus aliquam mollitia repellendus saepe nesciunt delectus, vitae architecto culpa quaerat, explicabo ea rem quidem vel? At rerum eos expedita earum!</p>
          <div className={styles.author}>
            <Image 
              className={styles.avatar} 
              width={40}
              height={40}
              alt='bbbbbb' 
              src="https://images.pexels.com/photos/29904625/pexels-photo-29904625/free-photo-of-rustic-breakfast-bowls-and-pancakes-in-tulum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <span className={styles.username}>John Dou</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
              className={styles.image} 
              fill={true}
              alt='bbbbbb' 
              src="https://images.pexels.com/photos/29904625/pexels-photo-29904625/free-photo-of-rustic-breakfast-bowls-and-pancakes-in-tulum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat omnis commodi. Necessitatibus atque non eius quae, odit veritatis labore quasi eligendi quisquam porro incidunt eos animi itaque consequatur saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat omnis commodi. Necessitatibus atque non eius quae, odit veritatis labore quasi eligendi quisquam porro incidunt eos animi itaque consequatur saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat omnis commodi. Necessitatibus atque non eius quae, odit veritatis labore quasi eligendi quisquam porro incidunt eos animi itaque consequatur saepe.</p>
      </div>
    </div>
  )
}

export default BlogPost