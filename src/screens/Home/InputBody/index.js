import React from 'react'
import videosvg from '../assets/video-svgrepo-com.svg';
import fotosvg from '../assets/video.svg';
import emotesvg from '../assets/smile-svgrepo-com.svg';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'

const body_post = makeStyles({
    conteiner: {
        backgroundColor: ' #242526',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid  #b0b3b8',
        padding: '2%',
        borderRadius: '8px'
    },
    row: {
        display: "flex"
    },
    conteinerInput: {
        width: '100%',
        height: '80%',
        alignSelf: "center",
        justifyContent: "space-evenly",
        "& input": {
            height: '100% !important',
            width: '90% !important',
            backgroundColor: '#3a3b3c',
            color: '#96b3b8',
            paddingLeft: '3%',
            borderRadius: '30px !important'
        }
    },
    conteinerButtons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        '& button': {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: ' transparent',
            borderColor: 'transparent',
            color: "#96b3b8",
            fontWeight: 'bold',
            height: 'auto'
        },

        '& img':{
            height:'20px',
            padding:'10px'
        }

    }
})

export default function ({username}) {
    const classes = body_post()
    return (
        <div className={classes.conteiner}>
            <div className={classes.row}>
                <AccountCircleIcon style={{ color: "#b0b3b8" }} fontSize="large" />
                <div className={classes.conteinerInput}>
                    <input type="text" placeholder={"O que você está pensando hoje, "+username+"?"} />
                    
                </div>
            </div>
            <hr />
            <div className={classes.conteinerButtons}>
                <button> <img src={videosvg} alt="" /> Alguma coisa</button>
                <button> <img src={fotosvg} alt="" /> Alguma coisa</button>
                <button> <img src={emotesvg} alt="" /> Alguma coisa</button>
            </div>
        </div>
    )
}
