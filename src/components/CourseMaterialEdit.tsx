import {Button, Form, Modal} from "react-bootstrap"
import {useState} from "react";

export const CourseMaterialEdit = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnUpdate = ()=>{
        setShow(true);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button><Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Course Material</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Course Material ID</Form.Label>
                        <Form.Control type="text" readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>File Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Material Type</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Material</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Course ID</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                    <Button variant="danger" type="reset">
                        Clear
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>

    )
}