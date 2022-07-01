import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./addQuestionSet.scss";
import "./datatable.scss";

const AddQuestionSet = () => {
  // const [data, setData] = useState(rows);
  const [questions, setQuestions] = useState({});
  const [filtered, setfiltered] = useState({});
  const [tag, setTag] = useState("");
  const [selection, setSelection] = useState([]); // const q = [];

  useEffect(() => {
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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNewFiltered();
  }, [tag]);

  useEffect(() => {
    console.log('ssss',selection);
    setSelection(selection)

  }, [selection]);

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

    questions.map(question => {
      if(question._id === data._id){
        question.isAdded = true;
      }
    })

    filtered.map(question => {
      if(question._id === data._id){
        question.isAdded = true;
      }
    })

  };

  const removeQuestionFromList = (data, index) => {
    console.log(data)
    setSelection(selection.splice(index+1, 1))

    questions.map(question => {
      if(question._id === data.question._id){
        question.isAdded = false;
      }
    })

    filtered.map(question => {
      if(question._id === data.question._id){
        question.isAdded = false;
      }
    })
  }

  const setQuestionMark = (i, event) => {
    console.log(i)
    if (event.key === "Enter") {
      selection[i].mark = event.target.value
      console.log('ssss', selection);
    }

    
  }

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
              {filtered.length > 0 && filtered[0] !== undefined && filtered.map((data, i) => {
                return [
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{data.details}</td>
                    <td>{data.tag}</td>
                    <td>{data.rank}</td>
                    <td>{data.count}</td>
                    <td>{!data.isAdded &&
                      <div className="cus-btn add" onClick={() => addQuestion(data)}>
                        Add
                      </div>
                    }
                      
                      {/* <div className="cus-btn details">Details</div> */}
                    </td>
                  </tr>
                ]
              })}
            </tbody>
          </table>

          {/* <DataGrid
            className="datagrid"
            rows={filtered}
            columns={columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
            onSelectionChange={(rows) => {
              setSelection(rows);
            }}
          /> */}
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
              {selection.length > 0 && selection[0] !== undefined && selection.map((data, i) => {
                return [
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{data.question.details}</td>
                    <td>{data.question.tag}</td>
                    <td>{data.question.rank}</td>
                    <td>{data.question.difficulty}</td>
                    <td>{data.mark ? data.mark : 
                      [
                        <input type="text" className="markInput" onKeyPress={(e) => setQuestionMark(i, e)}/>
                      ]
                    }</td>
                    <td>
                      <div className="cus-btn remove" onClick={() => removeQuestionFromList(data, i)}>
                        Remove
                      </div>
                    
                      
                      {/* <div className="cus-btn details">Details</div> */}
                    </td>
                  </tr>
                ]
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
