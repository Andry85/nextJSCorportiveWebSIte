import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from "@/components/button/Button";

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2>Test</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque quo optio modi vel temporibus repellat aperiam, sapiente esse dicta corrupti, architecto amet. Optio enim excepturi deserunt, laborum temporibus saepe.</p>
          <Button url="#" text="See More"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} alt='bbbbbb' src="https://images.pexels.com/photos/29904625/pexels-photo-29904625/free-photo-of-rustic-breakfast-bowls-and-pancakes-in-tulum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
    </div>
  )
}

export default Category