import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { setBreadcrumbItems } from "../../store/actions";

const FormElements = (props) => {
  document.title =
    "List Info | Lexa - Responsive Bootstrap 5 Admin Dashboard";
  const [data, setData] = useState({
    subject: "",
    technology: "",
    myfile: null,
  });

  const breadcrumbItems = [
    { title: "Marks", link: "#" },
    { title: "Add", link: "#" },
  ];

  useEffect(() => {
    props.setBreadcrumbItems("Students List", breadcrumbItems);
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", data.subject);
    formData.append("technology", data.technology);
    formData.append("myfile", data.myfile);

    axios
      .post("http://localhost:2222/add-marks", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Added successfully.");
        }
      })
      .catch((error) => {
        console.error("Error occurred while submitting form:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <h4 className="card-title">Add Marks</h4>

              <Row>
                <Col lg={12} className="ms-lg-auto">
                  <div className="mt-5 mt-lg-4">
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <label className="col-sm-3 col-form-label">
                          Subject
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            value={data.subject}
                            placeholder="Enter your Subject name"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <label className="col-sm-3 col-form-label">
                          Technology
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            name="technology"
                            value={data.technology}
                            onChange={handleChange}
                          >
                            <option value="">Select Batch</option>
                            <option value="FSD">FSD</option>
                            <option value="devops">DevOps</option>
                            <option value="aws">AWS</option>
                            <option value="cloud">Cloud</option>
                            <option value="dataanalytics">Data Analytics</option>
                            <option value="pega">Pega</option>
                            <option value="flutter">Flutter</option>
                            <option value="salesforce">Sales Force</option>
                            <option value="rpa">RPA</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <label className="col-sm-3 col-form-label">Marks</label>
                        <div className="col-sm-9">
                          <input
                            type="file"
                            name="myfile"
                            className="form-control"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row justify-content-end">
                        <div className="col-sm-9">
                          <div>
                            <button type="submit" className="btn btn-primary w-md">
                              Submit
                            </button>
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
  );
};

export default connect(null, { setBreadcrumbItems })(FormElements);
