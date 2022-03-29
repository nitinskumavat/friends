import { useState } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList/FriendsList";
import { data } from "./data";

function App() {
  const [friends, setFriends] = useState(data);

  return (
    <div className="main-container">
      <div className="form-list-container">
        <FriendsList friends={friends} setFriends={setFriends} />
      </div>
    </div>
  );
}

export default App;
