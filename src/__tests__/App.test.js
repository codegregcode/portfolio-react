import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const title = screen.getByText('Greg');
    expect(title).toBeInTheDocument();
  });
});
