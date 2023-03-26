import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Form from './Form';

describe('Form should submit the form correctly', () => {
  it('submit form correct', async () => {
    const onSubmitMock = vi.fn();
      render(<Form onSubmit={onSubmitMock} />);
      const titleInput = screen.getByLabelText('Title:');
      const authorInput = screen.getByLabelText('Author:');
      const addedAtInput = screen.getByLabelText('Added At:');
      const typeSelect = screen.getByLabelText('Type:');
      const agreementCheckbox = screen.getByLabelText('Agree to Data Processing:');
      const artworkInput = screen.getByLabelText('Artwork:');
      const ownerYesRadio = screen.getByLabelText('Yes');
      const submitButton = screen.getByRole('button', { name: 'Submit' });

      fireEvent.change(titleInput, { target: { value: 'Test Title' } });
      fireEvent.change(authorInput, { target: { value: 'Test Author' } });
      fireEvent.change(addedAtInput, { target: { value: '2022-03-26' } });
      fireEvent.change(typeSelect, { target: { value: 'painting' } });
      fireEvent.click(agreementCheckbox);
      fireEvent.change(artworkInput, {
        target: { files: [new File(['(⌐□_□)'], 'artwork.png', { type: 'image/png' })] },
      });
      fireEvent.click(ownerYesRadio);
      fireEvent.click(submitButton);

      await expect(onSubmitMock).toHaveBeenCalledWith({
        title: 'Test Title',
        author: 'Test Author',
        addedAt: '2022-03-26',
        type: 'painting',
        agreement: true,
        owner: true,
        artwork: expect.any(String),
      });
  });


});
