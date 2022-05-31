import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Chat from './Chat'
import ChooseRoom from './ChooseRoom'

const socket = io.connect("https://room-chat-app1.herokuapp.com/")


export default function Socket() {
    console.log('process', process.env.POST)
    const [user, Setuser] = useState({
        userName: '',
        RoomID: '',
    });

    useEffect(() => {
        console.log('joinRoom')
        socket.on('join_room', user)
    
    }, [user])
    console.log('user', user)

    return (
        <div  className="Background "  >
 

            {
                !user.RoomID ? <ChooseRoom socket={socket} Setuser={Setuser} />
                    :
                    <Chat socket={socket} user={user} />
            }
        </div >


    )
}