import Table from 'react-bootstrap/Table';
import { getCourseMaterialData } from "../service/CourseMaterialService"
import { useEffect, useState } from 'react';

interface CourseMaterialModel{
    materialId?: string;   // optional, because backend generates it
    fileName: string;
    materialType: string;
    material: File | null;   // base64 string
    uploadAt: string;
    courseId: string;
}

export const  CourseMaterial = ()=> {
const tblHeaders : string [] = [
    "Material ID",
    "File Name",
    "Material Type",
    "Material",
    "Upload At",
    "Course ID",
];

 const [ material,setMaterial ] = useState<CourseMaterialModel []>([])


    useEffect(()=>{
      const loadData = async ()=>{
          const  importedData = await getCourseMaterialData();
          console.log(importedData)
          setMaterial(importedData);

      };
      loadData();
    },[])
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
              <td>{mat.courseId}</td>
              <td>{mat.fileName}</td>
              <td>{mat.materialType}</td>
              <td>TBImpl</td>
              <td>{mat.uploadAt}</td>
              <td>{mat.courseId}</td>

          </tr>
      ))}

         {/*<tr>*/}
         {/*    <td></td>*/}
         {/*</tr>*/}

      </tbody>
    </Table>
        </>
    );
}