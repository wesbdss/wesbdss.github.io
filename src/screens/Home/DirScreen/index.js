import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import api from '../../../services/api'
import { useCookies } from 'react-cookie';
import { Fade } from 'react-reveal'

const ScreenStyles = makeStyles({
    body: {
        width: '100%',
        height: '80%',
        '& div': {
            marginTop: '5%',
            marginBottom: '5%'
        },
        '& hr': {
            width: '80%',
            display: 'flex',
            justifySelf: 'center'
        }
    },
    body_fixed: {
        width: '30%',
        height: '80%',
        position: 'fixed',
        top: '0',
        right: '0',
    },
    friends: {
        overflowY: 'scroll',
        height: '90%',
        '& h3:over': {
            backgroundColor: 'red'
        }
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5% 5% 5% 0%',
        '& svg': {
            paddingRight: '5%',
        },
        '&:hover': {
            backgroundColor: '#353739'
        }
    },
    '@media only screen and (max-width: 750px) ':{
        body_fixed: {
            backgroundColor: "#242526",
            padding:'5%',
            width:'50%',
            border:'5px solid rgba(176,179,184,0.3)',
            height:'100%',
        }
    }
    
})

export default function () {
    const [users, setUsers] = React.useState([]);
    const classes = ScreenStyles()
    const [cookies, setCookie, removeCookie] = useCookies(['teste']);

    const get = async () => {

        try {
            var response = await api('GET', '/users/all')
            setUsers(response)

            // alert(response)
        } catch (error) {
            // alert(error)
        }
    }
    React.useEffect(() => {
        if (users.length == 0)
            get()

    })

    return (
        <div className={classes.body} >
            <div className={classes.body_fixed}>
                <div>
                    <h3 style={{ color: "#b0b3b8" }} >Propagandas</h3>
                </div>
                <hr style={{ color: "#b0b3b8" }} />
                <div>
                    <h3 style={{ color: "#b0b3b8" }} >Visitantes</h3>
                </div>
                <Fade bottom cascade>
                    <div className={classes.friends}>

                        {users.map((elem, key) => {
                            return (
                                <div key={key} className={classes.contact}>
                                    <AccountCircleIcon style={{ color: "#b0b3b8" }} />
                                    <h3 style={{ color: "#b0b3b8" }} >{elem.name}  {elem.id == cookies.id ? <span style={{ color: "greenyellow" }}> (Você)</span> : null}</h3>
                                </div>)
                        }
                        )}


                    </div>
                </Fade>
            </div>
        </div>
    )
}
