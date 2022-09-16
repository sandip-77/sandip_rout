/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import sandipImg from '../public/sandiprout.jpg';
import Image from 'next/image'
import { Button, Container, Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import TheButton from '../components/TheButton';
import grabASnak from '../public/images/grab-a-snak.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Footer from '../components/Footer';

const ProfileImageGrid = styled(Grid)(({theme})=> ({
  "& img":{
      borderRadius: '50%',
      zIndex:-1
    }
}));

const IntroBox = styled(Box)(({theme})=> ({
  textAlign:'center',
  "& h3":{
    fontWeight:500,
    lineHeight:'42px',
    fontSize:28, 
    letterSpacing:'0.03em',

    // desktop version
    [theme.breakpoints.up('md')]:{
      fontSize:40,
      lineHeight:'60px',
      fontWeight:500,
      letterSpacing:'0.07em',

    }
  },
  "& p":{
    fontSize:20, 
    lineHeight:'30px',
    color: 'rgba(0, 0, 0, 0.57)'

  }
}));


const RecentprojectBox = styled(Box)(({theme})=> ({
  textAlign:'center',
  "& h3":{
    fontWeight:500,
    lineHeight:'42px',
    fontSize:28, 
    letterSpacing:'0.03em',
    marginBottom:5,
    
    [theme.breakpoints.up('md')]:{
      fontSize:41,
      lineHeight:'61px',
      fontWeight:500,

    }
  },
  "& p":{
    fontSize:20, 
    lineHeight:'30px',
    color: 'rgba(0, 0, 0, 0.57)',

  },
  "& img":{
    zIndex:-1,
  }
}));

const MFmaterialUI = styled('p')(({theme})=> ({
  textAlign:'left',
  fontSize:'18px !important',
  lineHeight:'27px',
  fontWeight:500,
  color:'#000 !important',

  [theme.breakpoints.up('md')]:{
  textAlign:'left',
  fontSize:20,
  lineHeight:'30px',
  fontWeight:500,

  }
  
}));

const Arrow = (
  <ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
);


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sandip Rout</title>
        <meta name="description" content="This is the personal portfolio website of sandip rout." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      {/* Profile image */}
      <div className=''>
        <div className='mt-3 justify-center flex'>
          <Image className='rounded-full z-[-1]' src={sandipImg} alt='Sandip Rout' width='171' height='171'/>
        </div>
      </div>

    {/* INRODUCTION */}
    <IntroBox>
      <Box>
        <Container>
          <Grid>
            <Container maxWidth='md' sx={{p:2, pt:1, pb:2}}>
            <h3>I'm Sandip, a <span style={{background: 'linear-gradient(to top, #FEDDBE 45%, #fff 20%)'}}>Digital Product</span> developer.</h3>
            </Container>
          </Grid>
          <Grid>
            <Container maxWidth='md'  sx={{p:4, pt:1}}>
              <p>Young and serious about work, always welcome a new challenge. Passionate about development and absolutely love everything I build.</p>
            </Container>
            <Container maxWidth='md'>
              <Grid sx={{pb:12, mt:2, borderBottom:'1px solid rgba(0, 0, 0, 0.2)'}}>
                <TheButton text='KNOW ME' link='/about'/>
              </Grid>
            </Container>

          </Grid>
        </Container>
      </Box>
    </IntroBox>


    {/* Recent Projects */}

    <RecentprojectBox className='text-center'>
      <Box mt={4}>
        <Grid textAlign='center'>
          <h3>Recent Project</h3>
          <Container>
             <p> The most recent peoject I have worked on </p>
          </Container>
        </Grid>
        <Grid>
          <Container maxWidth='md' sx={{mt:4}}>
            <div  className='shadow-md'>
              <Image  className='shadow-lg border-black border'  src={grabASnak} alt='grabASnak' />
            </div>
          </Container>

          {/* recent post name and links to site */}
            <Container className='mt-3' maxWidth='md'>
              <Grid mb={3} container item alignItems='center' justifyContent='space-between'>
                <MFmaterialUI>
                Grab A Snak -  An extended ecommerce application
                </MFmaterialUI>
                <Grid sx={{fontSize:16, fontWeight:500,}} xs={12} container alignItems='center' item>
                  <Link passHref href='/portfolio/grab-a-snak'>
                      <a rel="noreferrer" >
                      <Grid container alignItems='center' item>
                        <span style={{borderBottom:'1px solid'}}>See Project</span>{Arrow}
                      </Grid>
                      </a>
                  </Link>
                </Grid >
              </Grid>
            </Container>

            {/* link to portfolio page */}

            <Container maxWidth='md'>
              <Grid sx={{pb:6, mt:5, borderBottom:'1px solid rgba(0, 0, 0, 0.2)'}}>
                  <TheButton link='/portfolio' text='EXPLORE MORE'/>
              </Grid>
            </Container>

        </Grid>
      </Box>
    </RecentprojectBox>


    {/* Footer */}
      <Footer text='md'/>
    </div>
  )
}

export default Home
