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
//     axios.get('http://localhost:2222/getdatas').then((res)=>{
//     console.log(res.data)  
//     setDatas(res.data)
//     })
//   },[])

//   const data = {
//     columns: [
//       {
//         label: "Toipc Name",
//         field: "topicName",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Language",
//         field: "language",
//         sort: "asc",
//         width: 270,
//       },
//       {
//         label: "Test Type",
//         field: "testType",
//         sort: "asc",
//         width: 200,
//       },
//       {
//         label: "Batch",
//         field: "batch",
//         sort: "asc",
//         width: 100,
//       },
//       {
//         label: "Start date",
//         field: "date",
//         sort: "asc",
//         width: 150,
//       },
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