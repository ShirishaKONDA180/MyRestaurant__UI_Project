import React from 'react'
import '../../styles/FooterStyles.css'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function Footer(){
  return (
    <div>
        <Box sx={{textAlign:'center', bgcolor:'#1A1A19',color:'white',p:3}}> 
            <Box sx={{my:2}}>
                <InstagramIcon className='footer-icons'/>
                <TwitterIcon className='footer-icons'/>
                <GitHubIcon className='footer-icons'/>
                <YouTubeIcon className='footer-icons'/>
            </Box>
            <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:'1rem'}}}>
                All Rights Reserved &copy; Techinfo YT
            </Typography>
        </Box>
    </div>
  )
}

export default Footer
