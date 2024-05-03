import { useCallback, useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import Message from "../Message/Message";
import styles from "./WindowChat.module.css";
import ChatToolBar from "../ChatToolBar/ChatToolBar";
import { ChatContext } from "../context/ChatContextProvider";

export default function WindowChat() {
  const { user } = useContext(UserContext);
  const { chatId } = useContext(ChatContext);

  const [message, setMessage] = useState(null);

  //* {messages, sendMessage, removeMessage} = useChat(chatID)

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = () => {
    //Todo validate message

    if (!message.trim()) return;

    //*sendMessage(message);
  };

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <ChatToolBar />
        {/* <div className={styles.messages}>
          {messages
            .slice()
            .reverse()
            .map((m, i) => (
              <Message
                key={i}
                data={m}
                // onEdit={handleEdit}
                // onDelete={handleDelete}
              />
            ))}
        </div> */}
        <div className={styles.input_mes}>
          <input
            placeholder="your message"
            className={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <button className={styles.send} onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
