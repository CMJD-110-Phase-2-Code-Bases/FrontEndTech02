import Form from "react-bootstrap/Form";
export const SignIn = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Login</h1>
      <Form className="d-flex flex-column align-items-center mt-5">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email"
           placeholder="Enter email" 
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           type="password"
           placeholder="Password" 
           />
        </Form.Group>
      </Form>
    </>
  );
};
