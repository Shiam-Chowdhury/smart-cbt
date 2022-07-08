import axios from "axios";
import { useEffect, useState } from "react";
import { partialQuestionSets } from "../../partial_data.js";
import "./addQuestionSet.scss";
import "./datatable.scss";

const AddQuestionSet = () => {
  // const [data, setData] = useState(rows);
  const [questions, setQuestions] = useState({});
  const [filtered, setfiltered] = useState({});
  const [tag, setTag] = useState("");
  const [selection, setSelection] = useState([]); // const q = [];
  const [selectPartial, setSelectPartial] = useState(false);
  const [selectedPQS, setSelectedPQS] = useState({
    questions: []
  });
  const [partialQuestions, setPartialQuestions] = useState([]);

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

  useEffect(() => {
    console.log("ssss", selection);
    setSelection(selection);
  }, [selection]);

  useEffect(() => {
    console.log(selectedPQS)
    setPartialQuestions(selectedPQS.questions);
  }, [selectedPQS]);

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

  const addQuestion = (data) => {
    const modifiedQuestion = {
      is_from_bank: true,
      question: data,
      mark: null,
    };

    let temp = [...selection];
    temp.push(modifiedQuestion);
    setSelection(temp);

    questions.map((question) => {
      if (question._id === data._id) {
        question.isAdded = true;
      }
    });

    filtered.map((question) => {
      if (question._id === data._id) {
        question.isAdded = true;
      }
    });
  };

  const selectPartialSet = (set) => {
    // console.log(set);
    setSelectedPQS(set);
    
  };

  const removeQuestionFromList = (data, index) => {
    console.log(data);
    setSelection(selection.splice(index + 1, 1));

    questions.map((question) => {
      if (question._id === data.question._id) {
        question.isAdded = false;
      }
    });

    filtered.map((question) => {
      if (question._id === data.question._id) {
        question.isAdded = false;
      }
    });
  };

  const setQuestionMark = (i, event) => {
    console.log(i);
    if (event.key === "Enter") {
      selection[i].mark = event.target.value;
      console.log("ssss", selection);
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
                        {!data.isAdded && (
                          <div
                            className="cus-btn add"
                            onClick={() => addQuestion(data)}
                          >
                            Add
                          </div>
                        )}

                        {/* <div className="cus-btn details">Details</div> */}
                      </td>
                    </tr>,
                  ];
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="question-set">
        <div className="header">
          <h3>Create a Question Set</h3>
        </div>
        <div className="row">
          <div className="btn-qs add-btn">Add new question</div>
          <div
            className="btn-qs partial-btn"
            onClick={() => setSelectPartial(!selectPartial)}
          >
            select from partial set
          </div>
        </div>
        {selectPartial && [
          <div className="row partial-set">
            <div className="col-4 sets">
              <h5 className="mt-2">Partial Question Sets</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tag</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {partialQuestionSets.length > 0 &&
                    partialQuestionSets[0] !== undefined &&
                    partialQuestionSets.map((set, i) => {
                      return [
                        <tr>
                          <th scope="row">{1+i}</th>
                          <td>{set.name}</td>
                          <td>{set.questions[0].question.tag}</td>
                          <td>
                            <div
                              className="qs-btn"
                              onClick={() => selectPartialSet(set)}
                            >
                              Select
                            </div>
                          </td>
                        </tr>,
                      ];
                    })}
                </tbody>
              </table>
            </div>
            <div className="col-6 pqs-questions">
              <h5 className="mt-2">Questions</h5>
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
                  {partialQuestions.length > 0 &&
                    partialQuestions[0] !== undefined &&
                    partialQuestions.map((data, i) => {
                      return [
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td>{data.question.details}</td>
                          <td>{data.question.tag}</td>
                          <td>{data.question.rank}</td>
                          <td>{data.question.count}</td>
                          <td>
                            <div className="qs-btn">Select</div>
                          </td>
                        </tr>,
                      ];
                    })}
                </tbody>
              </table>
            </div>
          </div>,
        ]}
        <div className="create">
          <div className="row">
            <div className="col-6">
              <label for="inputTag" class="col-form-label">
                Question Set Title
              </label>
              <input type="text" class="form-control" id="inputTag" />
            </div>
          </div>
          <div className="row">
            <div className="questions">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                    <th scope="col">Tag</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Difficulty</th>
                    <th scope="col">Mark</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selection.length > 0 &&
                    selection[0] !== undefined &&
                    selection.map((data, i) => {
                      return [
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td>{data.question.details}</td>
                          <td>{data.question.tag}</td>
                          <td>{data.question.rank}</td>
                          <td>{data.question.difficulty}</td>
                          <td>
                            {data.mark
                              ? data.mark
                              : [
                                  <input
                                    type="text"
                                    className="markInput"
                                    onKeyPress={(e) => setQuestionMark(i, e)}
                                  />,
                                ]}
                          </td>
                          <td>
                            <div
                              className="cus-btn remove"
                              onClick={() => removeQuestionFromList(data, i)}
                            >
                              Remove
                            </div>

                            {/* <div className="cus-btn details">Details</div> */}
                          </td>
                        </tr>,
                      ];
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestionSet;
