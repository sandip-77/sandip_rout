import { Container, Grid, Typography} from '@mui/material';
import { Box, styled, textAlign } from '@mui/system';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';


const TheFotter = styled(Box)(({theme})=> ({
    "& h3":{
      fontWeight:400,
      lineHeight:'27px',
      fontSize:18, 
      letterSpacing:'0.03em',
      marginBottom:5,
      [theme.breakpoints.up('md')]:{
        fontSize:32,
        lineHeight:'38px'
        }
    },
    "& h4":{
      fontWeight:500,
      fontSize:22, 
      lineHeight:'33px',
      [theme.breakpoints.up('md')]:{
        fontSize:41,
        lineHeight:'61px'
        }
  
    },
    "& p":{
        fontSize: 13,
        lineHeight:'25px',
        color: 'rgba(0, 0, 0, 0.57)',
        [theme.breakpoints.up('md')]:{
            fontSize:20,
            lineHeight:'30px'
            }
    },
    "& span":{
        fontSize:'18px', lineHeight:"27px", display:'flex', alignItems:'center', marginRight:10
    }
  }));




  const TheArrow = styled(ArrowForwardIcon)(({theme})=> ({
    fontSize:22, 
    transform:'rotate(315deg)', 
    textAlign:'center', 
    marginLeft:'3px',
    [theme.breakpoints.up('md')]:{
        fontSize:41,
        lineHeight:'61px'
        }
  }));
  

  const Arrow = (
      <TheArrow>
        <ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>
    </TheArrow>
  );

const ProfileFotter = ({text}:any) => {
    return (
        <div>
            <TheFotter>
                <Box mt={3}>
                    <Container maxWidth={text}>
                        <Grid >
                                <Typography 
                                    sx={{'& span':{ 
                                        fontWeight:400,
                                        lineHeight:'27px',
                                        fontSize:18, 
                                        letterSpacing:'0.03em',
                                        marginBottom:5,
                                        md: {
                                            lineHeight:'38px',
                                            fontSize:32, 
                                        }
                                            ,
                                        }}} variant='h3'>Interested in working together? <br />
                                        <span style={{textDecoration:'underline', display:'inline'}}>
                                            <Link passHref href='/contact'> Get in touch</Link>
                                        </span> today. 
                                </Typography>
                            <h4><a style={{display:'flex', alignItems:'center'}} href="mailto:sandip.rout901@gmail.com">sandip.rout901@gmail.com {Arrow}</a></h4>
                            <p>If you like my work and have some cool project to work on, just send me direct message or contact me through social sites given below.</p>
                        </Grid>

                        <Grid sx={{mt:2}} item container >
                            <Link passHref href='https://www.instagram.com/developerchamp/'>
                                <a rel='noreferrer' target='_blank'>
                                    <span>Instagram{<ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>}</span>
                                </a>
                            </Link>
                            <Link passHref href='https://www.linkedin.com/in/sandip-rout-5264421ba/'>
                                <a rel='noreferrer' target='_blank'>
                                    <span>LinkedIn{<ArrowForwardIcon sx={{fontSize:22, transform:'rotate(315deg)', textAlign:'center', marginLeft:'3px'}}/>}</span>
                                </a>
                            </Link>
                        </Grid>

                        <p style={{textAlign:'center', fontSize:'16px', margin:'35px 0 20px 0'}}>© sandip rout 2021</p>
                    </Container>
                </Box>
            </TheFotter>
        </div>
    )
}

export default ProfileFotter
