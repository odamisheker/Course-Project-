import WindowChat from "../../components/WindowChat/WindowChat";
import styles from "./Chat.module.css";

export default function Chat() {
  /*
    TODO: 
        load chats
        toolbar
        another component for person from chats
    */

  return (
    <div className={styles.main}>
      <div className={styles.chats}>chats</div>
      <WindowChat />
    </div>
  );
}