import React from 'react';
import './App.css';
import lucas from './images/padoca.jpg'
import amarenno from './images/amarenno.png'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={lucas} 
          nome="Lucas Cardoso" 
          descricao="Olá, meu nome é Lucas. Sou estudante na Labenu e trabalho a tarde em um restaurante. Sou apaixonado em programação e em  jogar e queria ter mais tempo para fazer os dois."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.seekpng.com/png/detail/41-415678_email-icon-vector-circle.png"
          infoTitle="E-mail"
          info="lucascardoso0221@gmail.com"
        />

        <CardPequeno
          imagem="http://cdn.onlinewebfonts.com/svg/img_413790.png"
          infoTitle="Endereço"
          info="Curitiba PR"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando para ser um profissional capacitado no mercado de trabalho de desenvolvimento web." 
        />
        
        <CardGrande 
          imagem={amarenno} 
          nome="Amarenno" 
          descricao="Trabalhando de caixa de restaurante de segunda a sexta." 
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