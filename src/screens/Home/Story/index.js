import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const storyStyle = makeStyles({
    story: {
        display:'flex',
        alignSelf:'center',
        margin:'5% 1% 5% 1%',
        maxWidth:'12%',
        '& img':{
            width:'100%',
            height:'100%',
            borderRadius:'5%'
        }
    },
    story_overlay: {
        opacity:'.7'
    }

})

export default function( props) {

    const classes = storyStyle()
    return (
        <div className={classes.story}>
            <img className={classes.story_overlay} src={props.image != null ? props.image : "https://i.pinimg.com/originals/e3/c5/9d/e3c59d57595edb41f2d1c38bb9fe225f.jpg"} alt="" />
        </div>
    )
}
