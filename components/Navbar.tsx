import { ClassNames } from '@emotion/react'
import { Container, Grid, IconButton, makeStyles, Theme } from '@mui/material'
import { Box, styled as styled2 } from '@mui/system'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';
import Link from 'next/link';

const Name = styled2('p')(({theme})=>({
    fontSize:25,
    fontWeight:300,
    [theme.breakpoints.up('sm')]:{
        fontSize:35,
    },
    [theme.breakpoints.up('md')]:{
        fontSize:41,
    },

}));

const Sidemenu = styled2(Grid)(({theme})=>({
    height:'100vh',
    width:'75vw',
    position:'fixed',
    top:0,
    right:0,
    backgroundColor:'#0d0d0d',
    color:'white',
    paddingTop:30,
    fontSize:20,
    zIndex:88,
    "& p":{
        marginLeft:20,
        marginTop:20,
        cursor:'pointer'
    },
    "& p:nth-of-type(4)":{
        display:'flex',
        alignItems:'center'
    },
    "& p:nth-of-type(5)":{
        display:'flex',
        alignItems:'center'
    },

}));


const Arrow = (
    <ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
);




const Navbar = () => {


    const [isSidemenuOpen, setIsSidemenuOpen]= useState(false);

    const renderMobileSideMenu = (
        <Sidemenu>
            <Grid>
                <Link passHref href='/about'>
                    <a><p>About</p></a>
                   
                </Link>
                <Link passHref href='/portfolio'>
                <a><p>Portfolio</p></a>

                </Link>
                <Link passHref href='/contact'>
                <a><p>Contact</p></a>

                    
                </Link>
                <Link passHref href='https://www.linkedin.com/in/sandip-rout-5264421ba/' >
                    <p>LinkedIn{Arrow}</p>
                </Link>
                <Link passHref href='https://www.instagram.com/developerchamp/'>
                    <p>Instagram{Arrow}</p>
                </Link>
            </Grid>
            <IconButton sx={{position:'absolute', top:0, right:0, marginRight:2, marginTop:1, color:'white'}} onClick={ ()=> setIsSidemenuOpen(!isSidemenuOpen)}>
                <ClearIcon sx={{fontSize:32, cursor:'pointer'}} />
            </IconButton>
            <p style={{textAlign:'center',position:"absolute", fontSize:15, marginLeft:0, left:0, right:0,  bottom:'5vh' }}>© Sandip Rout {new Date().getFullYear()}</p>
        </Sidemenu>
    );


    return (
        <div>
            <Grid sx={{mt:1}} container>
                <Grid container alignItems='center' xs={8} lg={6} item>
                    <Container maxWidth='md'>
                        <Link passHref href='/'><a><Name>Sandip.</Name></a></Link>
                    </Container>
                </Grid>
                <Grid sx={{display:{xs:'none', lg:'flex'}}} alignItems='center' maxWidth='md' justifyContent='end' className='gap-12 px-6 text-lg' container direction='row' item lg={6}>
                    
                    <Link passHref href='/about'>
                        <a><Grid>About</Grid></a>
                    </Link>
                    <Link passHref href='/portfolio'>
                    <a><Grid>Portfolio</Grid></a>
                    </Link>
                    <Link passHref href='/contact'>
                    <a><Grid>Contact</Grid></a>
                    </Link>
                </Grid>
                <Grid sx={{display:{lg:'none', xs:'flex'}}}  container alignItems='center' justifyContent='flex-end' item xs={4} lg={6}>
                    <Container maxWidth='xs' sx={{display:'flex', justifyContent:'flex-end'}}>
                        <IconButton onClick={() => setIsSidemenuOpen(!isSidemenuOpen)}>
                        <MenuIcon sx={{fontSize:32, cursor:'pointer', color:'black'}}/>
                        </IconButton>
                    </Container>
                </Grid>
                    {isSidemenuOpen && renderMobileSideMenu}
            </Grid>
        </div>
    )
}

export default Navbar
