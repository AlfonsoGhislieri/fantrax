const DisplayPlayers = ({ playerArray }) => {
  return (
    <div>
      {playerArray &&
        playerArray.map((player) => {
          return (
            <li>
              {player.name}, {player.position}, {player.value}
            </li>
          );
        })}
    </div>
  );
};

export default DisplayPlayers;
