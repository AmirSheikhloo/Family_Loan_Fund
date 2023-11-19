import { Button, Form, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import { useBudgets } from "../contexts/BudgetsContext";
import { parse } from "uuid";

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  const [formattedValue, setFormattedValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value.replace(/,/g, ""))
    });
    handleClose();
  }

  function handleInputChange(e) {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = rawValue.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
    setFormattedValue(formattedValue);
    maxRef.current.value = rawValue;
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Select ref={nameRef} required>
              <option value="Amir">Amir</option>
              <option value="Reza">Reza</option>
              <option value="Sima">Sima</option>
              <option value="Ali">Ali</option>
              <option value="Mohsen">Mohsen</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              ref={maxRef}
              type="text"
              value={formattedValue}
              required
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}