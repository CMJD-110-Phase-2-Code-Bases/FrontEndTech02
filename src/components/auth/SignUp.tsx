import Form from "react-bootstrap/Form";
export const SignUp = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Register</h1>
    <Form className="d-flex flex-column align-items-center mt-5">
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Enter First Name" 
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
           type="text"
           placeholder="Enter Last Name" 
        />
        </Form.Group>
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
           placeholder="Enter Password" 
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRole">
          <Form.Label>Role</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Enter Role" 
           />
        </Form.Group>
        
      </Form>
    </>
  );
};
