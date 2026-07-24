import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  mockChatNames,
  mockChatMessages,
  randomChatItem,
} from "../mockData/mockChatMessages";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: randomChatItem(mockChatNames),
          message: randomChatItem(mockChatMessages),
        }),
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 w-full h-[400px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="border p-2 ml-2 border-black w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mahesh patil",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-72 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-4 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
