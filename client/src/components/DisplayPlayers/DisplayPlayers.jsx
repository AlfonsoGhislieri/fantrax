import instance from "../../config/axios/axiosConfig";

const DisplayPlayers = ({ playerArray }) => {
  // const result = await instance.get("/test");
  // console.log(result.data);
  return (
    <div>
      {playerArray &&
        playerArray.map((player) => {
          return (
            <li key={player.name}>
              {player.name}, {player.position}, ${player.value}
            </li>
          );
        })}
    </div>
  );
};

export default DisplayPlayers;
