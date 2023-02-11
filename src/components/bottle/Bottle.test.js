import { render, screen } from '@testing-library/react';
import Bottle from './bottle';

test('renders learn react link', () => {
  render(<Bottle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
