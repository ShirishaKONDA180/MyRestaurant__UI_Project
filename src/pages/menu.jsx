import React, { useEffect } from 'react'
import { Layout } from '../components/layout/layout'
import axios from 'axios'
import { useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export function Menu(){

  const[images,setImages]=useState([{img_src:''}]);
  
  function LoadImages(){
    axios.get('data.json')
    .then(response=>{
      setImages(response.data);
    })
  }

  useEffect(()=>{
    LoadImages();
  },[])

  return (
    <Layout>
      <Box sx={{display:'flex',flexWrap:'wrap' , justifyContent:'center'}}>
          {
            images.map(image=>(
              <Card sx={{maxWidth: '390px', m:2}}>
                <CardActionArea >
                  <img width="300px" height="300px" key={image.img_src} src={image.img_src} alt={image.name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {image.name}
                    </Typography>
                    <Typography  variant='body2'>
                      {image.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        
      </Box>

    </Layout>
  )
}

export default Menu
