import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { SignUpProcess } from "../../service/AuthService";
export const SignUp = () => {

  interface SignUp{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
  }  

  //state handle
  const [user,setUser]  = useState<SignUp>({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      role:"",
  })  


  //form data handle
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setUser((prev)=> ({...prev, [name]:value}))

  }


 // send sign updata to the server
  const handleOnSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     const token = await SignUpProcess(user)
     console.log(token)
  }  
  return (
    <>
    <h1 style={{textAlign:"center"}}>Register</h1>
    <Form className="d-flex flex-column align-items-center mt-5" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Enter First Name" 
           value={user.firstName}
           name="firstName"
           onChange={handleOnChange}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
           type="text"
           placeholder="Enter Last Name" 
           value={user.lastName}
           name="lastName"
           onChange={handleOnChange}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email"
           placeholder="Enter email" 
           value={user.email}
           name="email"
           onChange={handleOnChange}
           
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           type="password"
           placeholder="Enter Password" 
           value={user.password}
           name="password"
           onChange={handleOnChange}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRole">
          <Form.Label>Role</Form.Label>
          <Form.Control 
           type="text"
           placeholder="Enter Role" 
           value={user.role}
           name="role"
           onChange={handleOnChange}
           />
        </Form.Group>
        <Button variant="success" type="submit">Register</Button>       
      </Form>
    </>
  );
};
