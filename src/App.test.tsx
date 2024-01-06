import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
    window.dispatchEvent(new Event('resize'));
  });

  it('Test render on mobile', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
    window.dispatchEvent(new Event('resize'));

    render(<App />);

    const mobileSection = screen.getByTestId('mobileSection');

    expect(window.getComputedStyle(mobileSection).display).toBe('block');
  });

  it('Test render on disktop', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
    window.dispatchEvent(new Event('resize'));

    render(<App />);

    const disktopSection = screen.getByTestId('disktopSection');

    expect(window.getComputedStyle(disktopSection).display).toBe('block');
  });
});
