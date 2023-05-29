import React from 'react';
import { render, waitFor } from '@testing-library/react';
import PhotoReel from '../components/PhotoReel';
import { getPhotos } from '../firebase';

// Mocking the getPhotos function
jest.mock('../firebase', () => ({
  getPhotos: jest.fn(),
}));

describe('PhotoReel component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<PhotoReel />);
  });

  it('fetches photos on component mount', async () => {
    render(<PhotoReel />);
    expect(getPhotos).toHaveBeenCalledTimes(1);
  });

  it('displays fetched photos', async () => {
    const mockPhotos = [
      { title: 'Photo 1', image_link: 'photo1.jpg' },
      { title: 'Photo 2', image_link: 'photo2.jpg' },
      { title: 'Photo 3', image_link: 'photo3.jpg' },
    ];

    // Mocking the getPhotos function to return mockPhotos
    getPhotos.mockResolvedValueOnce(mockPhotos);

    const { getByText, getAllByAltText } = render(<PhotoReel />);
    await waitFor(() => {
      expect(getPhotos).toHaveBeenCalledTimes(1);
    });

    const photoReelTitle = getByText('Photo Reel');
    expect(photoReelTitle).toBeInTheDocument();

    const photoCards = getAllByAltText(/Photo \d/);
    expect(photoCards.length).toBe(mockPhotos.length);

    photoCards.forEach((card, index) => {
      const photo = mockPhotos[index];
      expect(card.src).toBe(photo.image_link);
      expect(card.alt).toBe(photo.title);
    });
  });
});
