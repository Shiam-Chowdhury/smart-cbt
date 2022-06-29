import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"
import Datatable from "../../components/datatable/Datatable"

export const questionSetColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 330,
  },
  {
    field: "tag",
    headerName: "Tag",
    width: 280,
  },

  
];

//temporary data
export const questionSetRows = [
  {
    id: 1,
    title: "asdasdasd",
    tag: "react express vue",
  },
];

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable 
          title="Add New Question Set"
          columns={questionSetColumns}
          rows={questionSetRows}
          tag="question-sets"
        />
      </div>
    </div>
  )
}

export default List