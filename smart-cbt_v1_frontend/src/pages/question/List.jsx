import Sidebar from "../../components/sidebar/Sidebar";
import Questions from "../../components/questions/questions";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Questions />
      </div>
    </div>
  );
};

export default List;
