 import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProvider from '../../utils/test-utils';
import Form from './Form';

describe('Should render form', () => {
  it('should render correctly', () => {
    renderWithProvider(<Form />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/added at/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /no/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/artwork/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(submitBtn).toBeInTheDocument();
  });

  it('displays an error message if required fields are not filled', async () => {
    renderWithProvider(<Form />);
    userEvent.click(screen.getByTestId('submit-button'));

    expect(await screen.findByText('Title is required')).toBeInTheDocument();
    expect(await screen.findByText('Author is required')).toBeInTheDocument();
    expect(await screen.findByText('Type is required')).toBeInTheDocument();
    expect(await screen.findByText('Artwork is required')).toBeInTheDocument();
    expect(await screen.findByText('Owner is required')).toBeInTheDocument();
    expect(await screen.findByText('Agreement is required')).toBeInTheDocument();
  });

  // it('submits the form with valid data and adds a new card to the list', async () => {
  //   renderWithProvider(<Form />);

  //   const titleInput = screen.getByLabelText('Title:');
  //   const authorInput = screen.getByLabelText('Author:');
  //   const addedAtInput = screen.getByLabelText('Added at:');
  //   const typeInput = screen.getByLabelText('Type:');
  //   const artworkInput = screen.getByLabelText('Artwork:');
  //   const agreementInput = screen.getByLabelText('Agree to Data Processing:');
  //   const submitButton = screen.getByTestId('submit-button');

  //   userEvent.type(titleInput, 'Test Title');
  //   userEvent.type(authorInput, 'Test Author');
  //   userEvent.type(addedAtInput, '2022-04-17');
  //   fireEvent.change(typeInput, { target: { value: 'painting' } });
  //   const file = new File([''], 'test.png', { type: 'image/png' });
  //   fireEvent.change(artworkInput, { target: { files: [file] } });
  //   userEvent.click(agreementInput);
  //   userEvent.click(submitButton);

  //   expect(await screen.findByText('Test Title')).toBeInTheDocument();
  //   expect(await screen.findByText('Test Author')).toBeInTheDocument();
  //   expect(await screen.findByText('Type of Art: Painting')).toBeInTheDocument();
  //   expect(await screen.findByText('Added at: 2022-04-17')).toBeInTheDocument();
  // });
});
