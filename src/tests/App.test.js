import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testar o App.js', () => {
  test('se o topo da aplicação tem um link com text: Home, About e Favorite ', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: 'Home' });
    const linkAbout = screen.getByRole('link', { name: 'About' });
    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(linkHome).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });
  test('se a pagina vai para / clicando no botão home', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: 'Home' });
    expect(linkHome).toBeInTheDocument();

    userEvent.click(linkHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('se a página vai para url /about clicando no botão about', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: 'About' });
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('se a página vai para url /favorites clicando no botão favorites', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(linkFavorite).toBeInTheDocument();

    userEvent.click(linkFavorite);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test('se a página /not-found vai para página not found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/not-found');
    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
