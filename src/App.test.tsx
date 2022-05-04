import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('renders learn react link', () => {
  it('should mark items as draggable', () => {
    render(<App />);
    const draggableElement = screen.getByTestId("draggable");
    expect(draggableElement.getAttribute('draggable')).toBeTruthy();
  });
});
