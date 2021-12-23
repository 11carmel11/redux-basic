import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddFrom from "./AddForm";

export default function AddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add item here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form to add an item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddFrom closeHandler={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
