import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Pokemon details', () => {
  const url = '/pokemons/25';
  test('se está na página correta do pokemon favoritado', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);
  });
  test('É exibido na tela um h2 com o texto <name> Details', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);

    const namePokemon = screen.getByRole('heading', { name: /pikachu details/i });
    expect(namePokemon).toBeInTheDocument();
  });
  test('É exibido na tela um h2 com o texto Summary', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);

    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();
  });
  test('É exibido na tela um texto contendo <summary>', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);

    const summary = screen.getByText(/This intelligent Pokémon/i);
    expect(summary).toBeInTheDocument();
  });
  test('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);

    const game = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(game).toBeInTheDocument();
  });
  test('São exibidas na tela imagens de localização com o src correto', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);

    const imgs = screen.getAllByAltText('Pikachu location');
    expect(imgs[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgs[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('São exibidas na tela imagens de localização com o src correto', () => {
    const { history } = renderWithRouter(<App />);

    const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(buttonMoreDetails).toBeInTheDocument();
    userEvent.click(buttonMoreDetails);
    expect(history.location.pathname).toBe(url);

    const label = screen.getByLabelText('Pokémon favoritado?');
    expect(label).toBeInTheDocument();
  });
});
