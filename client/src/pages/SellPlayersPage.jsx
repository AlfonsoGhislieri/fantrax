import React, { useState } from "react";
import PlayerForm from "../components/PlayerForm/PlayerForm";

const SellPlayersPage = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const [playerArray, setPlayerArray] = useState([]);

  return (
    <div>
      {/* <form onSubmit={console.log("test")}>
        <label>
          User:
          <select
            value={user}
            onChange={(event) => setUser(event.target.value)}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
        </label>

        <input type="submit" value="Submit" />
      </form> */}

      <PlayerForm setPlayerArray={setPlayerArray} playerArray={playerArray} />
    </div>
  );
};

export default SellPlayersPage;
