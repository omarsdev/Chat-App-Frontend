import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import useSocket from "./hooks/socketConnect";
import { fetchChats } from "../../store/actions/chat";
import FriendList from "./components/FriendList/FriendList";
import Messenger from "./components/Messenger/Messenger";

import "./Chat.css";

const Chat = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReduces.user);

  useSocket(user, dispatch);

  // useEffect(() => {
  //   dispatch(fetchChats())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, [dispatch]);

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};

export default Chat;
