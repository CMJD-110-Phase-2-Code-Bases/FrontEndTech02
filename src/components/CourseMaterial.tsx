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

  // const [tblData,setTblData] = useState<CourseMaterialModel | null>(null)

    useEffect(()=>{
      const loadData = async ()=>{
          const  importedData = await getCourseMaterialData();
          console.log(importedData)
          // setTblData(importedData)
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
             <tr>
               <td></td>
               
              </tr>    






        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr> */}
      </tbody>
    </Table>
        </>
    );
}