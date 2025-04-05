import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bijoy Roy/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders enterprise computing course', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enterprise computing course/i);
  expect(linkElement).toBeInTheDocument();
});
