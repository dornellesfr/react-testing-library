import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testes component FavoritePokemon', () => {
  test('se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
  test('se existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const img = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const textAlt = 'Pikachu crying because the page requested was not found';
    const getImgPage = screen.getByAltText(textAlt).src;
    expect(getImgPage).toBe(img);
  });
});
