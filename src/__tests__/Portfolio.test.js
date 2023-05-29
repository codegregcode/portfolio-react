import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Portfolio from '../components/Portfolio';
import { getProjects } from '../firebase';

jest.mock('../firebase', () => ({
  collection: () => ({
    get: jest.fn(() =>
      Promise.resolve({
        forEach: (callback) => {
          const mockData = [
            {
              id: 'project1',
              data: () => ({
                title: 'Project 1',
                description: 'Description 1',
                image_link: 'image1.jpg',
                github_link: 'github.com/project1',
                deploy_link: 'example.com/project1',
              }),
            },
            {
              id: 'project2',
              data: () => ({
                title: 'Project 2',
                description: 'Description 2',
                image_link: 'image2.jpg',
                github_link: 'github.com/project2',
                deploy_link: 'example.com/project2',
              }),
            },
          ];
          mockData.forEach(callback);
        },
      })
    ),
  }),
}));

describe('Portfolio', () => {
  it('renders project information', async () => {
    const { getByText, getByAltText } = render(<Portfolio />);

    await waitFor(() => {
      const project1 = getByText('Project 1');
      const project2 = getByText('Project 2');
      const description1 = getByText('Description 1');
      const description2 = getByText('Description 2');
      const image1 = getByAltText('Project 1');
      const image2 = getByAltText('Project 2');

      expect(project1).toBeInTheDocument();
      expect(project2).toBeInTheDocument();
      expect(description1).toBeInTheDocument();
      expect(description2).toBeInTheDocument();
      expect(image1).toBeInTheDocument();
      expect(image2).toBeInTheDocument();
    });
  });
});
