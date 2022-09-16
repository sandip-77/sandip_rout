import { Container, Grid } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import Navbar from '../components/Navbar'
import Head from 'next/head';
import Projects from '../porjects';
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TheButton from '../components/TheButton';
import Footer from '../components/Footer';
import ProfileFotter from '../components/PortfolioFooter';
import Link from 'next/link'
import classNames from 'classnames';



const Portfolio = () => {



    const PortfolioPageStyles = styled(Grid)(({theme})=> ({
        marginTop:40,
        [theme.breakpoints.down('md')]:{
            marginTop:30,

        },
        "& h2":{
            textAlign:'center',
            fontWeight:500,
            fontSize:50,
            lineHeight:'75px',
            marginBottom:15,
            [theme.breakpoints.down('md')]:{
                fontSize:30,
                lineHeight:'45px',
    
            },

        },
        "& p:nth-of-type(1)":{
            fontSize:20,
            lineHeght:'30px',
            color:"rgba(0, 0, 0, 0.6)",
            textAlign:'center',
            [theme.breakpoints.down('md')]:{
                fontSize:14,
                lineHeight:'18px',
    
            },
        },
        "& h4":{
            fontWeight:500,
            fontSize:19,
            lineHeight:'28px',
            [theme.breakpoints.down('md')]:{
                fontSize:16,
                lineHeight:'24px',
    
            },
        },
        "& span":{
            fontWeight:400,
            fontSize:16,
            lineHeight:'24px',
            [theme.breakpoints.down('md')]:{
                fontSize:16,
                lineHeight:'24px',
    
            },
        },
        "& h6":{
            fontWeight:300,
            fontSize:24,
            lineHeight:'36px',
            fontStyle:'italic',
            textAlign:'center',
            padding:"20px 20px 40px 20px",
            [theme.breakpoints.down('md')]:{
                fontSize:13,
                lineHeight:'19px',
    
            },
        },
        "& h5":{
            textAlign:'center',
            fontSize:26, 
            lineHeight:'39px',
            fontWeight:500,
            paddingTop:20,
            [theme.breakpoints.down('md')]:{
                fontSize:21,
                lineHeight:'31px',
    
            },
        },
        "& h3":{
            fontSize:40,
            lineHeight:'60px',
            fontWeight:500,
            marginBottom:20,
            [theme.breakpoints.down('md')]:{
                fontSize:25,
                lineHeight:'37px',
    
            },
        },
        "& img":{
            zIndex:-1
          }

    }));


    const Arrow = (
        <ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
      );
    return (
        <div>
            <Head>
        <title>Sandip Rout</title>
        <meta name="description" content="This is the personal portfolio website of sandip rout." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Navbar/>
            
            <PortfolioPageStyles>
                <Grid>
                    <Container maxWidth='md'>
                        <h2>Portfolio</h2>
                        <p>The last 1 year I have been working mostly with the Javascript stack along with other popular technologies: Reactjs, Redux, Nodejs, Express, MongoDb, AWS, MaterialUI, Bootstrap, Foundation, AWS. Here are some of the results.</p>
                    </Container>
                    {/* Projects */}
                    <Container>
                        <Grid mb={7} mt={5} spacing={2} container>
                            {
                                Projects.map((p, index) => {
                                    return (
                                        <Grid  item xs={12} md={6}  lg={6} key={index}>
                                            <div className={classNames(index===0 || 1 ?'shadow-md':'', "mb-2")}>
                                                <Image alt={p.title} src={p.mainPoster}/>
                                            </div>
                                                <h4>{p.title}</h4>
                                                <Grid container>
                                                    <Link passHref href={`/portfolio/${encodeURIComponent(p.pageLink)}`}>
                                                        <a rel="noreferrer" >
                                                        <Grid container alignItems='center' item>
                                                            <span style={{borderBottom:'1px solid'}}>See Project</span>{Arrow}
                                                        </Grid>
                                                        </a>
                                                    </Link>
                                                </Grid>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>

                    {/* Button */}
                    <TheButton text='CONTACT ME' link='/contact'/>


                    <Grid mt={7}>
                        <Container>
                            <h3>Testimonial</h3>
                                <Container sx={{background:'#000', color:'#fff'}}>
                                   <h5>Joshua Riverol</h5>
                                   <h6>“Working with Sandip is super easy! He communicates well, understands requirements clearly, meets deadlines and most importantly produces quality work! Highly recommended! Thanks Sandip, job well done!”</h6>
                                </Container>
                            
                        </Container>
                    </Grid>

                </Grid>
            </PortfolioPageStyles>

            <Grid mt={10}>
            <ProfileFotter/>
            </Grid>
        </div>
    )
}

export default Portfolio
