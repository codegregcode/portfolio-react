import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutMe from '../components/AboutMe';

describe('AboutMe', () => {
  it('renders h1', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );
    const h1 = getByText('A little about me...');

    expect(h1).toBeInTheDocument();
  });

  it('renders all paragraphs', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );

    const p1 = getByTestId('p1');
    const p2 = getByTestId('p2');
    const p3 = getByTestId('p3');
    const p4 = getByTestId('p4');
    const p5 = getByTestId('p5');
    const p6 = getByTestId('p6');

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
    expect(p3).toBeInTheDocument();
    expect(p4).toBeInTheDocument();
    expect(p5).toBeInTheDocument();
    expect(p6).toBeInTheDocument();
  });

  it('links to correct path', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );

    const portfolioLink = getByText('portfolio');
    expect(portfolioLink).toHaveAttribute('href', '/portfolio');

    const musicLink = getByText('here');
    expect(musicLink).toHaveAttribute('href', '/music');

    const photoReelLink = getByText('photo reel');
    expect(photoReelLink).toHaveAttribute('href', '/photo-reel');
  });
});
