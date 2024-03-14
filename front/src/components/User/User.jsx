import React from "react";
import styles from "./User.module.css";
import ContextMenu from "../ContextMenu/ContextMenu";

const User = ({ name }) => {
  return (
    <div className={styles.main}>
      <div className={styles.userPhoto}>userPhoto</div>
      <div className={styles.container}>
        <p className={styles.userName}>{name}</p>
        <p className={styles.message}>lastMessage</p>
      </div>
    </div>
  );
};

export default React.memo(User);