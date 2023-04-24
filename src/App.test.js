import { test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';
import { expect } from '@jest/globals';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    // Проверяем, что элемент содержит текст "learn" и "react"
    const hasLearnText = content.startsWith('learn');
    const hasReactText = content.endsWith('react');
    const isLinkElement = element.tagName.toLowerCase() === 'a';
    return hasLearnText && hasReactText && isLinkElement;
  });
  expect(linkElement).toBeInTheDocument();
});