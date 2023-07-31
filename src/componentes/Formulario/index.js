import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [timeAtual, setTimeAtual] = useState('')
    const [imagem, setImagem] = useState('')
    const [times, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
         nome, 
         posicao, 
         timeAtual, 
         imagem
        })

        setNome('')
        setPosicao('')
        setTimeAtual('')
        setImagem('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto 
                    label="Nome" 
                    obrigatorio={true} 
                    placeholder="Digite o nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto 
                    label="Posicao" 
                    obrigatorio={true} 
                    placeholder="Digite a posicao"
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)} />
                <CampoTexto 
                    label="Time atual" 
                    obrigatorio={true} 
                    placeholder="Digite o time atual"
                    valor={timeAtual}
                    aoAlterado={valor => setTimeAtual(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                    label="Times" 
                    obrigatorio={true} 
                    itens={props.times.sort()}
                    valor={times}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar card
                </Botao>
                
            </form>
        </section>
    )
}



export default Formulario