import Table from 'react-bootstrap/Table';
import { getCourseMaterialData, updateCourseMaterialData, addCourseMaterialData, deleteCourseMaterialData} from "../../service/CourseMaterialService"
import { useEffect, useState } from 'react';
import {Button} from "react-bootstrap";
import { CourseMaterialModel } from "../../model/CourseMaterialModel";
import CourseMaterialEdit from './CourseMaterialEdit';
import CourseMaterialAdd from './CourseMaterialAdd';



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
 const [ showAddForm, setShowAddForm] = useState(false);
 const [ selectedRow, setSelectedRow] = useState<CourseMaterialModel | null>(null);

 const loadData = async () => {
    const courseMatData = await getCourseMaterialData();
    setMaterial(courseMatData);
  };

    useEffect(()=>{
      loadData();
    },[])
    
    //handle edit form
    const handleOnEdit  = (mat: CourseMaterialModel) =>{
        setShowEditForm(true)
        setSelectedRow(mat)
    }
    //handle delete
    const handleOnDelete = async (materialId: string)=>{
         try{
           await deleteCourseMaterialData(materialId)
           alert("Material deleted...")
           loadData();  
         }catch(err){
             console.error("Delete falied",err);
         }
    }
    return(
        <>
        <div>
            <h1 style={{ textAlign:"center",padding:"10px"}}>Course Material Portal</h1>
            <Button variant='primary' style={{ position:"absolute",right:"50px",top:"10%"}} onClick={()=> setShowAddForm(true)}>
                Add
            </Button>
        </div>
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
                  >Update
                  </Button>
                  <Button variant="danger" 
                  onClick={()=> handleOnDelete(mat.materialId)}
                  >Delete
                  </Button>

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
     loadData={()=> loadData()}
  />

  {/* add data handle */}
  <CourseMaterialAdd
     show = {showAddForm}
     handleOnClose={()=> setShowAddForm(false)}
     addCourseMaterialData={addCourseMaterialData}
     loadData={()=> loadData()}
  />

</>
    );
}