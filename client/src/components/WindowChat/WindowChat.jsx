import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import Message from "../Message/Message";
import styles from "./WindowChat.module.css";
import InputMessage from "../InputMessage/InputMessage";
import ChatToolBar from "../ChatToolBar/ChatToolBar";
import { ChatContext } from "../context/ChatContextProvider";
import chats from "../../DB";

export default function WindowChat() {
  const { id } = useContext(UserContext);
  const { chatId } = useContext(ChatContext);
  // const [errors, setErrors] = useState(null);
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState({ text: "" });

  useEffect(() => {
    if (chatId != null) {
      setMessages(chats.find((k) => k.id == chatId).messages);
    }
  }, [chatId]);

  //console.log(messages);

  /*
  TODO: load messanges 
        props(id собеседника или же сразу сообщения)
        хранить сообщение как объект(для хранения текста, времени и тд)
  */

  const handleEdit = (data) => {
    setMessage(data);
  };

  const handleDelete = () => {};

  const handleSend = useCallback((newMessage) => {
    //  post
    //  output on screen

    setMessages((curMessanges) => [...curMessanges, newMessage]);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.chat}>
          <ChatToolBar />
          {chatId && (
            <div className={styles.messages}>
              {messages.map((m, i) => (
                <Message
                  key={i}
                  data={m}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
          {chatId && (
            <InputMessage
              message={message}
              onMessageChange={setMessage}
              onSend={handleSend}
            />
          )}
        </div>
      </div>
    </div>
  );
}
