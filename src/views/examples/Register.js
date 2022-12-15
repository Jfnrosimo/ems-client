//hook
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser } from "../../redux/reducers/usersSlice";

//Import routing
import { Link, useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Register = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");
  const [userType, setUserType] = useState("student");
  const [isSignup, setIsSignup] = useState(false);
  const [closeModal, setModalClose] = useState(false);

  const history = useHistory();

  //handle register submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    //console.log(email, password, firstName, lastName, group);
    const users = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      type: userType, //type  //student or mentor
      section: group,
      rating: "", //grade of the student
      //role:role //user or admin
    };
    dispatch(newUser({ users }));
    alert("You have sucessfully registered!");
    history.push("/auth/login");
  };

  const getType = (e) => {
    if (e.target.id === "mentor") {
      setUserType("mentor");
    }
    setIsSignup(true);
  };

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            {isSignup ? (
              <Form role="form" onSubmit={handleRegisterSubmit}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name"
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Group / Section Name"
                      type="text"
                      onChange={(e) => setGroup(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <Row className="my-4">
                  <Col xs="12">
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
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            ) : (
              <Card className="bg-secondary border-0">
                <h2 className=" align-self-center">Register As?</h2>
                <div className="d-flex justify-content-center">
                  <Button
                    id="mentor"
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={getType}
                  >
                    Mentor
                  </Button>
                  <Button
                    id="student"
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={getType}
                  >
                    Student
                  </Button>
                </div>
              </Card>
            )}
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
