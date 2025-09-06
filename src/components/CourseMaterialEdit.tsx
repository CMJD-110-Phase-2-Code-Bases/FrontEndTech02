import {Button, Form, Modal} from "react-bootstrap"
import {useEffect, useState} from "react";
import { CourseMaterialModel } from "../model/CourseMaterialModel";

interface CourseMaterialEditProps {
    show: boolean;
    selectedRow : CourseMaterialModel | null
    handleOnClose : () => void
    updateCourseMaterial : (formData : FormData) => Promise<void>
    handleOnUpdate : (updateMaterial :CourseMaterialModel) => void
}
export const CourseMaterialEdit = ({
    show,
    selectedRow,
    handleOnClose,
    updateCourseMaterial ,
    handleOnUpdate 
}:CourseMaterialEditProps) => {
 
    const [material,setMaterial] = useState<CourseMaterialModel>({
        materialId: "",
        fileName: "",
        materialType: "",
        material: "",
        uploadAt: "",
        courseId: ""
    })

    useEffect(()=>{
       if(selectedRow){
           setMaterial({...selectedRow});
       }
    },[selectedRow]);



    return (
        <>
            {/* <Button variant="primary">
            Launch demo modal
        </Button> */}
        <Modal show={show} onHide={handleOnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Course Material</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="materialId">
                        <Form.Label>Course Material ID</Form.Label>
                        <Form.Control 
                        type="text" 
                        readOnly
                        name="materialId"
                        value={material.materialId}
                        
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fileName">
                        <Form.Label>File Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="fileName"
                        value={material.fileName}

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="materialType">
                        <Form.Label>Material Type</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="materialType"
                        value={material.materialType}

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="material">
                        <Form.Label>Material</Form.Label>
                        <Form.Control 
                        type="text" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="courseId">
                        <Form.Label>Course ID</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="courseId"
                        value={material.courseId}

                        />
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