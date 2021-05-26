import React, { useEffect, useRef, useState } from 'react'
import Posts from './Posts'
import DirScreen from './DirScreen';
import Story from './Story';
import './index.css';
import NavBar from './NavBar';
import InputBody from './InputBody';
import { useCookies } from 'react-cookie';
import api from '../../services/api'
import ImageInput from './DragAndDropImage'
import Model2d from './Model2d'
import { Fade } from 'react-reveal'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function () {

    // const refCanvas = useRef(null)
    // useEffect(() => {
    //     const canvas = refCanvas.current;
    //     const ctx = canvas.getContext('2d')
    //     ctx.clearRect(0, 0, window.innerHeight, window.innerWidth / 2)
    // })
    const [cookies, setCookie, removeCookie] = useCookies();
    const [posts, setPosts] = React.useState([]);
    const [openDir, setOpenDir] = React.useState('')
    useEffect(
        () => {
            (async () => {
                if (cookies.username == undefined) {
                    const username = window.prompt('Qual seu nome? (Será gravado apenas uma vez!)')
                    var response = await api('POST', '/users/create', { name: username });
                    setCookie('id', response.result.id)
                    setCookie('username', username)
                }
                if (posts.length == 0) setPosts(await api('GET', '/posts/all'))
            })().catch((err) => {
                //faz nada
            })
        }, [cookies.username, posts]
    )

    const hiddenList = (e) => {
        if (openDir === 'none')
            setOpenDir('flex')
        else setOpenDir('none')
    }
    const postLike = async (e) => {
        e.target.disabled = true;
        try {
            await api('POST', '/posts/like', { id: e.target.id })
            setPosts(await api('GET', '/posts/all'))

        } catch (error) {
            // alert("Deu Erro comment" + error)
        }
    }

    return (
        <div >
            <div style={{ height: 'auto' }}>
                <NavBar action={hiddenList} />
            </div>
            <div className="body">

                <div className="body_center">
                    <div style={{ display: 'flex', width: '100%', alignSelf: 'center', justifyContent: "center" }}>
                        <Story image={'https://img.wattpad.com/275443f49d66c93be9f0d6def4007b25db2a1f3d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4d4466505f33644f694a4f5670413d3d2d3732303534323735352e313539363235326536313136643230343537313838373733343337382e676966'} />
                        <Story image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXFDLs47rrntiXcwlx99Z1l8rVbMmP-WWpQ&usqp=CAU'} />
                        <Story />
                        <Story />
                        <Story />
                    </div>
                    <div className="container_body">
                        {/* <ImageInput /> */}
                        <InputBody username={cookies.username} />
                        <Fade bottom>
                            <Model2d
                                key={-1}
                                username={"Admin"}
                                id={-1}
                                group={"Aqui não é Diferente"}
                                postLike={postLike}
                                title={""}
                                likes={3121} />
                        </Fade>

                        {posts.map((elem, index) => {
                            return (
                                <Fade bottom>
                                    <Posts
                                        key={index}
                                        username={"Admin"}
                                        id={elem.idposts}
                                        // group={"Assunto"}
                                        postLike={postLike}
                                        title={elem.title}
                                        image={elem.image != null ? elem.image : "https://www.comboinfinito.com.br/principal/wp-content/uploads/2020/07/Re-zero-rem-02-896x504-1.jpg"}
                                        likes={elem.likes}
                                    />
                                </Fade>)
                        })}
                        <div style={{ paddingBottom: '5%' }}></div>
                    </div>

                </div>

                <div className="body_dir" style={{ display: openDir }} >
                    <Fade Right>
                        <DirScreen />

                    </Fade>
                </div>
                {/* <canvas ref={refCanvas} width={window.innerWidth} height={window.innerHeight / 2} /> */}
                

            </div>
            <footer className="body_footer">

                <p>Created by Wey</p>
                <p>Obrigado Pela Visita!</p>
                <div >
                    <a href="https://github.com/wesbdss"><GitHubIcon fontSize='large' style={{ color: "#fff" }} /></a>
                    <a href="https://www.facebook.com/wesbdss"><FacebookIcon fontSize='large' style={{ color: "#fff" }} /></a>
                    <a href="https://www.linkedin.com/in/wesbdss/"><LinkedInIcon fontSize='large' style={{ color: "#fff" }} /></a>
                </div>

            </footer>


        </div>
    )
}
