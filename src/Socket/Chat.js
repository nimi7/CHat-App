import React, { useCallback, useEffect, useState } from 'react'
import ScrollToBottem from 'react-scroll-to-bottom'
import { ToastContainer, toast } from 'react-toastify';


export default function Chating({ socket, user }) {


    const [UserJoin, SetUserJoin] = useState('asdasdsad');
    const [Messages, SetMessages] = useState([]);

    useEffect(() => {
        socket.on('recive_message', (data) => {
            SetMessages((prev) => [...prev, data])
        })
        socket.on('disconnect_user', () => {
            toast(`🦄 ${user.userName} Have left your room`)
        })
    }, [socket])
    useEffect(() => {
        socket.on('User_Joined', (user) => {
            console.log(user, 'connected')
            toast(`🦄 ${user} Have joined your room`)

        })

    }, [user])

    const sendMessage = async (e) => {
        e.preventDefault();
        if (e.target.message.value !== "") {
            var date = new Date();
            const MessageData = {

                user: user.userName,
                room: user.RoomID,
                message: e.target.message.value,
                time: date.getHours() + ':' + date.getMinutes(),
            }
            await socket.emit('send_message', MessageData)

        }
        e.target.message.value = '';
    }

    return (
        <div className='Chat_room'>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
            </div>
            <div className='grid place-content-center bg-green-300 h-screen '>
            <span className='text-sm text-purple-600'> <strong> Room Name : {user.RoomID}</strong> </span> 
                <div className='w-96'>


                    <div class="flex  justify-between items-center text-white p-3 bg-green-500 border shadow-lg w-full">
                
                        <div class="flex items-center">

                            <img src="https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png" alt="picture" class="rounded-full w-7 h-7 mr-1" />
                            <h2 class="font-semibold text-xl tracking-wider">{user.userName}</h2>
                        </div>
                        <div class="flex items-center justify-center">
                            <small class="mr-1">online</small>
                            <div class="rounded-full w-2 h-2 bg-white"></div>
                        </div>
                    </div>
                    <div class="flex flex-col bg-gray-200  h-96 ">
                        <ScrollToBottem className='message-container'>


                            {Messages.map((message, indx) => {
                                if (message.user === user.userName) {
                                    return <div>


                                        <div key={indx} class="message bg-green-500 w-fit w-48   self-end float-left text-white p-1  my-1 rounded-md shadow ml-1">
                                            <div className='block text-xs text-red-500'>{message.user}</div>
                                            {message.message} <span className='text-xs mt-5 float-right'>{message.time}</span>


                                        </div>

                                    </div>

                                } else {
                                    return <div key={indx} class="chat bg-white w-fit  w-48 text-gray-700 float-right  p-1 self-start my-1 rounded-md shadow mr-1">
                                        <div className='block  text-xs text-blue-500'>{message.user}</div>
                                        {message.message}<span className='block text-xs mt-5  float-right'>{message.time}</span>

                                    </div>
                                }
                            })}

                        </ScrollToBottem>

                    </div>
                    <div class="relative bg-white w-full">
                        <form onSubmit={sendMessage}>
                            <input type="text"
                                placeholder="Enter A massage"
                                name="message"
                                class="pl-4 pr-16 py-2 border border-green-500 focus:outline-none w-full"
                                onKeyPress={(event) => {
                                    event.key === 'enter' && sendMessage();
                                }}
                            />
                            <button type='Submit' class="absolute right-0 bottom-0 text-green-600 bg-white  hover:text-green-500 m-1 px-3 py-1 w-auto transistion-color duration-100 focus:outline-none">Send</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

