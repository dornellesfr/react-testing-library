import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testes component FavoritePokemon', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemons />);
    const textNotFound = screen.getByText('No favorite pokemon found');
    expect(textNotFound).toBeInTheDocument();
  });
});
