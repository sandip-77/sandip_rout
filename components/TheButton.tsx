import { ButtonUnstyled } from '@mui/core'
import { Box, styled } from '@mui/system'
import React from 'react'
import Link from 'next/link'


const TheButton = ({link, text}:any) => {

    const ButtonBox = styled(Box)(({theme})=> ({
        textAlign:'center',
        "& button":{
          padding: '15px 25px',
          fontSize:16,
          letterSpacing:'0.01em',
          lineHeight: '24px',
          backgroundColor:'#fff',
          border:'1px solid #000',
          cursor:'pointer',
          transition: 'all 500ms ease',
          [theme.breakpoints.up('md')]:{
            fontSize:18,
            lineHeight: '27px',
            letterSpacing:'0.095em',
      
          }
      
        },
        "& button:hover":{
          color:'#fff',
          backgroundColor:'#000',
          transition: 'all 500ms ease'
      
        }
      }))


    return (
        <div>
            <ButtonBox>
                <Box>
                    <Link passHref href={link}>
                        <ButtonUnstyled type='submit'>
                            {text}
                        </ButtonUnstyled>
                    </Link>
                </Box>
            </ButtonBox>
        </div>
    )
}

export default TheButton
