import Table from 'react-bootstrap/Table';
import { getCourseMaterialData,updateCourseMaterialData } from "../service/CourseMaterialService"
import { useEffect, useState } from 'react';
import {Button} from "react-bootstrap";
import { CourseMaterialModel } from "../model/CourseMaterialModel";
import { CourseMaterialEdit } from './CourseMaterialEdit';


export const  CourseMaterial = ()=> {
const tblHeaders : string [] = [
    "Material ID",
    "File Name",
    "Material Type",
    "Material",
    "Upload At",
    "Course ID",
    "Options",
];

 const [ material,setMaterial ] = useState<CourseMaterialModel []>([])
 const [ showEditForm, setShowEditForm] = useState(false);
 const [ selectedRow, setSelectedRow] = useState<CourseMaterialModel | null>(null);

    useEffect(()=>{
      const loadData = async ()=>{
          const  importedData = await getCourseMaterialData();
          console.log(importedData)
          setMaterial(importedData);
      };
      loadData();
    },[])
    //handle edit form
    const handleOnEdit  = (mat: CourseMaterialModel) =>{
        setShowEditForm(true)
        setSelectedRow(mat)
    }
    //after update
    const handleOnUpdate = () =>{

    }
    return(
        <>
          <Table striped bordered hover>
      <thead>
        <tr>
            {tblHeaders.map((headings,index)=> (
                <th key={index}>{headings}</th>
            ))}
        </tr>
      </thead>
      <tbody>
      {material.map((mat,index) =>(
          <tr key={index}>
              <td>{mat.materialId}</td>
              <td>{mat.fileName}</td>
              <td>{mat.materialType}</td>
              <td>
                  <img
                      src={`data:image/png;base64,${mat.material}`}
                      alt="course material"
                      style={{width:"80px",height:"auto"}}
                  />
              </td>
              <td>{mat.uploadAt}</td>
              <td>{mat.courseId}</td>
              <td>
                  <Button
                  className="btn-warning"
                  style={{ marginRight: "10px"}}
                  onClick={()=>  handleOnEdit(mat)
                }
                  >Update</Button>
              </td>

          </tr>
      ))}
      </tbody>
    </Table>
{/* update data handle */}
  <CourseMaterialEdit
     show = {showEditForm}
     selectedRow={selectedRow}
     handleOnClose={()=> setShowEditForm(false)}
     updateCourseMaterial={updateCourseMaterialData}
     handleOnUpdate={handleOnUpdate} 
  />
        </>
    );
}