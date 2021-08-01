import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada texto='Código' valor={id} className='mb-5' somenteLeitura />
      ) : (
        false
      )}
      <Entrada
        texto='Nome'
        valor={nome}
        valorMudou={setNome}
        className='mb-5'
      />
      <Entrada
        texto='Idade'
        valor={idade}
        valorMudou={setIdade}
        tipo='number'
      />
      <div className='flex justify-end mt-7'>
        <Botao cor='blue' className='mr-2'>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor='gray'>Cancelar</Botao>
      </div>
    </div>
  );
}
