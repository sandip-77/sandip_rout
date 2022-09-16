import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Navbar from '../../components/Navbar';

const SingleProject = () => {
    const router = useRouter().asPath.split('/')[2]
    
    
    const str = router;

        //split the above string into an array of strings 
        //whenever a blank space is encountered

        const arr = str.split("-");

        //loop through each element of the array and capitalize the first letter.


        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        const finalRoute = arr.join(" ");
        console.log("finalRoute", finalRoute);


  return (
    <>
        <Head>
            <title>{finalRoute}</title>
            <meta name="description" content="This is the personal portfolio website of sandip rout." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

    </>
  )
}

export default SingleProject