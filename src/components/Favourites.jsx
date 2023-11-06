import { useSelector, useDispatch } from "react-redux";

const Favourites = function () {
  const favourites = useSelector((state) => state.favourites.list);
  localStorage.setItem(
    "favourites",
    JSON.stringify(useSelector((state) => state))
  );
  const dispatch = useDispatch();
  return (
    <ul>
      {favourites.map((favourite, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: index });
            }}
          >
            {favourite}
          </li>
        );
      })}
      {favourites.length > 0 && (
        <h4>
          se clicchi sul nome si elimina perchè non avevo voglia di fare dei
          bottoni :)
        </h4>
      )}
    </ul>
  );
};

export default Favourites;
