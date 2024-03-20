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
import Data from "pages/Maps/LightData";

const FormElements = (props) => {
  document.title = "Tasks Info | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  const [data ,setData] =  useState({
    topicname:'',
    language:'',
    testtype:'',
    batch:'',
    date:''

    
  })
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  
  const breadcrumbItems = [
    { title: "Tests", link: "#" },
    { title: "Add", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Elements', breadcrumbItems)
  })

  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)
//  const api=APP_URL+'addeventform';
// const {id} = useParams()
  const id = window.location.pathname.split('/')[2];
// console.log(pathname)
    useEffect(()=>{
      console.log("sss")
      console.log(id)
      axios.get('http://localhost:2222/geteventbyid/'+id)
        .then((res)=>{console.log(res.data)
        setData(res.data.data)}
        )
        .catch((err)=>console.log(err))
    },[])
    const handleEdit=(e)=>{
            e.preventDefault();
            console.log(data)
            //http://localhost:3000/form
            axios.put('http://localhost:5000/updateevent/'+id,{data})
            .then((result)=>
            {
                alert("Updated successfully.")
                window.location.href='/getevent';
            })


  

  return (
    <React.Fragment>
      
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <h4 className="card-title">Add Test</h4>

              <Row>
              
                <Col lg={12} className="ms-lg-auto">
                  <div className="mt-5 mt-lg-4">
                    
                    <form onSubmit={handleEdit}>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">topic name</label>
                        <div className="col-sm-9">
                          <input type="text" name="topicname" className="form-control" value={data.topicname} id="horizontal-firstname-input" placeholder="Enter your topic name" onChange={(e)=>setData({...data,topicname:e.target.value})} />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">language Name</label>
                        <div className="col-sm-9">
                          <input type="text" name="language" className="form-control" value={data.language} id="horizontal-email-input" placeholder="Enter your language name" onChange={(e)=>setData({...data,language:e.target.value})} />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">testtype</label>
                        <div className="col-sm-9">
                          <input type="text" name="testtype" className="form-control" value={data.testtype} id="horizontal-password-input" placeholder="Enter your testtype name" onChange={(e)=>setData({...data,testtype:e.target.value})}/>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">date</label>
                        <div className="col-sm-9">
                          <input type="text" name="date" className="form-control" value={data.date} id="horizontal-password-input" placeholder="Enter date" onChange={(e)=>setData({...data,date:e.target.value})}/>
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
}

export default connect(null, { setBreadcrumbItems })(FormElements);