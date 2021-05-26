import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const storyStyle = makeStyles({
    root: {
        width:"100%",
        height:"30px",
        backgroundColor:"red",
        content:"",
        padding:"1px",
        paddingLeft:"5px",
        paddingRight:"5px",
        display:"flex",

    },
    barrinha:{
        content:"",
        height:'100%',
        width:"100%",
        backgroundColor:"blue",
        marginLeft:'1px',
        marginRight:'1px'
    }

})
export default function () {
    const classes = storyStyle();
    return (
        <div className={classes.root}>
            <div className={classes.barrinha} />
            <div className={classes.barrinha} />
            <div className={classes.barrinha} />
            <div className={classes.barrinha} />
            <div className={classes.barrinha} />
            
        </div>
    )
}
