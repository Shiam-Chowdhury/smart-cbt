import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import AddQuestionSet from "../../components/questionSet/addQuestionSet";

const addQuestion = ({ inputs, title }) => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <AddQuestionSet />
      </div>
    </div>
  );
};

export default addQuestion;
