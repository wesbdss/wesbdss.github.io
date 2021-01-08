import React from 'react'
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import facesvg from '../assets/facebook-svgrepo-com.svg';
import {makeStyles} from '@material-ui/core/styles'

const navbarStyles = makeStyles({
    navbar:{
        display:'flex',
        position:'relative',
        marginBottom:'3%'
    },
    navbarFixed:{
        display:'flex',
        position:"fixed",
        backgroundColor:'#242526',
        justifyContent:'space-between',
        borderBottom:'1px solid #b0b3b8',
        width:'100%',
        height:'auto',
        padding:'8px 0 8px 0',
        top:'0',
        zIndex:'20'
    },
    navEsq:{
        height:'100%',
        '& img':{
            height:'40px',
            margin:'0 10px 0 10px',
        }
    },
    navCen:{
        display:'flex',
        justifyContent: 'space-evenly',
        width:'30%'
    }

})


export default function () {
    const classes = navbarStyles()
    return (
        <div className={classes.navbar}>
            <div className={classes.navbarFixed}>
                <div className={classes.navEsq}>
                    <img src={facesvg} alt="" />
                    <SearchIcon style={{ color: "#b0b3b8" }} fontSize='large' />
                </div>
                <div className={classes.navCen}><HomeIcon style={{ color: "#b0b3b8" }} fontSize='large' /><OndemandVideoSharpIcon style={{ color: "#b0b3b8" }} fontSize='large' /><StorefrontSharpIcon style={{ color: "#b0b3b8" }} fontSize='large' /><GroupRoundedIcon style={{ color: "#b0b3b8" }} fontSize='large' /></div>
                <div>
                    <AddIcon style={{ color: "#b0b3b8" }} fontSize='large' />
                    <NotificationsIcon style={{ color: "#b0b3b8" }} fontSize='large' />
                </div>
            </div>

        </div>
    )
}
