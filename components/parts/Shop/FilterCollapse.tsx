import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

interface Props {
  initialState: boolean;
  label: string;
}

const FilterCollapse: React.FC<Props> = ({ initialState, label, children }) => {
  const [open, setOpen] = useState(() => initialState);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="col-filter">
      <div onClick={toggle} className="col-filter__header">
        <p>{label}</p>
        {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
      </div>
      <Collapse in={open}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

export default FilterCollapse;
