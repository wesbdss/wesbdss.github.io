import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import svgborda from './svg_borda.svg';

const storyStyle = makeStyles({
    root: {
        display: 'flex',
        width: "100%",
        backgroundImage: 'url("/assets/bg_1.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
        flexDirection: "column",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "1em"

    },
    infos: {
        display: "flex"
    },
    apresent: {
        display: "flex",
        flexDirection: "column",
        textAlign: " center",
        width: "90%",
        color: "#18191a",
        marginLeft: "auto",
        marginRight: "auto",
        "& img": {
            width: '150px',
            height: '150px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '5%',
            borderRadius: '100px'
        }

    },
    text: {
        color: "#18191a",
        padding: "1%",
        "& h1": {
            fontSize: "7em"
        }

    },
    contact: {

        width: "90%",
        marginLeft: "auto", 
        marginRight: "auto",
        display: "flex",
        justifyContent: "space-around",
        "& div": {
            height: "auto",
            display: "flex",
            "& a": {
                color: "#18191a",
                verticalalign: "middle",
                textDecoration: "none"
            }
        }

    },
    detalhe: {
        width: "100%",
        height: "100px",
        background: "transparent",
        '& img': {
            width: "100%",
        }

    },



    // Mobile part
    '@media(max-width:750px)': {
        root: {
            backgroundColor: "red"


        },
        text: {
            color: "#18191a",
            padding: "1%",
            width: "100%",
            "& h1": {
                fontSize: "2em",
                wordWrap: "break-word",
                transform: "rotate(10deg)",
                marginTop: "40%"

            },
            "& p": {
                display: "none",
                position: "fixed",
            }

        },
        contact: {
            width: "80%",
            fontSize:".5em"
    
        },
    }

})

export default function () {
    const classes = storyStyle();
    const atributos = ["Desenvolvedor", "Analista", "Desenvolvimento Web", "Data Sciente", "Big Data", "NoSQL", "SQL", "FrontEnd",
        "BackEnd", "API", "JSON", "AJAX", "DBA", "Oracle", "Django", "Java", "JavaScript", "NodeJs", "HTML", "CSS", "ReactJS", "Flutter", "WebScrapping",
        "Docker", "WebGL", "Python", "Machine Learning", "Modelos Peditivos", "AWS", "ChatBots", "Automação", "Mobile", "Kotlin"]
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.infos}>
                    <div className={classes.text}>
                        <span><h1>Desenvolvedor</h1></span>
                        <p>{atributos.map((elem, i) => { return " | " + elem + " " })}</p>

                    </div>
                    <div className={classes.apresent}>
                        <img src="https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif" alt="" />
                        <h2>Wesley Benício dos Santos Silva</h2>
                    </div>
                </div>
                <hr style={{ borderColor: "#18191a", width: "90%", marginLeft: "auto", marginRight: "auto" }} />
                <div className={classes.contact}>
                    <div>
                        <a href="https://linkedin.com/in/wesbdss"> <LinkedInIcon /> </a> <a href="https://linkedin.com/in/wesbdss">Linkedin (/in/wesbdss)</a>
                    </div>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=5564993192386&text=Obrigado%20por%20me%20contatar%2C%20pode%20me%20chamar%20que%20responderei%20em%20minutos!"><WhatsAppIcon /></a> <a href="https://api.whatsapp.com/send?phone=5564993192386&text=Obrigado%20por%20me%20contatar%2C%20pode%20me%20chamar%20que%20responderei%20em%20minutos!"> WhatsApp (+5564993192386)</a>
                    </div>
                    <div>
                        <a href="https://github.com/wesbdss"><GitHubIcon /></a> <a href="https://github.com/wesbdss"> Github (wesbdss)</a>
                    </div>
                </div>
                <hr style={{ borderColor: "#18191a", width: "90%", marginLeft: "auto", marginRight: "auto", backgroundColor: "#00c2ea" }} />
            </div >

            <div className={classes.detalhe}>
                <img src={svgborda} alt="" />
            </div>
        </div>

    )
}
