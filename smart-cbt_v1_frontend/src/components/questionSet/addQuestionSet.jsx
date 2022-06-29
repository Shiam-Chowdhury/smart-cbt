import "./addQuestionSet.scss";
// import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";

const AddQuestionSet = () => {
  const [questions, setQuestions] = useState([]);
  const q = [];
  const addQuestion = () => {
    const ques = {
      is_from_bank: true,
      question: {
        details: "asad",
        tag: "aasdasd",
      },
      mark: 20,
    };

    let temp = [...questions];
    temp.push(ques);
    setQuestions(temp);
    console.log(questions);
  };

  return (
    <>
      <div className="row ml-1">
        <div className="questions">
          <div className="header">
            <h3>List of questions</h3>
          </div>
          <div className="filter row">
            <div className="col-3">
              <label for="inputTag" class="col-form-label">
                Filter by Tag
              </label>
              <input type="text" class="form-control" id="inputTag" />
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">details</th>
                <th scope="col">tag</th>
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark asdasdadas asdfaf</td>
                <td>react</td>
                <td>
                  <button
                    type="button"
                    class="cus-btn add"
                    onClick={addQuestion}
                  >
                    Add
                  </button>
                  <button type="button" class="cus-btn remove">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="question-set">
        <div className="header">
          <h3>Create a Question Set</h3>
        </div>
        <div className="create">
          <div className="row">
            <div className="col-6">
              <label for="inputTag" class="col-form-label">
                Question Set Title {questions.length}
              </label>
              <input type="text" class="form-control" id="inputTag" />
            </div>
          </div>
          <div className="row">
            <div className="questions"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestionSet;
