import React, { useState } from "react";
import { useDispatch, useSelector, } from 
"react-redux";
import { useEffect } from "react";
import { addmessage } from "../utils/chatSlice";
import ChatMsg from "./ChatMsg";
import { generateRandomName } from "../utils/helper";
import {generateRandomText} from "../utils/helper"

const LiveChat = () => {
    const [liveChat,setLiveChat] = useState("")
  const disPatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // api pooling
      //   console.log("API Poling");
      disPatch(
        addmessage({
          name: generateRandomName(),
          message: generateRandomText(10) + "🚀!",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (

    <>
    <div className="w-full h-[500px] ml-2 p-3 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse flex">
        <div>
      {chatMessages.map((c,index) => (
        <ChatMsg key={index} name={c.name} message={c.message} />
      ))}
      </div>
     
    </div>
     <form className="w-full p-2 ml-2 border border-black"onSubmit={(e)=>{
        e.preventDefault()
        disPatch(
            addmessage({
                name : "Pravin",
                message:liveChat
            })
        )
        setLiveChat("")
     }}>
     <input className="bg-gray-100 w-96" type="text"  placeholder="type chat"  value={liveChat} onChange={(e)=>setLiveChat(e.target.value)}/>
     <button className="px-2  mx-4 rounded-md bg-green-100 text-black cursor-pointer">Send</button>
   </form>
   </>
  );

};

export default LiveChat;
