import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

import FormField from '../../../components/FormField';

function CadastroCategoria() {


    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>
            <form onSubmit={function handleSubmit(evento) {
                evento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);

            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                    <textarea type="text" name="descricao" value={values.descricao} onChange={handleChange} />
                    </label>
                </div>

                <FormField
                    label="Cor"
                    type="color"
                    name="cor" value={values.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>
            </form>



            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;
