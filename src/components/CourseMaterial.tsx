import Table from 'react-bootstrap/Table';

export const  CourseMaterial = ()=> {
    return(
        <>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Material ID</th>
          <th>File Name</th>
          <th>Material Type</th>
          <th>Material</th>
          <th>Upload At</th>
          <th>Course ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
        </>
    );
}