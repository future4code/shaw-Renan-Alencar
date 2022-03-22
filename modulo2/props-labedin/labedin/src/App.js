import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CarPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import avatar from './img/avataaars.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={avatar}
          nome="Renan Martinez Alencar" 
          descricao="Oi, eu sou o Renan. Sou estudante do curso full stack da Labenu e adoro trabalhar com tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/6819/6819501.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CarPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/725/725643.png"
        info="Email"
        valor="renan.martinez@labenu.com.br"
        />

        <CarPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/17/17589.png"
        info="Endereço"
        valor="Av. Paulista"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Blue Layer" 
          descricao="Prestação de serviços em desenvolvimento e manutenção de sites e sistemas." 
        />
        
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="HITSS DO BRASIL SERVIÇOS TECNOLÓGICOS" 
          descricao="Responsável pelo suporte a infraestrutura do grupo Amil Assistência 
          Médica, analisando erros e identificando soluções. Configuração e distribuição de máquinas, 
          configuração de software, Windows, smartphone. Acompanhamento de projetos. Atendimento 
          aos usuários e executivos local e remotamente. Suporte em videoconferência." 
        />

        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome=" TIVIT" 
          descricao="Responsável pelo suporte nas hidrelétricas do grupo Votorantim no 
          Brasil, configuração e distribuição de máquina, celular e modem para o usuário, 
          acompanhamento de inventario de máquinas e incidentes não solucionados, administração de 
          usuários pelo Active Directory." 
        />
      </div>
      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
