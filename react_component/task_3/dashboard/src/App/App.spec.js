import { render, fireEvent, screen } from "@testing-library/react";
import { test, expect, describe, beforeEach, afterEach, jest } from "@jest/globals";
import App from "./App";

test("Should render the header, login, and footer components", () => {
  render(<App />);
});

describe("App hotkey logout", () => {
  const originalAlert = window.alert;

  beforeEach(() => {
    window.alert = jest.fn();
  });

  afterEach(() => {
    window.alert = originalAlert;
  });

  test("calls logOut when Ctrl+H is pressed", () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);
    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });
    expect(logOut).toHaveBeenCalledTimes(1);
  });

  test("alerts 'Logging you out' when Ctrl+H is pressed", () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);
    fireEvent.keyDown(window, { key: 'h', ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});

test('Displays News from the School section by default', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 2, name: /News from the School/i })).toBeInTheDocument();
  expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
});
