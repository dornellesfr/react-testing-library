import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

describe('Component pokemon', () => {
  test('A imagem do pokemon possui o src e Alt correto', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const img = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imgPikachu = screen.getByAltText('Pikachu sprite');

    expect(imgPikachu).toBeInTheDocument();
    expect(imgPikachu).toHaveAttribute('src', img);
  });
  test('A imagem de favorito possui o src /star-icon.svg', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const imgStar = '/star-icon.svg';
    const markedAsFavorite = screen.getByAltText('Pikachu is marked as favorite');

    expect(markedAsFavorite).toBeInTheDocument();
    expect(markedAsFavorite).toHaveAttribute('src', imgStar);
  });
  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const typePokemon = 'Electric';
    const getPokemonType = screen.getByTestId('pokemon-type');

    expect(getPokemonType).toBeInTheDocument();
    expect(getPokemonType).toHaveTextContent(typePokemon);
  });
  test('É exibido na tela um link com o href /pokemons/<id>', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);

    const linkTo = '/pokemons/25';
    const moreDetails = screen.getByRole('link', { name: 'More details' });

    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails).toHaveAttribute('href', linkTo);
  });
});
