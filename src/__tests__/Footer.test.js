import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders github,linkedin n email on path /', () => {
    render(<Footer currentLocation="/" />);

    const github = screen.getByText('GitHub');
    const linkedin = screen.getByText('LinkedIn');
    const email = screen.getByText('E-Mail Me');

    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('renders github, linkedin n email on path /menu', () => {
    render(<Footer currentLocation="/menu" />);

    const github = screen.getByText('GitHub');
    const linkedin = screen.getByText('LinkedIn');
    const email = screen.getByText('E-Mail Me');

    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('renders about me link when on path /portfolio', () => {
    render(
      <MemoryRouter>
        <Footer currentLocation="/portfolio" />
      </MemoryRouter>
    );

    const aboutMe = screen.getByText('About Me');
    const github = screen.getByText('GitHub');
    const linkedin = screen.getByText('LinkedIn');
    const email = screen.getByText('E-Mail Me');

    expect(aboutMe).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  it('renders portfolio link when on path /about-me', () => {
    render(
      <MemoryRouter>
        <Footer currentLocation="/about-me" />
      </MemoryRouter>
    );

    const portfolio = screen.getByText('Portfolio');
    const github = screen.getByText('GitHub');
    const linkedin = screen.getByText('LinkedIn');
    const email = screen.getByText('E-Mail Me');

    expect(portfolio).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
