import { fireEvent, render, screen } from "@testing-library/react";
import UserModal from "./UserModal";
import { test, expect, vi } from "vitest";

test("renders input fields", () => {
  // 1️ Render the component
  render(<UserModal close={() => {}} onSubmit={() => {}} />);

  // 2 Select inputs using placeholder text
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const roleInput = screen.getByPlaceholderText("Role");

  // 3 check if they exist in the document (DOM)
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(roleInput).toBeInTheDocument();

});

test("testing for the change in input fields value", () => {
  render(<UserModal close={() => {}} onSubmit={() => {}} />)

  const nameInputChange = screen.getByPlaceholderText("Name");

  fireEvent.change(nameInputChange,{target:{value:"Alice"}})

  expect(nameInputChange.value).toBe("Alice")
})

test("calls onSubmit with correct data when adding new user", () => {
  const mockSubmit = vi.fn();  // mock function

  render(<UserModal close={() => {}} onSubmit={mockSubmit} />);

  // 1️⃣ Type into Name input
  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Alice" },
  });

  // 2️⃣ Type into Email input
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "alice@example.com" },
  });

  // 3️⃣ Type into Role input
  fireEvent.change(screen.getByPlaceholderText("Role"), {
    target: { value: "User" },
  });

  // 4️⃣ Click Add button
  fireEvent.click(screen.getByText("Add"));

  // 5️⃣ Ensure submit was called exactly once
  expect(mockSubmit).toHaveBeenCalledTimes(1);

  // 6️⃣ Extract submitted form data from mock
  const submittedData = mockSubmit.mock.calls[0][0];

  // 7️⃣ Check each field
  expect(submittedData.name).toBe("Alice");
  expect(submittedData.email).toBe("alice@example.com");
  expect(submittedData.role).toBe("User");

  // 8️⃣ ID should NOT be null (component generates it)
  expect(submittedData.id).not.toBeNull();
});
