import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";
function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Family Loan Fund</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              marginTop: "30px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              <Button variant="outline-success"  onClick={() => setShowAddBudgetModal(true)} style={{ flex: 1 }}>
                Add Budget
              </Button>
              <Button variant="outline-success"  style={{ flex: 1 }}>
                Add Expense
              </Button>
            </div>
            <Button variant="outline-info" style={{ marginTop: "7px" }}>
              Membership Fee
            </Button>
          </div>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <BudgetCard
            name="Entertainment"
            gray
            amount={200}
            max={1000}
          ></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
    </>
  );
}

export default App;
