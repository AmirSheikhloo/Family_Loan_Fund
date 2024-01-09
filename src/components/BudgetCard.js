import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { currencyFormatter } from "../utils"

<<<<<<< HEAD
export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
=======
export default function BudgetCard({ name, amount, max, gray }) {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } 
  if (amount == max) {
    classNames.push("bg-success", "bg-opacity-10");
  }
  else if (gray) {
    classNames.push("bg-light");
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
<<<<<<< HEAD
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expenses
            </Button>
          </Stack>
        )}
=======
            {currencyFormatter.format(amount)}{" "}
            <span className="text-muted fs-6 ms-1">
              {" "}
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button variant="outline-primary" className="ms-auto">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
      </Card.Body>
    </Card>
  );
}

function getProgressBarVariant(amount, max) {
<<<<<<< HEAD
  const ratio = amount / max
  if (ratio < 0.5) return "primary"
  if (ratio < 0.75) return "warning"
  return "danger"
}
=======
  const ratio = amount / max;
  if (ratio < 0.5) return "warning";
  if (ratio < 1.0) return "primary";
  if (ratio == 1.0) return "success";
  return "danger";
}
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
