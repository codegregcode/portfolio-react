import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders all items in footer', () => {
    render(<Footer />);

    const conditional = screen.getByText('Conditional Link');
    const github = screen.getByText('GitHub');
    const linkedin = screen.getByText('LinkedIn');
    const email = screen.getByText('E-Mail Me');

    expect(conditional).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
