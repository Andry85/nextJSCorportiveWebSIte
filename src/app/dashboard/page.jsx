'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from "swr";



const Dashboard = () => {

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data, 'data');



 

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard