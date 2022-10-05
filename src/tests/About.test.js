import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Página about', () => {
  test('se a página tem h2 About Pokedex', () => {
    renderWithRouter(<About />);
    const aboutPokedex = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutPokedex).toBeInTheDocument();
  });
  test('se a página tem dois parágragos sobre a Pokedex', () => {
    renderWithRouter(<About />);
    const firstPartP1 = 'This application simulates a Pokédex, ';
    const secondPartP1 = 'a digital encyclopedia containing all Pokémons';
    const pharagraphOne = screen.getByText(firstPartP1 + secondPartP1);
    expect(pharagraphOne).toBeInTheDocument();

    const firstPartP2 = 'One can filter Pokémons by type, ';
    const secondPartP2 = 'and see more details for each one of them';
    const pharagraphTwo = screen.getByText(firstPartP2 + secondPartP2);
    expect(pharagraphTwo).toBeInTheDocument();
  });
  test('se a página contém a seguinte imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const img = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const getImgPage = screen.getByAltText('Pokédex').src;
    expect(getImgPage).toBe(img);
  });
});
