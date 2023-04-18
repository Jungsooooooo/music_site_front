import "../../css/mainView.css";
import { useSelector } from "react-redux";

const MainView = () => {
  const user = useSelector((state) => {
    console.log(state);
    return state.userSession;
  });

  console.log({ user });

  return (
    <>
      <div className="topColor"></div>
      <div className="mainHeader">
        <a id="goToReco">음악추천</a>
      </div>
    </>
  );
};

export default MainView;
