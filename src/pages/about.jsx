import React from 'react'
import { Layout } from '../components/layout/layout'
import { Box, Typography } from '@mui/material'
import '../styles/AboutStyles.css'

export function About(){
  return (
    <Layout>
      <div className="about">
        <Box sx={{my:10,textAlign:'center',p:2}}>
          <Typography variant='h4'>Welcome To My Resturant</Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae nemo iste quas, dolores qui nobis quae aut quisquam id nisi laborum voluptas facilis animi, dolorem provident officiis odio dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, maxime. Laborum nulla ducimus aut rem, possimus fuga minus omnis error voluptatum, quibusdam, sunt vitae deleniti. Ut totam minima voluptatem sequi?</p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nobis fuga dolorum officia neque, ut voluptas esse rem eveniet voluptatum repudiandae doloribus voluptatem, et labore ipsa. Cumque nemo corporis itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor mollitia, assumenda eos, aperiam perferendis animi, asperiores minima praesentium eligendi laboriosam perspiciatis voluptatibus minus pariatur ab temporibus odit molestias error.</p>
        </Box>
      </div>
    </Layout>
  )
}

export default About
