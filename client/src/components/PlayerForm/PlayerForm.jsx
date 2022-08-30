import { useState } from "react";

const PlayerForm = ({ setPlayerArray, playerArray }) => {
  const [name, setName] = useState();
  const [position, setPosition] = useState();
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    setPlayerArray([
      ...playerArray,
      { name: name, position: position, value: value },
    ]);
    setName("");
    setPosition("");
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder={"Player name"}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <select
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="" disabled selected>
            Select Position
          </option>
          <option value="G"> G </option>
          <option value="D"> D </option>
          <option value="M"> M </option>
          <option value="F"> F </option>
        </select>

        <input
          type="number"
          placeholder="Value"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PlayerForm;
