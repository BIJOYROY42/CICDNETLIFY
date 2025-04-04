import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the user name', () => {
    render(<App />);
    const nameElement = screen.getByText(/Bijoy Roy/i);
    expect(nameElement).toBeInTheDocument();
});
test('renders the course name', () => {
    render(<App />);
    const courseElement = screen.getByText(/Enterprise Computing/i);
    expect(courseElement).toBeInTheDocument();
});