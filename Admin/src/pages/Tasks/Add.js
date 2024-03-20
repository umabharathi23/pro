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
  document.title = "List Info | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  const [data ,setData] =  useState({
    subject:'',
    topic:'',
    description:'',
    batch:''
  })
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  
  const breadcrumbItems = [
    { title: "Tasks", link: "#" },
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
    axios.post('http://localhost:2222/add-task',data).then((res)=>{
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
              <h4 className="card-title">Add Task</h4>

              <Row>
              
                <Col lg={12} className="ms-lg-auto">
                  <div className="mt-5 mt-lg-4">
                    
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Language name</label>
                        <div className="col-sm-9">
                          <input type="text" name="subject" className="form-control" value={data.subject} id="horizontal-firstname-input" placeholder="Enter your language name" onChange={(e)=>setData({...data,subject:e.target.value})} />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Topic Name</label>
                        <div className="col-sm-9">
                          <input type="text" name="topic" className="form-control" value={data.topic} id="horizontal-email-input" placeholder="Enter your Topic name" onChange={(e)=>setData({...data,topic:e.target.value})} />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Text Description</label>
                        <div className="col-sm-9">
                          <input type="text" name="description" className="form-control" value={data.description} id="horizontal-password-input" placeholder="Enter your first name" onChange={(e)=>setData({...data,description:e.target.value})}/>
                        </div>
                      </div>
                      <div className="row mb-4">
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
                      </div>

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