import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Brasil',
      corPrimaria: '#009c3b',
      corSecundaria:'#FFE11F',
      corTexto: '#1651B8',
    },

    {
      nome:'Argentina',
      corPrimaria: '#FCBF49',
      corSecundaria: '#75AADB',
      corTexto: '#ffffff',
    },
    
    {
      nome:'Africa do Sul',
      corPrimaria: '#000000',
      corSecundaria: '#007C59',
      corTexto: '#FCB514',
    },
    
    {
      nome:'Alemanha',
      corPrimaria: '#FF0000',
      corSecundaria: '#030303',
      corTexto: '#FFCC00',
    },

    {
      nome:'Australia',
      corPrimaria: '#FFFFFF',
      corSecundaria: '#002B7F',
      corTexto: '#E8112D',
    },

    {
      nome:'Canada',
      corPrimaria: '#FFFFFF',
      corSecundaria: '#FF0000',
      corTexto: '#ffffff',
    },

    {
      nome:'China',
      corPrimaria: '#ffff00',
      corSecundaria: '#EE1C25',
      corTexto: '#ffff00',
    },

    {
      nome:'Colombia',
      corPrimaria: '#C8102E',
      corSecundaria: '#FFCD00',
      corTexto: '#003087',
    },

    {
      nome:'Coreia do Sul',
      corPrimaria: '#0047A0',
      corSecundaria: '#FFffff',
      corTexto: '#CD2E3A',
    },

    {
      nome:'Costa Rica',
      corPrimaria: '#e4312b',
      corSecundaria: '#003772',
      corTexto: '#ffffff',
    },

    {
      nome:'Dinamarca',
      corPrimaria: '#ffffff',
      corSecundaria: '#c9072a',
      corTexto: '#ffffff',
    },

    {
      nome:'Espanha',
      corPrimaria: '#AA151B',
      corSecundaria: '#F1BF00',
      corTexto: '	#AA151B',
    },

    {
      nome:'Estados Unidos',
      corPrimaria: '#0A3161',
      corSecundaria: '#ffffff',
      corTexto: '#B31942',
    },

    {
      nome:'Filipinas',
      corPrimaria: '#CF0921',
      corSecundaria: '#0035aa',
      corTexto: '#FCD20F',
    },

    {
      nome:'França',
      corPrimaria: '#EE2436',
      corSecundaria:'#001E96',
      corTexto: '#ffffff',
    },

    {
      nome:'Haiti',
      corPrimaria: '#ffffff',
      corSecundaria: '#D21034',
      corTexto: '#00209F',
    },
    
    {
      nome:'Holanda',
      corPrimaria: '#AE1C28',
      corSecundaria: '#21468B',
      corTexto: '#ffffff',
    },

    {
      nome:'Inglaterra',
      corPrimaria: '#CE1F2D',
      corSecundaria: '#ffffff',
      corTexto: '#CE1F2D',
    },

    {
      nome:'Irlanda',
      corPrimaria: '#FF7903',
      corSecundaria: '#039B48',
      corTexto: '#ffffff',
    },

    {
      nome:'Itália',
      corPrimaria: '#CF2B36',
      corSecundaria: '#ffffff',
      corTexto: '#049246',
    },

    {
      nome:'Jamaica',
      corPrimaria: '#029938',
      corSecundaria: '#030303',
      corTexto: '#FED101',
    },

    {
      nome:'Japão',
      corPrimaria: '#BB002A',
      corSecundaria: '#ffffff',
      corTexto: '#BB002A',
    },

    {
      nome:'Marrocos',
      corPrimaria: '#23532E',
      corSecundaria: '#C3272E',
      corTexto: '#23532E',
    },

    {
      nome:'Nigéria',
      corPrimaria: '#FFFFFF',
      corSecundaria: '#018651',
      corTexto: '#FFFFFF',
    },

    {
      nome:'Noruega',
      corPrimaria: '#EF2B2D',
      corSecundaria: '#022867',
      corTexto: '#ffffff',
    },

    {
      nome:'Nova Zelândia',
      corPrimaria: '#ffffff',
      corSecundaria: '#01247E',
      corTexto: '#C7132E',
    },

    {
      nome:'Panamá',
      corPrimaria: '#ffffff',
      corSecundaria: '#DC0912',
      corTexto: '#011E56',
    },

    {
      nome:'Portugal',
      corPrimaria: '#FF0301',
      corSecundaria: '#046603',
      corTexto: '#F7F70B',
    },

    {
      nome:'Suécia',
      corPrimaria: '#FDCC03',
      corSecundaria: '#0369A7',
      corTexto: '#FDCC03',
    },

    {
      nome:'Suíça',
      corPrimaria: '#ffffff',
      corSecundaria: '#E11F11',
      corTexto: '#ffffff',
    },

    {
      nome:'Vietnã',
      corPrimaria: '#CD0E16',
      corSecundaria: '#FFFF0B',
      corTexto: '#CD0E16',
    },

    {
      nome:'Zâmbia',
      corPrimaria: '#DE2010',
      corSecundaria: '#198900',
      corTexto: '#EF7D00',
    },



    

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      
     
      {times.map(time => <Time  
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        corTexto={time.corTexto}
        colaboradores={colaboradores.filter(colaborador => colaborador.timeAtual === time.nome)}
      />)} 

    </div>
  );
}

export default App;
