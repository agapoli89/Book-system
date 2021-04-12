import { render, screen } from '@testing-library/react';
import Login from './Login'; 

test('renders Logowanie', () => {
    render(<Login />);
    expect(screen.getByText(/logowanie/i)).toBeInTheDocument();
});

