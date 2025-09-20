import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
export const SignIn = () => {

  interface SignIn{
      email:string;
      password:string;
  }  
  
  const [user,setUser] = useState<SignIn>({
      email:"",
      password:""
  })  
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    setUser((prev)=> ({...prev, [name]:value}))
  }
  const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <>
    <h1 style={{textAlign:"center"}}>Login</h1>
      <Form className="d-flex flex-column align-items-center mt-5" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email"
           placeholder="Enter email" 
           name="email"
           value={user.email}
           onChange={handleOnChange}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
           type="password"
           placeholder="Password" 
           name="password"
           value={user.password}
           onChange={handleOnChange}
           />
        </Form.Group>
        <Button
        type="submit"
        variant="success"
        >Signup</Button>
      </Form>
    </>
  );
};
