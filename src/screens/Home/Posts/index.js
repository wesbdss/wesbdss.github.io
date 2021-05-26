import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import { useCookies } from 'react-cookie';
import api from '../../../services/api'
import CircularProgress from '@material-ui/core/CircularProgress';


// Colocar como canvas a imagem


const postStyles = makeStyles({
    comment_post: {
        marginTop: '10px',
        display: 'flex',
        backgroundColor: '#242526',
        flexDirection: "column",
        width: "auto",
        borderRadius: "8px",
        padding: "2%",
        border: '1px solid #b0b3b8',
    },
    comment_post_title: {
        display: 'flex',
        alignItems: 'center',
        '& #comment_post_group_div': {
            height: '50%'
        }
    },
    comment_post_content: {
        padding: '3%',
        color: '#b0b3b8',
    },
    comment_post_image: {
        maxHeight: '400px',
        width: '100%',
        height: '100%'
    },
    comment_post_like: {
        display: 'flex',
        height: '2vw',
        padding: '1%',
        color: '#b0b3b8',
        '& p': {
            paddingLeft: '2%'
        }
    },
    comment_post_like_img: {
        height: '100%',
    },
    comment_post_buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        '& button': {
            display: 'flex',
            backgroundColor: 'transparent',
            color: "#b0b3b8",
            alignItems: 'center',
            width: 'auto',
            border: "transparent",
            fontWeight: 'bold',
        }
    },
    comment_post_comments: {
        height: "auto",
        width: "auto"
    },
    comment_post_comments_bloco: {
        display: "flex",
        flexDirection: "column",
        '& #subdiv1': {
            backgroundColor: " #3a3b3c",
            borderRadius: '20px',
            color: '#96b3b8',
            padding: '10px',
            margin: '5px',
            wordWrap: 'break-word',
            maxWidth: '80%'
        },
        '& #subdiv': {
            display: 'flex'
        },
        '& button': {
            backgroundColor: "transparent",
            padding: '5px',
            border: 'transparent',
            color: '#b8dbeb'
        },
        '& #subdiv3': {
            paddingLeft: '8%',
        }
    },
    comment_post_input: {
        display: 'flex',
        width: '100%',
        paddingleft: '20px',
        '& input': {
            height: '100% !important',
            width: '95% !important',
            backgroundColor: '#3a3b3c',
            color: ' #96b3b8',
            borderRadius: '20px 20px 20px 20px !important'
        }
    },
    '@media only screen and (max-width: 750px)': {
        comment_post: {


        }
    }
    ,
    '@media only screen and (min-width: 751px)': {
        comment_post: {

        }
    }
})


function Commentary(props) {
    const classe = postStyles();
    const [cookies, setCookie, removeCookie] = useCookies(['teste']);

    return (<div style={{ color: "#b0b3b8" }} className={classe.comment_post_comments}>
        <div className={classe.comment_post_comments_bloco}>
            <div id="subdiv">
                <AccountCircleIcon style={{ color: "#b0b3b8" }} src="https://i.pinimg.com/originals/2c/50/81/2c508103b41f76f264847a58b18ca7e4.jpg" fontSize="large" />
                <div id="subdiv1">
                    <h5> {props.user_id == cookies.id ? cookies.username : "Anônimo"} </h5>
                    <p>{props.content}</p>
                </div>
            </div>
            <div id="subdiv3">
                {cookies.id == props.user_id ? <button id={props.id} onClick={props.delete}>delete</button> : null}
            </div>
        </div>
    </div>)
}

export default function (props) {
    const classe = postStyles();
    const [cookies, setCookie, removeCookie] = useCookies(['teste']);
    const [comments, setComments] = React.useState(-1)
    const inputEnter = React.createRef();
    const [displayComments, setDisplayComments] = React.useState('none')



    const showComments = (e) => {
        if (displayComments === 'none') setDisplayComments('inline')
        else setDisplayComments('none')
    }

    const get = async () => {

        try {
            let result = await api('POST', '/comments/find', { id: props.id })
            setComments(result)
        } catch (error) {

        }
    }
    React.useEffect(() => {

        if (comments == -1) {
            inputEnter.current.addEventListener('keypress', (e) => {
                if (e.keyCode == 13 && e.target.value) {
                    addCommentary(e.target.value);
                    e.target.value = ""

                }
            });
        }
        get()
    }, [])

    const addCommentary = async (content) => {
        try {
            await api('POST', '/comments/create', { users_id: cookies.id, content: content, posts_idposts: props.id })

        } catch (error) {
            // alert("deu ruim")
        }
        try {
            let result = await api('POST', '/comments/find', { id: props.id })
            setComments(result)
        } catch (error) {

        }
    }

    const delCommentary = async (e) => {
        try {
            await api('POST', '/comments/delete', { id: e.target.id })
            get()
        } catch (error) {
            alert("Erro ao deletar " + error)
        }

    }

    return (

        <div className={classe.comment_post}>
            <div className={classe.comment_post_title}>
                <AccountCircleIcon style={{ color: "#b0b3b8" }} fontSize='large' />
                <h3 style={{ color: "#b0b3b8" }}>{props.username} ► {props.group}</h3>
            </div>
            <div className={classe.comment_post_content}>
                <p>{props.title}</p>
            </div>
            <div>
                <img className={classe.comment_post_image} src={props.image} alt="" />
            </div>

            {props.likes <= 0 || props.likes == null ? null : <div className={classe.comment_post_like}>
                <img className={classe.comment_post_like_img} src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                <p>{props.likes}</p>
            </div>}
            <hr style={{ color: "#b0b3b8" }} />
            <div className={classe.comment_post_buttons}>
                <button id={props.id} onClick={props.postLike}><ThumbUpRoundedIcon style={{ paddingRight: '5px' }} /> Curtir</button>
                <button onClick={showComments}><ChatBubbleRoundedIcon style={{ paddingRight: '5px' }} /> Comentar</button>
            </div>
            <hr style={{ color: "#b0b3b8" }} />
            {comments.length == 0 ? <div style={{ color: 'white', display: 'flex', width: '100%', justifyContent: 'center', padding: '10px' }}>... Seja o Primeiro a Comentar ...</div> : <div> </div>}
            <div style={{ display: displayComments }}>
                {comments == -1 ? <CircularProgress /> : comments.map(elem => { return <Commentary delete={delCommentary} id={elem.idcomments} user_id={elem.users_id} content={elem.content} /> })}
                <div className={classe.comment_post_input} >
                    <AccountCircleIcon style={{ color: "#b0b3b8" }} fontSize="large" />
                    <div className={classe.comment_post_input}>
                        <input ref={inputEnter} type="text" placeholder={"O que você está pensando hoje, " + cookies.username + "?"} />
                    </div>
                </div>
            </div>


        </div>

    )
}
