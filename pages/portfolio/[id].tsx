import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Navbar from '../../components/Navbar';
import Projects from '../../porjects';
import parse from 'html-react-parser';
import Link from 'next/link'
import Image from 'next/image';
import { Container, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import classNames from 'classnames';
import Footer from '../../components/Footer'
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



        const project = Projects.filter(p => p.pageLink === router)[0]

        console.log("project",project);
        
        const Arrow = (
            <ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
          );

  return (
    <>
        <Head>
            <title>{finalRoute}</title>
            <meta name="description" content="This is the personal portfolio website of sandip rout." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>


       {project && <>
            <div className='grid lg:grid-cols-2 md:px-6 px-4 pt-12'>
                <p className='font-medium lg:text-[60px] md:text-[48px] text-[24px]  leading-[50px] uppercase'>{project.description.name}</p>
                <div className='text-[18px] lg:pl-[14rem]'>
                    {parse(project.description.details)}

                    <div className='mt-12'>
                        <p className='font-medium text-[20px]'>Check out URLS</p>
                        <div className='flex gap-3 items-center text-[18px]'>
                           {project.urls.prodURL && <a rel="noreferrer" target={'_blank'} href={project.urls.prodURL}><p className='text-[#0968F7] cursor-pointer hover:underline'>production URL</p></a>}
                           {project.urls.uiURL && <a rel="noreferrer" target={'_blank'} href={project.urls.uiURL}><p className='text-[#0968F7] cursor-pointer hover:underline'>UI URL</p></a>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:px-6 px-4 mt-16'>
                <Image alt={project.title} src={project.description.mainImage}/>
            </div>


            <div className='grid md:grid-cols-2 md:px-6 px-4 pt-12'>
                <p className='font-semibold lg:text-[32px] text-[22px]  leading-[40px] mb-4 md:mb-0 uppercase'>TECH STACKS USED</p>
                <div className='text-[18px] lg:pl-[14rem]'>
                    <div>
                        <p className='uppercase font-medium md:text-[20px] '>For frontend development</p>
                        <ul className='list-disc font-light pl-8 mt-3'>
                          <li>REACT</li>
                          <li>TYPESCRIPT</li>
                          <li>TAILWIND CSS</li>
                        </ul>
                    </div>

                    <div className='pt-8'>
                        <p className='uppercase font-medium md:text-[20px] '>For backend development</p>
                        <ul className='list-disc font-light pl-8 mt-3'>
                          <li>NODE JS</li>
                          <li>EXPRESS</li>
                          <li>MONGO DB</li>
                          <li>STRIPE (for payment)</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='md:px-6 px-4 pt-12'>
                <p className='font-medium lg:text-[32px] text-[22px]  leading-[40px] uppercase'>other projects</p>

                <p className='md:pt-4 pt-2 md:text-[20px]'>Explore more projects <a className='text-[#0968F6] hover:underline'><Link href={'/portfolio'}>here</Link></a></p>
            </div>



            <div className='mt-14'>
                {/* <div className='mx-[10%] my-4 h-[1px] bg-gray-200'></div> */}
            <Footer text="xl"/>
            </div>

        </>}

    </>
  )
}

export default SingleProject