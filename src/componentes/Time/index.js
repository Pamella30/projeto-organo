import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria, color: props.corTexto }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                key={colaborador.nome} 
                nome={colaborador.nome}
                posicao={colaborador.posicao}
                imagem={colaborador.imagem}
                corDeFundo={props.corPrimaria}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time