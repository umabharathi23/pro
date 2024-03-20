// import React,{useEffect, useState} from "react"
// import { MDBDataTable } from "mdbreact"
// import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

// import { connect } from "react-redux";

// //Import Action to copy breadcrumb items from local state to redux state
// import { setBreadcrumbItems } from "../../store/actions";
// import axios from "axios";

// import "./datatables.scss"

// const DatatableTables = (props) => {
//   document.title = "Data Table | Lexa - Responsive Bootstrap 5 Admin Dashboard";
//   const [datas, setDatas] = useState([])
  
//   const breadcrumbItems = [
//     { title: "Students", link: "#" },
//     { title: "Tasks List", link: "#" },
//     // { title: "Data Tables", link: "#" },
//   ]

//   useEffect(() => {
//     props.setBreadcrumbItems('Tasks List', breadcrumbItems)
//     axios.get('http://localhost:2222/gettasks').then((res)=>{
//     console.log(res.data)  
//     setDatas(res.data)
//     })
//   },[])

//   const data = {
//     columns: [
//       {
//         label: "Topic Name",
//         field: "topic",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "",
//         field: "topic",
//         sort: "asc",
//         width: 270,
//       },
//       {
//         label: "description",
//         field: "description",
//         sort: "asc",
//         width: 200,
//       },
//       {
//         label: "Batch",
//         field: "batch",
//         sort: "asc",
//         width: 100,
//       },
//       // {
//       //   label: "Start date",
//       //   field: "date",
//       //   sort: "asc",
//       //   width: 150,
//       // },
//       // {
//       //   label: "Actions",
//       //   field: "salary",
//       //   sort: "asc",
//       //   width: 100,
//       // },
//     ],
//     rows: datas,
//   }

//   return (
//     <React.Fragment>

//           <Row>
//             <Col className="col-12">
//               <Card>
//                 <CardBody>
//                   <CardTitle className="h4">Tasks List </CardTitle>
                 
//                   <MDBDataTable responsive bordered data={data} noBottomColumns />
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

          
        
//     </React.Fragment>
//   )
// }

// export default connect(null, { setBreadcrumbItems })(DatatableTables);
import React,{useEffect, useState} from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle,Button } from "reactstrap"
import {Link} from "react-router-dom"
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import axios from "axios";

import "./datatables.scss"
// const axiosAPI =axios.create()
const DatatableTables = (props) => {
  document.title = "Data Table | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  const [datas, setDatas] = useState([])
  
  const breadcrumbItems = [
    { title: "Tests", link: "#" },
    { title: "Tests List", link: "#" },
    // { title: "Data Tables", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Tests List', breadcrumbItems)
    axios.get('http://localhost:2222/gettests').then((res)=>{
    console.log(res.data)  
    setDatas(res.data)
    })
  },[])
  const handleDelete = (id) => {
    axios.delete(`http://localhost:2222/deleteevent/${id}`).then((res) => {
        console.log(res);
        alert("Data deleted successfully");
        setDatas(datas.filter(data1 => data1._id !== id));
    }).catch(error => {
        console.error('Error deleting event:', error);
        alert("Failed to delete event");
      });
    };

  const data = {
    columns: [
      {
        label: "Student Name",
        field: "studentname",
        sort: "asc",
        width: 150,
      },
      {
        label: "Marks",
        field: "marks",
        sort: "asc",
        width: 270,
      },
      
    ],
    rows: datas.map((data1)=>({
      ...data1,
      edit:(
           <td>
            <Link to={`/editform1/${data1._id}`}>
            <Button style={{ background: "#3b5de7", margin: "2px", width: '50px', padding: "2px 4px", borderRadius: "5px" }}>
                            Edit
            </Button>
            </Link>
           </td>
      ),
      delete: (
        <Button onClick={() => handleDelete(data1._id)} style={{ background: "#ff715b", margin: "2px", padding: "2px 4px", borderRadius: "5px" }}>
            Delete
        </Button>
            ),
    }))
    
  }


  return (
    <React.Fragment>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Tasks List </CardTitle>
                 
                  <MDBDataTable responsive bordered data={data} noBottomColumns />
                </CardBody>
              </Card>
            </Col>
          </Row>

          
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(DatatableTables);