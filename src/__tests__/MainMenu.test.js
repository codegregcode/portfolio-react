import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MainMenu from '../components/MainMenu';

describe('MainMenu', () => {
  beforeEach(() => {
    render(
      <Router>
        <MainMenu />
      </Router>
    );
  });

  it('renders menu', () => {
    const aboutMe = screen.getByRole('link', { name: /about me/i });
    const portfolio = screen.getByRole('link', { name: /portfolio/i });

    expect(aboutMe).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();
  });

  it('links to AboutMe when link clicked', () => {
    const aboutMe = screen.getByRole('link', { name: /about me/i });

    fireEvent.click(aboutMe);

    expect(window.location.pathname).toBe('/about-me');
  });

  it('links to Portfolio when link clicked', () => {
    const portfolio = screen.getByRole('link', { name: /portfolio/i });

    fireEvent.click(portfolio);

    expect(window.location.pathname).toBe('/portfolio');
  });
});
