import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

describe('Teste de Componentes:', () => {
  test('Verifica se o Component Home e renderizado somente no path="/"', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/');
    const homeContainer = screen.getByTestId('home-container');

    expect(homeContainer).toBeInTheDocument();
  });

  test('Verifica se o Link para o path="/projects" renderiza o Component Projects', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);

    fireEvent.click(getByText('Projects'));
    const projectsContainer = getByTestId('projects-container');

    expect(projectsContainer).toBeInTheDocument();
  })

  test('Verifica se o Link para o path="/about" renderiza o Component About', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);

    fireEvent.click(getByText('About'));
    const aboutContainer = getByTestId('about-container');

    expect(aboutContainer).toBeInTheDocument();
  })

  test('Verifica se o Link para o path="/contact" renderiza o Component Contact', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);

    fireEvent.click(getByText('Contact'));
    const contactContainer = getByTestId('contact-container');

    expect(contactContainer).toBeInTheDocument();
  })

  test('Verifica se o Component NotFound e renderizado caso o path fornecido seja invalido', () => {
    const { getByTestId, history } = renderWithRouter(<App />);

    history.push('/path-invalido');
    const notFoundContainer = getByTestId('notfound-container');
    expect(notFoundContainer).toBeInTheDocument();

    history.push('/');
    expect(notFoundContainer).not.toBeInTheDocument();
  })

  test('Verifica se os Links do Component Projects para o path="/project/:id" renderizam o Component Project', () => {
    const { getByTestId, getByText, history } = renderWithRouter(<App />);

    const projectsContainer = getByTestId('projects-container');
    expect(projectsContainer).toBeInTheDocument();

    history.push('/project/1')
    const projectContainer = getByTestId('project-container');
    expect(projectContainer).toBeInTheDocument();

    fireEvent.click(getByText('Projects'))

    history.push('/project/4');
    expect(projectContainer).not.toBeInTheDocument();
  });
});