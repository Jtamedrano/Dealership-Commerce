import React from "react";
import { Table, Button } from "react-bootstrap";
import { useGetAllAutosQuery } from "../../../generated/graphql";

const AutoTable: React.FC = () => {
  const [{ fetching, data }] = useGetAllAutosQuery();

  const getAllRows = () => {
    if (!fetching && !!data?.getAllAutos) {
      return data.getAllAutos.map(({ id, year, make, model }) => (
        <tr key={`auto-row-${id}`}>
          <td>{id}</td>
          <td>{year}</td>
          <td>{make}</td>
          <td>{model}</td>
          <td>
            <Button size="sm">Details</Button>{" "}
            <Button size="sm" variant="danger">
              Delete
            </Button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Year</th>
          <th>Make</th>
          <th>Model</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{getAllRows()}</tbody>
    </Table>
  );
};

export default AutoTable;
