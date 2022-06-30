import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import "./addQuestionSet.scss";
import "./datatable.scss";

const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "details",
    headerName: "Details",
    width: 230,
  },
  {
    field: "tag",
    headerName: "Tag",
    width: 230,
  },

  {
    field: "rank",
    headerName: "Rank",
    width: 100,
  },

  {
    field: "count",
    headerName: "Count",
    width: 160,
  },
];

//temporary data
const rows = [
  {
    id: 1,
    details: "asdasdasd",
    tag: "react",
    rank: "4A",
    count: 0,
  },
];

const AddQuestionSet = () => {
  const [data, setData] = useState(rows);
  const [questions, setQuestions] = useState({});
  const [filtered, setfiltered] = useState({});
  const [tag, setTag] = useState("");
  const q = [];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/question`);
        if (res.status === 200) {
          console.log(res.data);
          setQuestions(res.data.questions);
          setfiltered(res.data.questions);
          // setLoading(false);
        }
      } catch (error) {}
    };
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let tempQuestions = questions.filter((question) => {
      return question.tag === tag;
    });
    setfiltered(tempQuestions);
  }, [tag]);

  const filterByTag = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setTag(event.target.value);
    }
  };

  const setDataAfterFilter = () => {
    let tempQuestions = questions.filter((question) => {
      return question.tag === tag;
    });
    setfiltered(tempQuestions);
  };

  const addQuestion = () => {
    const ques = {
      is_from_bank: true,
      question: {
        details: "asad",
        tag: "aasdasd",
      },
      mark: 20,
    };

    // let temp = [...questions];
    // temp.push(ques);
    // setQuestions(temp);
    // console.log(questions);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <div className="cus-btn add" onClick={addQuestion}>
              Add
            </div>
            <div className="cus-btn remove">Remove</div>
          </div>
        );
      },
    },
  ];

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

          <DataGrid
            className="datagrid"
            rows={filtered}
            columns={columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
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
