import React from 'react'
import { Layout } from '../components/layout/layout'
import { Box, Typography} from '@mui/material'
import '../styles/ConatctStyles.css'
import { Height } from '@mui/icons-material'

export function Contact(){
  return (
    <Layout sx={{height:'90vh'}}>
      <div className='contact'>
        <Box sx={{my:10,ml:10}}>
          <Typography variant='h4'>Contact Us</Typography>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam in error neque officiis magnam molestias explicabo rerum? Laboriosam quas rerum officia, molestiae aut qui eaque! Natus nostrum nesciunt soluta vel.</p>
        </Box>
      </div>
      <div className='details'>
          <h3>Contact details</h3>
          <div>
            <p><i className='bi bi-voicemail'></i>1800-00-0000(tollfree)</p>
            <p><i className='bi bi-envelope-fill'></i>help@mysrest.com</p>
            <p><i className='bi bi-telephone-fill'></i>6232681538</p>
          </div>
        </div>
    </Layout>
  )
}

export default Contact
