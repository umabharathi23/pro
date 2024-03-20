import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  FormGroup,
  Form
} from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const FormElements = (props) => {
  document.title = "Tasks Info | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  const [data ,setData] =  useState({
    marks1:'',
    marks2:'',
    marks3:'',
    marks4:'',
    

    
  })
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  
  const breadcrumbItems = [
    { title: "Students", link: "#" },
    { title: "Add", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Elements', breadcrumbItems)
  })

  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    // setData([...setData, { subject, topic, description }]);
    // setSubject('');
    // setTopic('');
    // setDescription('');
    // setBatch('');
    // setErrors({});
    axios.post('http://localhost:2222/add-students',data).then((res)=>{
      if(res.status===200){
        alert("added suucessfully.")
      }
    })
  }

  return (
    <React.Fragment>
      
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <h4 className="card-title">Add Students</h4>

              <Row>
              
                <Col lg={12} className="ms-lg-auto">
                  <div className="mt-5 mt-lg-4">
                    
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Student1</label>
                        <div className="col-sm-9">
                          <input type="text" name="student1" className="form-control" value={data.marks1} id="horizontal-firstname-input" placeholder="Enter your marks" onChange={(e)=>setData({...data,marks1:e.target.value})} />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Student2</label>
                        <div className="col-sm-9">
                          <input type="text" name="student2" className="form-control" value={data.marks2} id="horizontal-email-input" placeholder="Enter your marks" onChange={(e)=>setData({...data,marks2:e.target.value})} />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Student3</label>
                        <div className="col-sm-9">
                          <input type="text" name="student3" className="form-control" value={data.marks3} id="horizontal-password-input" placeholder="Enter your marks" onChange={(e)=>setData({...data,marks3:e.target.value})}/>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Student4</label>
                        <div className="col-sm-9">
                          <input type="text" name="date" className="form-control" value={data.marks4} id="horizontal-password-input" placeholder="Enter your marks " onChange={(e)=>setData({...data,marks4:e.target.value})}/>
                        </div>
                      </div>
                      {/* <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Batch</label>
                        <div className="col-sm-9">
                        <select className="form-control" name="batch" value={data.batch} onChange={(e)=>setData({...data,batch:e.target.value})}>
                              <option value="">Select Batch</option>
                              <option value="FSD">FSD</option>
                              <option value="deveops">DevOps</option>
                              <option value="aws">AWS</option>
                              <option value="cloud">Cloud</option>
                              <option value="dataanalytics">Data Analytics</option>
                              <option value="pega">Pega</option>
                              <option value="flutter">Flutter</option>
                           </select>
                        </div>
                      </div> */}

                      <div className="row justify-content-end">
                        <div className="col-sm-9">
                          

                          <div>
                            <button type="submit" className="btn btn-primary w-md">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>

              
            </CardBody>
          </Card>
        </Col>
      </Row>
     
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormElements);