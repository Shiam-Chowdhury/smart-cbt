import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddQuestion from "../../components/questions/addQuestion";

const addQuestion = ({ inputs, title }) => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <AddQuestion />
      </div>
    </div>
  );
};

export default addQuestion;
