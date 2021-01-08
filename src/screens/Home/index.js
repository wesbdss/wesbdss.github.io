import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode.react';
import Posts from './Posts'
import DirScreen from './DirScreen';
import Story from './Story';
import './index.css';
import NavBar from './NavBar';
import InputBody from './InputBody';
import { useCookies } from 'react-cookie';
import api from '../../services/api'
import ImageInput from './DragAndDropImage'

export default function () {

    // const refCanvas = useRef(null)
    // useEffect(() => {
    //     const canvas = refCanvas.current;
    //     const ctx = canvas.getContext('2d')
    //     ctx.clearRect(0, 0, window.innerHeight, window.innerWidth / 2)
    // })
    const [cookies, setCookie, removeCookie] = useCookies();
    const [posts, setPosts] = React.useState([]);
    useEffect(
        () => {
            (async () => {
                if (cookies.username == undefined) {
                    try {
                        const username = window.prompt('Qual seu nome? (Será gravado apenas uma vez!)')
                        try {
                            var response = await api('POST', '/users/create', { name: username });
                            setCookie('id', response.result.id)
                            setCookie('username', username)
                        } catch (error) {
                            // alert("ruim")
                        }
                    } catch (ex) {
                        // alert("ex")
                    }
                }

                try {
                    if (posts.length == 0) setPosts(await api('GET', '/posts/all'))
                } catch (ex) {
                }

                return;
            })()
        }, [cookies.username, posts]
    )

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
        <div>
            <div style={{ height: '10vh' }}>
                <NavBar />

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
                        <ImageInput />
                        <InputBody username={cookies.username} />
                        {posts.map((elem, index) => {
                            return (
                                <Posts
                                    key={index}
                                    username={"Admin"}
                                    id={elem.idposts}
                                    // group={"Assunto"}
                                    postLike={postLike}
                                    title={elem.title}
                                    image={elem.image != null ? elem.image : "https://www.comboinfinito.com.br/principal/wp-content/uploads/2020/07/Re-zero-rem-02-896x504-1.jpg"}
                                    likes={elem.likes}
                                />)
                        })}

                    </div>
                </div>
                <div className="body_dir">
                    <DirScreen />

                </div>
            </div>
            <div>
                {/* <canvas ref={refCanvas} width={window.innerWidth} height={window.innerHeight / 2} /> */}
                {/* <QRCode value="https://google.com/" /> */}
            </div>
        </div>
    )
}
