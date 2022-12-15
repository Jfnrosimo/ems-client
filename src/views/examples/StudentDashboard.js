
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  CardBody,
  Container,
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const StudentDashboard = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" >
        <Col xl="14">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="text-uppercase text-muted ls-1 mb-1">
                    Midterm Exam
                  </h3>
                  <Card className="bg-secondary shadow border-0 mt-10">
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form">
                        <Container className="mt-10" >
                          <Col xl="14">
                            <Card className="mt-5">
                              <CardHeader className="bg-transparent mt-10">
                                <Row className="align-items-center">
                                  <div className="col">
                                    <h3 className="text-uppercase text-muted ls-1 mb-1">
                                      Fill in the blanks
                                    </h3>
                                    <hr/>

                                    <h3>
                                      Question: Who is your Hero?
                                    </h3>
                                    <br/>
                                    <FormGroup>
                                      <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                          </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Your answer here" type="text" />
                                      </InputGroup>
                                    </FormGroup>
                                    <Card className="bg-secondary shadow border-0">
                                      <CardBody className="px-lg-5 py-lg-5">
                                        <Form role="form">
                                          <div className="text-center">
                                            <Button className="mt-4" color="primary" type="button">
                                              Next
                                            </Button>
                                          </div>
                                        </Form>
                                      </CardBody>
                                    </Card>
                                  </div>
                                  </Row>
                                </CardHeader> 
                              </Card>
                            </Col>
                            <Col xl="14">
                            <Card className="mt-5">
                              <CardHeader className="bg-transparent mt-10">
                                <Row className="align-items-center">
                                  <div className="col">
                                    <h3 className="text-uppercase text-muted ls-1 mb-1">
                                      Select One
                                    </h3>
                                    <hr/>

                                    <h3>
                                      Question: Who is your Hero?
                                    </h3>
                                    <br/>
                                    {/* Options / Choices */}
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                      <input
                                        className="custom-control-input"
                                        id="customCheckRegister"
                                        type="checkbox"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheckRegister"
                                      >
                                        <h4>
                                          Darna
                                        </h4>
                                      </label>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                      <input
                                        className="custom-control-input"
                                        id=""
                                        type="checkbox"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor=""
                                      >
                                        <h4>
                                          Lastikman
                                        </h4>
                                      </label>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                      <input
                                        className="custom-control-input"
                                        id="customCheckRegister"
                                        type="checkbox"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheckRegister"
                                      >
                                        <h4>
                                          Tiktik
                                        </h4>
                                      </label>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                      <input
                                        className="custom-control-input"
                                        id="customCheckRegister"
                                        type="checkbox"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="customCheckRegister"
                                      >
                                        <h4>
                                          Superman
                                        </h4>
                                      </label>
                                    </div>
                                    
                                    <Card className="bg-secondary shadow border-0">
                                      <CardBody className="px-lg-5 py-lg-5">
                                        <Form role="form">
                                          <div className="text-center">
                                            <Button className="mt-4" color="primary" type="button">
                                              Next
                                            </Button>
                                          </div>
                                        </Form>
                                      </CardBody>
                                    </Card>
                                  </div>
                                  </Row>
                                </CardHeader> 
                              </Card>
                            </Col>
                        </Container>    
                      </Form>
                    </CardBody>
                  </Card>  
                </div>
              </Row>
            </CardHeader>          
          </Card>
        </Col>    
      </Container>
    </>
  );
};

export default StudentDashboard;
