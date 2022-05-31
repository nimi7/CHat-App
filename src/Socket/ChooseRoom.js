import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';



export default function ChooseRoom({ socket, Setuser }) {



    const JoinAroom = (e) => {
        e.preventDefault();
        Setuser({ userName: e.target.userName.value, RoomID: e.target.RoomID.value })
        socket.emit('join_room', e.target.RoomID.value)
        socket.emit('User_Joined',{name:e.target.userName.value , RoomID :e.target.RoomID.value})
        
    }
    return (



        <div class="relative  min-h-screen flex flex-col sm:justify-center items-center  ">
            <div class="relative mt-48 md:mt-14 sm:max-w-sm w-full">
                <div class="card  bg-green-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div class="card bg-green-600 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div class="relative w-full rounded-3xl  px-8 py-14 bg-gray-100 shadow-md">
                    <label for="" class="block text-4xl mt-24 text-sm text-green-600 text-center font-semibold">
                        Creat A Room
                    </label>
                    <form onSubmit={JoinAroom} class="mt-10">

                        <div>
                            <input type="text" name='userName' placeholder='userName' class="text-center mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                        </div>

                        <div class="mt-7">
                            <input type="text" name='RoomID' placeholder='RoomID' class="text-center mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                        </div>







                        <div class="mt-7">
                            <button type='Submit' class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Join A Room
                            </button>
                        </div>

{/* 

                        <div class="flex mt-7 justify-center w-full">
                            <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                Facebook
                            </button>

                            <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                Google
                            </button>
                        </div> */}


                    </form>
                </div>
            </div>
        </div>



    )
}