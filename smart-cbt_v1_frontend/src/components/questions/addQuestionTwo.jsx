import axios from "axios";
import * as React from "react";

import "./addQuestion.scss";

const New = () => {
  const [details, setDetails] = React.useState("");
  const [tag, setTag] = React.useState("react");
  const [type, setType] = React.useState("mcq");
  const [rank, setRank] = React.useState("4C");
  const [difficulty, setDifficulty] = React.useState("easy");
  const [remarks, setRemarks] = React.useState("");
  // const [comments, setComments] = React.useState("");
  const [related_file, setRelatedFile] = React.useState(null);
  const [mcqAnswer, setMcqAnswer] = React.useState("");
  const [mcqOptionOne, setMcqOptionOne] = React.useState("");
  const [mcqOptionTwo, setMcqOptionTwo] = React.useState("");
  const [mcqOptionThree, setMcqOptionThree] = React.useState("");
  const [mcqOptionFour, setMcqOptionFour] = React.useState("");
  const [detailsAnswer, setDetailsAnswer] = React.useState("");
  const [codeOutput, setCodeOutput] = React.useState("");
  const [fillGapAnswer, setFillGapAnswer] = React.useState("");

  const onChangeTag = (event) => {
    console.log(event.target.value);
    setTag(event.target.value);
  };

  const onChangeDetails = (event) => {
    console.log(event.target.value);
    setDetails(event.target.value);
  };

  const onChangeType = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  const onChangeRank = (event) => {
    console.log(event.target.value);
    setRank(event.target.value);
  };

  const onChangeDifficulty = (event) => {
    console.log(event.target.value);
    setDifficulty(event.target.value);
  };

  const onChangeRemarks = (event) => {
    console.log(event.target.value);
    setRemarks(event.target.value);
  };

  // const onChangeComments = (event) => {
  //   console.log(event.target.value);
  //   setComments(event.target.value);
  // };

  // const onChangeRelatedFile = (event) => {
  //   console.log(event.target.files[0]);
  //   setRelatedFile(event.target.files[0]);
  // };

  const onChangeOptionOne = (event) => {
    setMcqOptionOne(event.target.value);
  }

  const onChangeOptionTwo = (event) => {
    setMcqOptionTwo(event.target.value);
  }

  const onChangeOptionThree = (event) => {
    setMcqOptionThree(event.target.value);
  }

  const onChangeOptionFour = (event) => {
    setMcqOptionFour(event.target.value);
  }

  const onChangeMCQAnswer = (event) => {
    setMcqAnswer(event.target.value);
  }

  const onChangeDetailsAnswer = (event) => {
    setDetailsAnswer(event.target.value);
  }

  const onChangeCodeOutput = (event) => {
    setCodeOutput(event.target.value);
  }

  const onChangeFillGap = (event) => {
    setFillGapAnswer(event.target.value);
  }

  const handleClick = async () => {
    let answer = {};
    if(type === 'mcq'){
      let option = [];
      option[0] = mcqOptionOne;
      option[1] = mcqOptionTwo;
      option[2] = mcqOptionThree;
      option[3] = mcqOptionFour;

      answer.options = option;
      answer.correct_option = mcqAnswer;
      console.log(answer);
    }else if(type === 'details_answer'){
      answer.correct_answer = detailsAnswer
    }else if(type === 'fill_gaps'){
      answer.correct_answer = fillGapAnswer
    }else if(type === 'code_output'){
      answer.correct_answer = codeOutput
    }
    try {
      const res = await axios.post(`http://localhost:4000/question/`, {
        details: details,
        tag: tag,
        type: type,
        rank: rank,
        difficulty: difficulty,
        remarks: remarks,
        // comments: comments,
        answer: answer,
        count: 0,
        related_file: related_file,
      });

      // if (res.status === 200) {
      // 	history.push(`/question`);
      // }
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
                <label>tag</label>
                <select
                  name="tag"
                  id="tag"
                  className="select"
                  onChange={onChangeTag}
                  value={tag}
                >
                  <option value="react">React</option>
                  <option value="node">Node</option>
                  <option value="express">Express</option>
                  <option value="mongodb">Mongodb</option>
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
                  <option value="4C">4C</option>
                  <option value="4A">4A</option>
                  <option value="5C">5C</option>
                  <option value="5A">5A</option>
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

        
        { type === 'mcq' ? (
          <>
            <div className="top">
              <h1>Answer Part for MCQ</h1>
            </div>
            <div className="bottom">
              <div className="right">
                <form>
                  <div class="formInput">
                    <label for="option">
                      Option 1
                    </label>
                    <input
                      className="form-control"
                      id="option"
                      rows="3"
                      name="details"
                      onChange={onChangeOptionOne}
                      value={mcqOptionOne}
                    ></input>
                  </div>

                  <div class="formInput">
                    <label for="option">
                      Option 2
                    </label>
                    <input
                      className="form-control"
                      id="option"
                      rows="3"
                      name="details"
                      onChange={onChangeOptionTwo}
                      value={mcqOptionTwo}
                    ></input>
                  </div>

                  <div class="formInput">
                    <label for="option">
                      Option 3
                    </label>
                    <input
                      className="form-control"
                      id="option"
                      rows="3"
                      name="details"
                      onChange={onChangeOptionThree}
                      value={mcqOptionThree}
                    ></input>
                  </div>

                  <div class="formInput">
                    <label for="option">
                      Option 4
                    </label>
                    <input
                      className="form-control"
                      id="option"
                      rows="3"
                      name="details"
                      onChange={onChangeOptionFour}
                      value={mcqOptionFour}
                    ></input>
                  </div>

                  <div class="formInput">
                    <label for="option">
                      Correct answer
                    </label>
                    <input
                      className="form-control"
                      id="option"
                      rows="3"
                      name="details"
                      onChange={onChangeMCQAnswer}
                      value={mcqAnswer}
                    ></input>
                  </div>
                </form>
                <button onClick={handleClick}>Save Question</button>
              </div>
            </div>
          </>
        ) : (<></>) }

      { type === 'details_answer' ? (
        <>
          <div className="top">
          <h1>Details Answer Part</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div class="formTextarea">
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
                </div> 
              </form>
              <button onClick={handleClick}>Save Question</button>
            </div>
          </div> 
        </>
      ):(<></>)}

      { type === 'code_output' ? (
        <>
          <div className="top">
          <h1>Question answer</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div class="formInput">
                  <label for="output">
                    Code Output
                  </label>
                  <input
                    className="form-control"
                    id="output"
                    rows="3"
                    name="details"
                    onChange={onChangeCodeOutput}
                    value={codeOutput}
                  ></input>
                </div> 
              </form>
              <button onClick={handleClick}>Save Question</button>
            </div>
          </div> 
        </>
      ):(<></>)}

      { type === 'fill_gaps' ? (
        <>
          <div className="top">
          <h1>Question answer</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form>
                <div class="formInput">
                  <label for="output">
                    Fill gap answer
                  </label>
                  <input
                    className="form-control"
                    id="output"
                    rows="3"
                    name="details"
                    onChange={onChangeFillGap}
                    value={fillGapAnswer}
                  ></input>
                </div> 
              </form>
              <button onClick={handleClick}>Save Question</button>
            </div>
          </div> 
        </>
      ):(<></>)}

      
      </div>
    </div>
  );
};

export default New;
