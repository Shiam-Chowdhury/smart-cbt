import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

export const questionColumns = [
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
export const questionRows = [
  {
    id: 1,
    details: "asdasdasd",
    tag: "react",
    rank: "4A",
    count: 0,
  },
];

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          title="Add New Question"
          columns={questionColumns}
          rows={questionRows}
          tag="questions"
        />
      </div>
    </div>
  );
};

export default List;
