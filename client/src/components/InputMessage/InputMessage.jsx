import React, { useContext, useState } from "react";
import styles from "./InputMessage.module.css";
import { UserContext } from "../context/UserContextProvider";

const InputMessage = ({ message, onMessageChange, onSend }) => {
  //TODO эмоджи, файлы , фото ,  видео, гс
  // может даже тут отправлять на сервер сообщение, но хз

  const { id } = useContext(UserContext);

  //const [message, setMessage] = useState("");

  //TODO найти что нибудь поприличнее этого , если есть конечно
  //Да нормтема че вы пацаны(((
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSend = () => {
    //Todo validate message

    if (!message.text.trim()) return;

    if ("time" in message) {
    } else {
      const newMessage = {
        text: message.text.trim(),
        time: Date.now(),
        username: id,
      };
      onSend(newMessage);
    }
    onMessageChange({ text: "" });
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="your message"
        className={styles.input}
        value={message.text}
        onChange={(e) =>
          onMessageChange((c) => ({ ...c, text: e.target.value }))
        }
        onKeyUp={handleKeyPress}
      />
      <button className={styles.send} onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default React.memo(InputMessage);
