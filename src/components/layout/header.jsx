import React from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import NoFoodSharpIcon from '@mui/icons-material/NoFoodSharp';
import RamenDiningSharpIcon from '@mui/icons-material/RamenDiningSharp';
import { Link, NavLink } from "react-router-dom";
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Logo1 from '../../images/logo.svg'

export function Header(){

    const [mobileopen,setMobileopen] = useState(false);

    function handleDrawerToggle(){
        setMobileopen(!mobileopen);
    }

    const drawer =(
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>

                <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1,my:2}}>
                   <NoFoodSharpIcon />
                    My Resturant
                </Typography>
                <Divider/>

                <ul className="mobile-navigation">
                    <li><NavLink activeClassName="active" to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/menu'}>Menu</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul>
  
        </Box>

    )
    return(
        <div>
            <Box>
                <AppBar component={'nav'} sx={{bgcolor: "black"}}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:'none'}}} onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>

                        <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
                           <img src={Logo1} height='70' width='250' />
                        </Typography>
                        <Box sx={{display:{xs:'none',sm:'block'}}}>
                            <ul className="navigation-menu">
                                <li><NavLink activeClassName="active"  to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                                <li><NavLink to={'/about'}>About</NavLink></li>
                                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'}}}>
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar />
            </Box>
        </div>
    )
}