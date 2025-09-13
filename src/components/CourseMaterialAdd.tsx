import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { CourseMaterialModel } from "../model/CourseMaterialModel";

interface CourseMaterialAddProps {
    show: boolean;
    handleOnClose: () => void;
    addCourseMaterialData: (formData: FormData) => Promise<void>;
    loadData: ()=> void;
}

const CourseMaterialAdd = ({
                                show,
                                handleOnClose,
                                addCourseMaterialData,
                                loadData
                            }: CourseMaterialAddProps) => {
    const [material, setMaterial] = useState<CourseMaterialModel>({
        materialId: "",
        fileName: "",
        materialType: "",
        material: "",
        uploadAt: "",
        courseId: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMaterial((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setMaterial((prev) => ({ ...prev, material: file }));
        }
    };

    const hanldeOnSubmit = async () => {
        if (!material.material) {
            alert("Please select a file!");
            return;
        }

        const formData = new FormData();

        formData.append("fileName", material.fileName);
        formData.append("materialType", material.materialType);

        // If material is File, append it, else skip
        if (material.material instanceof File) {

            formData.append("material", material.material);
        }

        if (material.uploadAt) formData.append("uploadAt", material.uploadAt);
        formData.append("courseId", material.courseId);

        try {
            await addCourseMaterialData(formData);
            loadData()
            handleOnClose();
        } catch (error) {
            console.error("Failed to update material:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleOnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Material</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate>
                    <Form.Group as={Col} md="10" className="mb-3">
                        <Form.Label>File name:</Form.Label>
                        <Form.Control type="text" 
                        name="fileName" 
                        value={material.fileName}
                         onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="10" className="mb-3">
                        <Form.Label>Material Type:</Form.Label>
                        <Form.Control type="text" 
                        name="materialType" 
                        value={material.materialType} 
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="10" className="mb-3">
                        <Form.Label>Material File:</Form.Label>
                        <Form.Control
                         type="file" 
                        onChange={handleFileChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="10" className="mb-3">
                        <Form.Label>Upload At:</Form.Label>
                        <Form.Control type="text" 
                        name="uploadAt" 
                        value={material.uploadAt} 
                        onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} md="10" className="mb-3">
                        <Form.Label>Course Id:</Form.Label>
                        <Form.Control 
                         type="text"
                         name="courseId" 
                         value={material.courseId} 
                         onChange={handleChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleOnClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={hanldeOnSubmit}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CourseMaterialAdd;
