/* eslint-disable react/no-unescaped-entities */
import { Container, Grid } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import Navbar from '../components/Navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Head from 'next/head'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LockIcon from '@mui/icons-material/Lock';
import TheButton from '../components/TheButton';
import Footer from '../components/Footer';
import {Link as SmoothLink} from 'react-scroll';

const About = () => {

    const StyledTop = styled(Container)(({theme})=> ({
        "& p":{
            fontSize:20,
            lineHeight:'30px',
            paddingRight:'12%',
            color:'rgba(0, 0, 0, 0.6)',
            [theme.breakpoints.down('md')]:{
                fontSize:13,
                lineHeight:'19px',
                paddingRight:10
            }
        },
        "h2":{
            fontSize:52,
            lineHeight:'71px',
            fontWeight:500,
            paddingRight:220,
            marginTop:20,
            [theme.breakpoints.down('md')]:{
                fontSize:38,
                lineHeight:'52px',
                paddingRight:0
            }

        }
      }));

      const StyledArrow = styled(Grid)(({theme})=> ({
          marginTop:20,
        display:'flex',
        justifyContent:'flex-end',
        "& svg":{
            height:'120px',
            width:'120px',
            padding:10,
            borderRadius:'50%',
            border:'1px solid #000',
            marginRight:50,
            transform:'translateY(20px)',
          transition: 'all 400ms ease-in-out',
            [theme.breakpoints.down('md')]:{
                marginRight:0,
            transition: 'none',

    
            }
        },
        [theme.breakpoints.down('md')]:{
            justifyContent:'center',
            marginRight:0

        },
        "& svg:hover":{
            background:'black',
            color:'white',
          transition: 'all 400ms ease-in-out',
          [theme.breakpoints.down('md')]:{
            marginRight:0,
            transition: 'none',
        }

        }
      }));

      const SkillsSection = styled(Grid)(({theme})=> ({
          "& h3":{
            fontSize:41,
            lineHeight:'61px',
            fontWeight:500,
            [theme.breakpoints.down('md')]:{
                fontSize:25,
                lineHeight:'37px',
    
            }
          },
          '& span':{
            fontSize:24,
            lineHeight:'36px',
            fontWeight:500,
            [theme.breakpoints.down('md')]:{
                fontSize:16,
                lineHeight:'24px',
    
            },
          },
          "& p":{
              textAlign:'center',
              borderBottom :"2px solid",
              margin:'0 10px',
              fontSize:18,
              lineHeight:'27px',
              fontWeight:500,
              paddingBottom:15,
              marginBottom:60,
              [theme.breakpoints.down('md')]:{
                marginBottom:30,

    
            },

          }
          
      }))
  
      

      const Arrow = (
        <ArrowForwardIcon sx={{fontSize:23, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
      );

      const skills = ['HTML/CSS', 'JAVASCRIPT', 'REACT','NEXT.JS' , 'mongoDB', 'NODE.JS', 'GraphQL', 'GATSBY', 'jQuery'];


      const Build = styled(Grid)(({theme})=>({
        "& h3":{
            fontSize:41,
            lineHeight:'61px',
            fontWeight:500,
            marginBottom:40

        },
        "& svg":{
            height:'114px',
            width:'114px',
            [theme.breakpoints.down('md')]:{
                marginRight:0
    
            }
        },
        "& p":{
            fontSize:16,
            lineHeight:'24px',
            color: "rgba(0, 0, 0, 0.57)",
            paddingBottom:20,
            [theme.breakpoints.down('md')]:{
                fontSize:14,
            lineHeight:'21px',
    
            }
        },
        "& h2":{
            fontSize:25,
            lineHeight:'37px',
            fontWeight:500,
            marginBottom:10

        },

      }))

    return (
        <div>
            <Navbar/>

            <Head>
                <title>Sandip Rout</title>
                <meta name="description" content="This is the personal portfolio website of sandip rout." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid>
            <StyledTop>
                <Container sx={{mt:5}}>
                    <p>
                    Working as a developer for several years, on which I have worked with an array of web technologies and had the chance to build all sorts of web applications: from single page static websites to quite large applications integrated with several microservices.
                
                    </p>
                    <h2>
                        Hello there, I am <span style={{background: 'linear-gradient(to top, #C8C8C8 40%, #fff 20%)'}}>Sandip Rout</span> a full stack developer <br /> based in India.
                    </h2>
                </Container>
                </StyledTop>
                <Container>
                    
                        <StyledArrow sx={{pb:14, borderBottom:'1px solid rgba(0, 0, 0, 0.2)', }}>
                            <Grid mt={6}>
                                <SmoothLink smooth={true} duration={1000} to='skills'>
                                    <KeyboardArrowDownIcon sx={{cursor:'pointer'}}/>
                                </SmoothLink>
                            </Grid>
                        </StyledArrow>
                    
                </Container>
            </Grid>


{/* skills section */}
            <SkillsSection id='skills'>
                <Grid>
                    <Container>
                        <Grid mb={5} mt={3} item container justifyContent='space-between'>
                            <Grid xs={6} item><h3>My Skills</h3></Grid>
                            <Grid justifyContent='flex-end' xs={6} item container alignItems='center' >
                                <a download href="/resume-SandipRout.pdf"><span style={{borderBottom:'1px solid'}}>Resume</span>{Arrow}</a>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                    <Container>
                        <Grid pb={5} mb={3} borderBottom="1px solid rgba(0, 0, 0, 0.2)" item container>

                                {
                                    skills.map(s => {
                                        return <Grid justifyContent='center' key={s} item xs={12} md={6} lg={4}><p>{s}</p></Grid>
                                    })
                                }
                        </Grid>
                    </Container>
            </SkillsSection>


            {/* What I can Build for you */}
            <Build>
                <Grid>
                    <Container>
                        <h3>what I can build for you?</h3>
                        <Grid container>
                            <Grid justifyContent='space-evenly' container>
                                <Grid mr={1}  borderBottom='1px solid rgba(0,0,0,0.2)' item xs={12} md={5} lg={5}>
                                        <ShoppingCartIcon htmlColor='#EB3223'/>
                                        <h2>Ecommerce</h2>
                                        <p>Out-standing Shops that will outperform your competition. I understands that each-ecommerce site is unique and serves a particular audience. I thoroughly research your ecommerce needs, customers, challenges and goals to help you design and build an e-commerce platform that will set you up for success.</p>
                                </Grid>
                                <Grid borderBottom='1px solid rgba(0,0,0,0.2)' item xs={12} md={5} lg={5}>
                                        <PersonIcon htmlColor='#AA5322'/>
                                        <h2>Personal site</h2>
                                        <p>I can help you in careating a strong outstanding web presence. Creating a great personal site means potraying your image and message clearly and state your purpose through visually with great piece of content.</p>
                                </Grid>
                            </Grid>
                            <Grid mt={3} justifyContent='space-evenly' container>
                                <Grid borderBottom='1px solid rgba(0,0,0,0.2)' item xs={12} md={5} lg={5}>
                                        <InsertChartIcon htmlColor='#C7B34B'/>
                                        <h2>Analytics site</h2>
                                        <p>Powerful, fast and informative. Business analytics tools are types of application software that retrieve data from one or more business systems and combine it in a repository, such as a data warehouse, to be reviewed and analyzed.</p>

                                </Grid>
                                <Grid  borderBottom='1px solid rgba(0,0,0,0.2)' item xs={12} md={5} lg={5}>
                                        <LockIcon htmlColor='#E76D8A'/>
                                        <h2>Membership Sites</h2>
                                        <p>Are you selling a product or service? I can build you a custom site that offers so much more than an ‘out of the box’ platform.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Build>


            <Grid mt={8} mb={8}>
                <TheButton link='/contact' text='CONTACT ME'/>
            </Grid>

            <Grid>
                <Footer text='lg'/>
            </Grid>


        </div>
    )
}

export default About
