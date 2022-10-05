import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import Pokedex from '../pages/Pokedex';

describe('Teste componente Pokedex', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ { } } />);
    const nextPokemon = screen.getByRole('button', { name: 'Próximo pokémon' });

    pokemons.forEach((pokemon) => {
      const pokemonType = screen.getByRole('button', { name: pokemon.type });
      expect(pokemonType).toBeInTheDocument();
      userEvent.click(nextPokemon);
    });
  });
  test('botões filtrar por tipo tem data-testid=pokemon-type-button menos o All', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ { } } />);
    const buttonsTypes = screen.getAllByTestId('pokemon-type-button');
    const lenButton = 7;
    expect(buttonsTypes).toHaveLength(lenButton);
  });
  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ { } } />);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    userEvent.click(buttonAll);
    expect(buttonAll).toBeInTheDocument();
  });
});
