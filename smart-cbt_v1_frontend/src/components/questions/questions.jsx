import axios from "axios";
import { useEffect, useState } from "react";
import { partialQuestionSets } from "../../partial_data.js";
import "./questions.scss";
import { Link } from "react-router-dom";

const AddQuestionSet = () => {
  // const [data, setData] = useState(rows);
  const [questions, setQuestions] = useState({});
  const [filtered, setfiltered] = useState({});
  const [tag, setTag] = useState("");
  const [selection, setSelection] = useState([]); // const q = [];
  const [selectPartial, setSelectPartial] = useState(false);
  const [selectedPQS, setSelectedPQS] = useState({
    questions: [],
  });
  const [partialQuestions, setPartialQuestions] = useState([]);
  const [qsName, setQsName] = useState("");

  useEffect(() => {
    console.log(partialQuestionSets);
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/question`);
        if (res.status === 200) {
          const temp = res.data.questions.map((ques) => {
            ques.isAdded = false;
            return ques;
          });
          console.log(res);
          setQuestions(temp);
          setfiltered(temp);
          console.log(temp);
          // setLoading(false);
        }
      } catch (error) {}
    };
    getData();

    if (partialQuestionSets) {
      setPartialQuestions(partialQuestionSets[0].questions);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNewFiltered();
  }, [tag]);

  const setNewFiltered = () => {
    const tempQuestions =
      questions.length > 0 &&
      questions[0] !== undefined &&
      questions.filter((question) => question.tag === tag);

    setfiltered(tempQuestions);
  };

  const filterByTag = (event) => {
    if (event.key === "Enter") {
      setTag(event.target.value);
    }
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
              <input
                type="text"
                class="form-control"
                id="inputTag"
                onKeyPress={filterByTag}
              />
            </div>
            <div className="col-5"></div>
            <div className="col-4 mt-5">
                <Link to={`/questions/add`} className="link">
                    Add New Question
                </Link>
            </div>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Details</th>
                <th scope="col">Tag</th>
                <th scope="col">Rank</th>
                <th scope="col">Count</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 &&
                filtered[0] !== undefined &&
                filtered.map((data, i) => {
                  return [
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{data.details}</td>
                      <td>{data.tag}</td>
                      <td>{data.rank}</td>
                      <td>{data.count}</td>
                      <td>
                        <div className="cus-btn details"> view</div>
                        <div className="cus-btn edit"> Edit</div>
                        <div className="cus-btn delete"> Delete</div>
                        {/* <div className="cus-btn details">Details</div> */}
                      </td>
                    </tr>,
                  ];
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddQuestionSet;
