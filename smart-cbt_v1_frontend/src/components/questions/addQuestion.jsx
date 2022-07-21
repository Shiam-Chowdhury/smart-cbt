import axios from "axios";
import * as React from "react";
import { useEffect } from "react";

import "./addQuestion.scss";

const New = () => {
  const [details, setDetails] = React.useState("");
  const [technology, setTechnology] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [type, setType] = React.useState("mcq");
  const [position, setPosition] = React.useState("");
  const [rank, setRank] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("easy");
  const [remarks, setRemarks] = React.useState("");
  const [mark, setMark] = React.useState(0);
  // const [comments, setComments] = React.useState("");
  const [related_file, setRelatedFile] = React.useState(null);

  const [saveSuccessAlert, setSaveSuccessAlert] = React.useState(false);

  const [detailsAnswer, setDetailsAnswer] = React.useState("");
  const [codeOutput, setCodeOutput] = React.useState("");
  const [fillGapAnswer, setFillGapAnswer] = React.useState("");

  const [allPositions, setAllPositions] = React.useState([]);
  const [allTechnologies, setAllTechnologies] = React.useState([]);
  const [allTags, setAllTags] = React.useState([]);
  const [allRanks, setAllRanks] = React.useState([]);

  const [mcqOptions, setMcqOptions] = React.useState([
    { option: "" },
    { option: "" },
  ]);

  const [mcqAnswers, setMcqAnswers] = React.useState([{ answer: "" }]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/question/positions`);
        if (res.status === 200) {
          console.log(res.data);
          setAllPositions(res.data.positions);
        }
      } catch (error) {}

      try {
        const res2 = await axios.get(
          `http://localhost:4000/question/technologies`
        );
        if (res2.status === 200) {
          console.log(res2.data);
          setAllTechnologies(res2.data.technologies);
        }
      } catch (error) {}
    };
    getData();
    // setAllTags
  }, []);

  useEffect(() => {
    console.log("te", technology);
    console.log("pp", position);
    console.log("tt", tag);
    console.log("rr", rank);
    console.log("mcq", mcqOptions);
    console.log("mcqa", mcqAnswers);
    // setMcqOptions(mcqOptions);
  }, [position, technology, tag, rank, mcqOptions, mcqAnswers]);

  const onChangeTechnology = (event) => {
    const index = event.target.value;
    setTag("");
    setTechnology(allTechnologies[index].name);
    setAllTags(allTechnologies[index].tags);
    // console.log(event.target.value);
  };

  const onChangeTag = (event) => {
    // console.log(event.target.value);
    setTag(event.target.value);
  };

  const onChangeDetails = (event) => {
    // console.log(event.target.value);
    setDetails(event.target.value);
  };

  const onChangeType = (event) => {
    // console.log(event.target.value);
    setType(event.target.value);
  };

  const onChangeMark = (event) => {
    // console.log(event.target.value);
    setMark(event.target.value);
  };

  const onChangePosition = (event) => {
    const index = event.target.value;
    setRank("");
    setPosition(allPositions[index].name);
    setAllRanks(allPositions[index].ranks);
  };

  const onChangeRank = (event) => {
    // console.log(event.target.value);
    setRank(event.target.value);
  };

  const onChangeDifficulty = (event) => {
    // console.log(event.target.value);
    setDifficulty(event.target.value);
  };

  const onChangeRemarks = (event) => {
    console.log(event.target.value);
    setRemarks(event.target.value);
  };

  // const onChangeRelatedFile = (event) => {
  //   console.log(event.target.files[0]);
  //   setRelatedFile(event.target.files[0]);
  // };

  // const onChangeMCQAnswer = (event) => {
  //   setMcqAnswer(event.target.value);
  // };

  const onChangeDetailsAnswer = (event) => {
    setDetailsAnswer(event.target.value);
  };

  const onChangeCodeOutput = (event) => {
    setCodeOutput(event.target.value);
  };

  const onChangeFillGap = (event) => {
    setFillGapAnswer(event.target.value);
  };

  const addMcqOption = () => {
    if (mcqOptions.length < 6) {
      let temp = [...mcqOptions];
      temp.push({ option: "" });
      setMcqOptions(temp);
    }
  };

  const onChangeOption = (i, event) => {
    let temp = [...mcqOptions];
    temp[i].option = event.target.value;
    setMcqOptions(temp);
  };

  const removeMcqOption = () => {
    if (mcqOptions.length > 2) {
      let temp = [...mcqOptions];
      temp.pop();
      setMcqOptions(temp);
    }
  };

  const addMcqAnswer = () => {
    if (mcqAnswers.length < 2) {
      let temp = [...mcqAnswers];
      temp.push({ answer: "" });
      setMcqAnswers(temp);
    }
  };

  const onChangeAnswer = (i, event) => {
    let temp = [...mcqAnswers];
    temp[i].answer = event.target.value;
    setMcqAnswers(temp);
  };

  const removeMcqAnswer = () => {
    if (mcqAnswers.length > 1) {
      let temp = [...mcqAnswers];
      temp.pop();
      setMcqAnswers(temp);
    }
  };

  const closeSaveSuccessAlert = () => {
    setSaveSuccessAlert(false);
  };

  const handleClick = async () => {
    let answer = {};
    if (type === "mcq") {
      // let option = [];
      // option[0] = mcqOptionOne;
      // option[1] = mcqOptionTwo;
      // option[2] = mcqOptionThree;
      // option[3] = mcqOptionFour;

      answer.options = mcqOptions;
      answer.correct_options = mcqAnswers;
      // console.log(answer);
    } else if (type === "details_answer") {
      answer.correct_answer = detailsAnswer;
    } else if (type === "fill_gaps") {
      answer.correct_answer = fillGapAnswer;
    } else if (type === "code_output") {
      answer.correct_answer = codeOutput;
    }
    try {
      const res = await axios.post(`http://localhost:4000/question/`, {
        details: details,
        technology: technology,
        tag: tag,
        type: type,
        position: position,
        rank: rank,
        difficulty: difficulty,
        remarks: remarks,
        // comments: comments,
        answer: answer,
        count: 0,
        related_file: related_file,
      });

      if (res.status === 200) {
        // history.push(`/question`);
        setSaveSuccessAlert(true);
      }
    } catch (error) {}
  };

  return (
    <div className="new">
      {/* <Sidebar /> */}
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>Add new question</h1>
        </div>
        {saveSuccessAlert && (
          <div className="cus-alert">
            <div className="success-alert">
              Question created successfully!
              <span onClick={closeSaveSuccessAlert}>close</span>
            </div>
          </div>
        )}

        <div className="bottom">
          <div className="right">
            <form>
              <div class="formTextarea">
                <label for="exampleFormControlTextarea1">
                  Question details
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="details"
                  onChange={onChangeDetails}
                  value={details}
                ></textarea>
              </div>

              <div className="formInput">
                <label>technology</label>
                <select
                  name="tag"
                  id="tag"
                  className="select"
                  onChange={onChangeTechnology}
                  // value={technology}
                >
                  <option>select technology</option>
                  {allTechnologies.map((tech, i) => {
                    return <option value={i}>{tech.name}</option>;
                  })}
                </select>
              </div>

              <div className="formInput">
                <label>tag</label>
                <select
                  name="tag"
                  id="tag"
                  className="select"
                  onChange={onChangeTag}
                  value={tag}
                >
                  <option>select tag</option>
                  {allTags.map((tag) => {
                    return <option value={tag}>{tag}</option>;
                  })}
                </select>
              </div>

              <div className="formInput">
                <label>position</label>
                <select
                  name="rank"
                  id="rank"
                  className="select"
                  onChange={onChangePosition}
                >
                  <option>select position</option>
                  {allPositions.map((position, i) => {
                    return <option value={i}>{position.name}</option>;
                  })}
                </select>
              </div>

              <div className="formInput">
                <label>rank</label>
                <select
                  name="rank"
                  id="rank"
                  className="select"
                  onChange={onChangeRank}
                  value={rank}
                >
                  <option>select rank</option>
                  {allRanks.map((rank) => {
                    return <option value={rank}>{rank}</option>;
                  })}
                </select>
              </div>

              <div className="formInput">
                <label>difficulty</label>
                <select
                  name="difficulty"
                  id="difficulty"
                  className="select"
                  onChange={onChangeDifficulty}
                  value={difficulty}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="formInput">
                <label>type</label>
                <select
                  name="type"
                  id="type"
                  className="select"
                  onChange={onChangeType}
                  value={type}
                >
                  <option value="mcq">MCQ</option>
                  <option value="code_output">Code Output</option>
                  <option value="fill_gaps">Fill in the Gaps</option>
                  <option value="details_answer">Details Answer</option>
                </select>
              </div>

              <div className="formInput">
                <label>mark</label>
                <input
                  type="number"
                  placeholder="mark"
                  name="mark"
                  onChange={onChangeMark}
                  value={mark}
                />
              </div>

              <div className="formInput">
                <label>remarks</label>
                <input
                  type="text"
                  placeholder="remarks"
                  name="remarks"
                  onChange={onChangeRemarks}
                  value={remarks}
                />
              </div>

              {/* <div className="formInput">
                <label>comments</label>
                <input
                  type="text"
                  placeholder="comments"
                  name="comments"
                  onChange={onChangeComments}
                  value={comments}
                />
              </div> */}

              {/* <div className="formInput">
                <label>related file</label>
                <input
                  type="file"
                  placeholder="comments"
                  onChange={onChangeRelatedFile}
                  // value={related_file.name}
                />
              </div> */}
            </form>
            {/* <button onClick={handleClick}>Save Question</button> */}
          </div>
        </div>

        {type === "mcq" ? (
          <>
            <div className="top">
              <h1>Answer Part for MCQ</h1>
            </div>
            <div className="row option">
              <div className="col-6 row">
                <div className="col-10 option-form">
                  <label for="option">Options</label>
                  {mcqOptions.map((opt, index) => {
                    return (
                      <input
                        className="form-control mb-2"
                        id="option"
                        rows="3"
                        name="option"
                        onChange={(e) => onChangeOption(index, e)}
                        value={opt.option}
                      ></input>
                    );
                  })}

                  <div className="option-btn" onClick={addMcqOption}>
                    add new option
                  </div>
                  {mcqOptions.length > 2 && (
                    <div className="option-btn rmv" onClick={removeMcqOption}>
                      remove option
                    </div>
                  )}
                </div>
                {/* <div className="col-2">
                  <div className="option-btn">
                    add
                  </div>
                </div>   */}
              </div>
              <div className="col-6 row">
                <div className="col-10">
                  <label for="answer">Answers</label>
                  {mcqAnswers.map((ans, index) => {
                    return (
                      <>
                        {/* <input
                        className="form-control mb-2"
                        id="answer"
                        rows="3"
                        name="answer"
                        onChange={(e) => onChangeAnswer(index, e)}
                        value={ans.answer}
                      ></input> */}

                        <select
                          name="answer"
                          id="answer"
                          className="selectAnswer"
                          onChange={(e) => onChangeAnswer(index, e)}
                          // value={technology}
                        >
                          <option>select answer</option>
                          {mcqOptions.map((opt, i) => {
                            return <option value={i}>{opt.option}</option>;
                          })}
                        </select>
                      </>
                    );
                  })}

                  <div className="option-btn" onClick={addMcqAnswer}>
                    add new Answer
                  </div>

                  {mcqAnswers.length > 1 && (
                    <div className="option-btn rmv" onClick={removeMcqAnswer}>
                      remove answer
                    </div>
                  )}
                </div>
              </div>
              <div className="btn-save" onClick={handleClick}>
                Save Question
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {type === "details_answer" ? (
          <>
            <div className="top">
              <h1>Details Answer Part</h1>
            </div>
            <div className="details-answer">
              <div className="row">
                <div class="col-6">
                  <label for="exampleFormControlTextarea1">
                    Question answer
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="details"
                    onChange={onChangeDetailsAnswer}
                    value={detailsAnswer}
                  ></textarea>
                  <div className="btn-save ml-0" onClick={handleClick}>Save Question</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {type === "code_output" ? (
          <>
            <div className="top">
              <h1>Question answer</h1>
            </div>
            <div className="code-output">
              <div className="row">
                <div className="col-6">
                  <label for="output">Code Output</label>
                  <input
                    className="form-control"
                    id="output"
                    rows="3"
                    name="details"
                    onChange={onChangeCodeOutput}
                    value={codeOutput}
                  ></input>
                  <div className="btn-save ml-0" onClick={handleClick}>Save Question</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {type === "fill_gaps" ? (
          <>
            <div className="top">
              <h1>Question answer</h1>
            </div>
            <div className="fill-gap">
              <div className="row">
                <div className="col-6">
                  <label for="output">Fill gap answer</label>
                  <input
                    className="form-control"
                    id="output"
                    rows="3"
                    name="details"
                    onChange={onChangeFillGap}
                    value={fillGapAnswer}
                  ></input>
                <div className="btn-save ml-0" onClick={handleClick}>Save Question</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default New;
