// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AgentVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AgentVault/i);
    expect(titleElement).toBeInTheDocument();
});
