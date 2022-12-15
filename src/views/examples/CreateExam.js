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
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const CreateExam = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-uppercase text-muted ls-1 mb-1">
                      Create Exam
                    </h3>

                    <Card className="bg-secondary shadow border-0">
                      <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-active-40" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Select Question Type"
                                type="text"
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-active-40" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Enter Question" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-active-40" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Enter Option" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-active-40" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Select Right Answer"
                                type="text"
                              />
                            </InputGroup>
                          </FormGroup>

                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="button"
                            >
                              Save Question
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

          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-green shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-white mb-0">Questions Created</h3>

                    <h4 className="text-white mb-0">
                      1. Who is your hero?
                      <br />
                      2. If you could live anywhere, where would it be?
                      <br />
                      3. What is your biggest fear?
                      <br />
                      4. What is your favorite family vacation?
                      <br />
                      5. What would you change about yourself if you could?
                      <br />
                      6. What really makes you angry?
                      <br />
                      7. What motivates you to work hard?
                      <br />
                      8. What is your favorite thing about your career?
                      <br />
                      9. What is your biggest complaint about your job?
                      <br />
                      10. What is your proudest accomplishment?
                      <br />
                      11. What really makes you angry?
                      <br />
                      12. What motivates you to work hard?
                      <br />
                      13. What is your favorite thing about your career?
                      <br />
                      14. What is your biggest complaint about your job?
                      <br />
                      15. What is your proudest accomplishment?
                      <br />
                    </h4>

                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="button">
                        Save Exam
                      </Button>
                    </div>
                  </div>
                  <div className="col"></div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateExam;
