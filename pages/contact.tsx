/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Grid, Input } from '@mui/material'
import React from 'react';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from '../components/Navbar';
import { fontWeight, styled, textAlign } from '@mui/system';
import TheButton from '../components/TheButton';


const Contact = () => {


    const ContactStyles = styled(Grid)(({theme})=> ({

        "& h3":{
            fontSize:39, 
            lineHeight:'58px',
            fontWeight:400,
            [theme.breakpoints.down('md')]:{
                fontSize:25,
                lineHeight:'35px'
                }
        },
        "& p":{
            fontSize:18, 
            lineHeight:'27px',
            color:"rgba(0, 0, 0, 0.6)",
            [theme.breakpoints.down('md')]:{
                fontSize:14,
                lineHeight:'25px'
                }
        },
        "& span":{
            display:'flex',
             marginRight:5
        },

        "& button":{
            borderRadius:0,
            padding: '15px 25px',
            fontSize:16,
            letterSpacing:'0.01em',
            lineHeight: '24px',
            backgroundColor:'#fff',
            border:'1px solid #000',
            cursor:'pointer',
            transition: 'all 500ms ease',
            color:'#000'
        },
        "& button:hover":{
            color:'#fff',
            backgroundColor:'#000',
            transition: 'all 500ms ease'
        },
      }));

      const sx = {
        "& .MuiInputBase-root": {
          marginBottom:'10vh'
        }
      };




      const Arrow = (
          <ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
    );

    const ButtonSx = {
        "& button":{
            borderRadius:0,
            padding: '15px 25px',
            fontSize:16,
            letterSpacing:'0.01em',
            lineHeight: '24px',
            backgroundColor:'#fff',
            border:'1px solid #000',
            cursor:'pointer',
            transition: 'all 500ms ease',
        },
        "& button:hover":{
            color:'#fff',
            backgroundColor:'#000',
            transition: 'all 500ms ease'
        },

    }

    return (
        <div>
            <Navbar/>
            <ContactStyles>
                <Grid>
                    <Container>
                        <Grid rowSpacing={5} sx={{mt:{ xs: 0, md:3, lg:4}}} container>
                            <Grid pr={5} xs={12} md={6} lg={6} item>
                                <h3>Get in touch</h3>
                                <p>Let's Turn your Idea into an Outstanding Product. You can send a mail here or just dm me in any of these social media.</p>

                                <Grid sx={{mt:2}} item container >
                                    <Link passHref href='https://www.instagram.com/developerchamp/'>
                                        <a rel='noreferrer' target='_blank'>
                                            <span>Instagram{Arrow}</span>
                                        </a>
                                    </Link>
                                    <Link passHref href='https://www.linkedin.com/in/sandip-rout-5264421ba/'>
                                        <a rel='noreferrer' target='_blank'>
                                            <span>LinkedIn{Arrow}</span>
                                        </a>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid  alignItems='center' mb={5} sx={sx} xs={12} md={6} lg={6} item>
                                <form>
                                    <Input name='Name' required placeholder='Your Name'  fullWidth/>
                                    <Input name='Email' required placeholder='Your Email'  fullWidth/>
                                    <Input name="Message" sx={{marginBottom:'8vh'}} required placeholder="Message" multiline rows={7}  fullWidth/>
                                    {/* <TheButton link='#' text="SEND MESSAGE"/> */}
                                    <Button sx={{textAlign:'center'}} size='large' disableElevation type='submit'>Send Message</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </ContactStyles>
        </div>
    )
}

export default Contact
