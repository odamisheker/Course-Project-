import styles from "./ToolBar.module.css";
import settingsIcon from "../../../public/settings.png";
import axios from "axios";

const searchFilter = (arr, term) =>
  arr.filter((item) =>
    item.trim().toLowerCase().includes(term.trim().toLowerCase())
  );

export default function ToolBar({ onUsersChange, onOpen }) {
  //TODO button "Settings" and photo profile

  const handleSearch = (e) => {
    if (e.target.value == "") return;
    axios
      .post("http://localhost:8000/search/get", { searchInput: e.target.value })
      .then((r) => {
        // console.log(r.data);
        onUsersChange(r.data);
      })
      .catch((e) => console.log(e.response.data.message));
  };

  return (
    <div className={styles.main}>
      <p>tvoe ebalo</p>
      <p className={styles.settings} onClick={() => onOpen(true)}>
        . . .
      </p>
      {/* <img
        className={styles.settings}
        onClick={() => onOpen(true)}
        src={settingsIcon}
        alt="settings"
      /> */}
      <input
        onChange={handleSearch}
        //onFocus={handleSearch}
        placeholder="Search"
        className={styles.input}
      />
    </div>
  );
}
