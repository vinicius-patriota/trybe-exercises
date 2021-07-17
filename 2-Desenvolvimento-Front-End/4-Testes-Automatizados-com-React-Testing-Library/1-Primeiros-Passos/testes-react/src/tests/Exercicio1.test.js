import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

describe('Testando o button e sua funcionalidade', () => {
  it('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const buttonAdd = getByText('Adicionar');
    
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  it('Verifica se o botao ao ser clicado salva a tarefa digitada pelo usuario', () => {
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');

    fireEvent.change(inputTask, { target: { value: 'Beber agua!' } });
    expect(queryByText('Beber agua!')).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText('Beber agua!')).toBeInTheDocument();
  });
});