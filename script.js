/* Definição de Variáveis de Cores (Facilita o reuso) */
:root {
  --azul-visioseg: #0E4181;
  --ciano-visioseg: #009B9E;
  --fundo-site: #F4F6F8;
  --cor-texto: #1E293B;
}

/* Aplicando ao Fundo e Texto Geral */
body {
  background-color: var(--fundo-site);
  color: var(--cor-texto);
  font-family: Arial, sans-serif;
}

/* Títulos principais em Azul */
h1, h2 {
  color: var(--azul-visioseg);
}

/* Botões em Ciano/Verde Água */
button, .btn {
  background-color: var(--ciano-visioseg);
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

/* Efeito ao passar o mouse no botão */
button:hover {
  background-color: var(--azul-visioseg);
}

/* 7. Estilos do Botão de Menu (Mobile) */
#btn-menu {
    background-color: transparent; /* Remove o fundo cinza padrão */
    border: none; /* Remove a borda padrão do navegador */
    color: rgb(14, 7, 7); /* Mantém a cor branca para contrastar com o header azul escuro */
    font-size: 30px; /* Aumenta o tamanho do símbolo ☰ */
    cursor: pointer; /* Transforma o mouse em "mãozinha" ao passar por cima */
    margin-top: 10px;
}

/* 8. Classe de controle para o JavaScript */
.menu-escondido {
    display: none; /* Oculta a lista de links por padrão na tela pequena */
}
/* 10. REGRAS PARA TELAS GRANDES (A partir de 768px - Tablets e PCs) */
@media (min-width: 768px) {
   
    /* 1. Transforma o cabeçalho para alinhar Logo na esquerda e Menu na direita */
    .cabecalho {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* 2. Esconde o botão hambúrguer, pois no PC ele não é necessário */
    #btn-menu {
        display: none;
    }

    /* 3. Força o menu a ficar sempre visível no PC (anula o bloqueio do JS) */
    #navegacao {
        display: block !important;
    }

    /* 4. Coloca os links um do lado do outro usando Flexbox */
    .lista-links {
        display: flex;
        gap: 30px; /* Distância exata de 30px entre cada link */
        margin-top: 0;
    }
}
/* 9. Estilo da lista de links */
.lista-links {
    list-style: none; /* Remove as "bolinhas" padrão da lista */
    margin-top: 15px;
    padding: 0;
    text-align: center; /* Centraliza os links no celular */
}

.lista-links li {
    margin-bottom: 15px; /* Dá um respiro entre um link e outro */
}

.lista-links a {
    color: rgb(0, 0, 0); /* Cor do texto do link */
    text-decoration: none; /* Remove o sublinhado padrão */
    font-size: 18px;
    font-weight: bold;
}

.lista-links a:hover {
    color: #000000; /* Muda a cor do link ao passar o mouse */

}
/* 10. REGRAS PARA TELAS GRANDES (A partir de 768px - Tablets e PCs) */
@media (min-width: 768px) {
   
    /* 1. Transforma o cabeçalho para alinhar Logo na esquerda e Menu na direita */
    .cabecalho {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* 2. Esconde o botão hambúrguer, pois no PC ele não é necessário */
    #btn-menu {
        display: none;
    }

    /* 3. Força o menu a ficar sempre visível no PC (anula o bloqueio do JS) */
    #navegacao {
        display: block !important;
    }

    /* 4. Coloca os links um do lado do outro usando Flexbox */
    .lista-links {
        display: flex;
        gap: 30px; /* Distância exata de 30px entre cada link */
        margin-top: 0;
    }
}
/* 11. Estilo do Botão de Tema */
#btn-tema {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    width: auto;
    margin-right: 0;
}

/* 12. A Classe Global do Tema Escuro (Inversão de Cores) */
.tema-escuro {
    background-color: #1a1a1a;
    color: #f4f4f4;
}
/* Força as tags filhas a herdarem a cor no tema escuro */
.tema-escuro header, .tema-escuro form, .tema-escuro blockquote {
    background-color: #333333;
    color: #f4f4f4;
    border-color: #555555;
}

/* 13. O Botão Flutuante (Position Fixed) */
#btn-topo {
    position: fixed; /* Congela na tela */
    bottom: 30px;
    right: 30px;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 15px 20px;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    transition: 0.3s;
    z-index: 999; /* Garante que ficará na frente de tudo */
}

/* Classe de controle para o JS esconder o botão do topo */
.escondido {
    opacity: 0;
    pointer-events: none;
}

/* 14. A Barra de Progresso de Leitura */
#barra-progresso {
    position: fixed;
    top: 0;
    left: 0;
    width: 0%; /* Inicia zerada, o JS vai aumentar esse valor */
    height: 5px;
    background-color: #e74c3c; /* Vermelho vivo para destacar */
    z-index: 1000;
}
/* 15. Estilizando o Fundo do Modal */
#fundo-modal {
    position: fixed; /* Prende na tela inteira */
    top: 0;
    left: 0;
    width: 100vw; /* 100% da largura da tela */
    height: 100vh; /* 100% da altura da tela */
    background-color: rgba(0, 0, 0, 0.7); /* Preto com 70% de transparência */
    z-index: 2000; /* Fica na frente de TODO o resto do site */
   
    /* Flexbox para centralizar a caixa branca perfeitamente no meio */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 16. A Caixa Branca do Modal */
.caixa-modal {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px; /* Não deixa ficar gigante no PC */
    text-align: center;
    position: relative; /* Necessário para posicionar o X de fechar */
}

/* Garante que o Modal fique com cor correta mesmo se o Tema Escuro estiver ativo */
.tema-escuro .caixa-modal {
    background-color: #222222;
    color: white;
}

/* 17. O Botão de Fechar (X) */
#btn-fechar-modal {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #e74c3c; /* Vermelho */
    width: auto;
    margin: 0;
    padding: 0;
}

/* 18. Botão Genérico de Destaque */
.btn-destaque {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    width: max-content;
    display: block
    margin 20px auto;
}
/* Controla a altura máxima do carrossel */
.carousel-item img {
  height: 450px;         /* Altere esse valor se quiser mais alto ou mais baixo */
  object-fit: cover;     /* Recorta a imagem perfeitamente sem esticar */
  object-position: center; /* Centraliza o foco da foto */
}
/* Variáveis da marca VISIOSEG */
:root {
  --azul-visioseg: #0E4181;
  --ciano-visioseg: #009B9E;
  --fundo-site: #F4F6F8;
  --cor-texto: #1E293B;
}

/* Estilo do Cabeçalho Fixo */
.cabecalho {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Alinhamento dos itens (Logo, Links e Botão) */
.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
}

/* Tamanho da Logo no Menu */
.logo img {
  height: 45px;
  width: auto;
}

/* Estilo dos Links do Menu */
.lista-links {
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.lista-links a {
  text-decoration: none;
  color: var(--cor-texto);
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.lista-links a:hover {
  color: var(--ciano-visioseg);
}

/* Botão de Tema (Modo Escuro/Claro) */
#btn-tema {
  background: transparent;
  border: 1px solid #ddd;
  font-size: 1.2rem;
  padding: 6px 12px;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease;
}

#btn-tema:hover {
  background-color: #f0f0f0;
}

/* Seção Hero (Títulos abaixo do Menu) */
.hero-section {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f4f6f8 0%, #e2e8f0 100%);
}

.hero-section h1 {
  color: var(--azul-visioseg);
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.hero-section h2 {
  color: var(--cor-texto);
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto 20px auto;
  line-height: 1.5;
}

.hero-section .slogan {
  color: var(--ciano-visioseg);
  font-weight: bold;
  font-size: 1.1rem;
}
/* Container Geral da Seção */
.secao-servicos {
  padding: 50px 20px;
  background-color: #F4F6F8;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Títulos das Seções */
.titulo-secao {
  color: #0E4181; /* Azul da VISIOSEG */
  font-size: 1.8rem;
  margin-bottom: 25px;
  border-left: 5px solid #009B9E; /* Detalhe Ciano */
  padding-left: 12px;
}

.secao-margem {
  margin-top: 50px;
}

/* --- GRID DE SERVIÇOS (CARTÕES) --- */
.grid-servicos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card-servico {
  background-color: #ffffff;
  padding: 25px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 15px;
}

.card-servico:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(14, 65, 129, 0.15);
  border-color: #009B9E;
}

.icone-servico {
  font-size: 1.8rem;
  background-color: #E6F5F5;
  padding: 10px;
  border-radius: 8px;
}

.card-servico h3 {
  margin: 0;
  color: #1E293B;
  font-size: 1.1rem;
}

/* --- GRID DE SETORES (TAGS) --- */
.grid-setores {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
}

.item-setor {
  background-color: #ffffff;
  padding: 12px 18px;
  border-radius: 8px;
  border-left: 3px solid #0E4181;
  font-weight: 600;
  color: #1E293B;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  transition: background 0.3s ease, color 0.3s ease;
}

.item-setor:hover {
  background-color: #0E4181;
  color: #ffffff;
}
/* Padronização dos Cards VISIOSEG */
.card-visioseg {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border-radius: 12px !important;
}

.card-visioseg:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(14, 65, 129, 0.15) !important;
}

/* Controle padronizado do tamanho das imagens dos cards */
.card-img-container {
  height: 200px; /* Mantém todas as imagens na mesma altura */
  overflow: hidden;
}

.card-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Evita que a foto fique esticada */
}

/* Título no tom de azul VISIOSEG */
.titulo-card {
  color: #0E4181;
  font-weight: bold;
}

/* Botão personalizado da marca */
.btn-visioseg {
  background-color: #009B9E; /* Ciano VISIOSEG */
  color: #ffffff;
  font-weight: 600;
  border: none;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.btn-visioseg:hover {
  background-color: #0E4181; /* Fica azul ao passar o mouse */
  color: #ffffff;
}
/* Seção de Parceiros e Logos */
.secao-parceiros {
  padding: 40px 20px;
  background-color: #ffffff;
}

.subtitulo-secao {
  color: #0E4181; /* Azul VISIOSEG */
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: bold;
}

/* Ajuste da Logo VISIOSEG */
.img-logo {
  max-width: 350px; /* Reduz de 500px para não ficar gigante em telas menores */
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
}

/* Divisor elegante */
.divisor-secao {
  border: 0;
  height: 1px;
  background: #e2e8f0;
  margin: 30px 0;
}

/* Card do Parceiro */
.card-parceiro {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #F4F6F8;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #009B9E; /* Detalhe Ciano */
  max-width: 600px;
}

.img-parceiro {
  max-width: 120px;
  height: auto;
  border-radius: 6px;
}

.info-parceiro p {
  margin: 0 0 10px 0;
  color: #1E293B;
  font-size: 0.95rem;
}

/* Link estilizado como botão discreto */
.btn-link-parceiro {
  display: inline-block;
  color: #0E4181;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.btn-link-parceiro:hover {
  color: #009B9E;
  text-decoration: underline;
}

/* Suporte para celular */
@media (max-width: 600px) {
  .card-parceiro {
    flex-direction: column;
    text-align: center;
  }
}
/* Container de Parceiros */
.bloco-parceiro {
  padding: 30px 0;
}

.subtitulo-secao {
  color: #0E4181; /* Azul VISIOSEG */
  font-size: 1.6rem;
  margin-bottom: 25px;
  font-weight: bold;
  border-left: 4px solid #009B9E;
  padding-left: 10px;
}

/* Grid para alinhar 2 parceiros por linha no desktop */
.grid-parceiros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Card Individual de cada Parceiro */
.card-parceiro {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-parceiro:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(14, 65, 129, 0.12);
  border-color: #009B9E;
}

/* Imagem/Logo de cada parceiro */
.img-parceiro {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #F4F6F8;
  flex-shrink: 0;
}

/* Informações internas do Card */
.info-parceiro h5 {
  margin: 0 0 5px 0;
  color: #0E4181;
  font-size: 1.1rem;
  font-weight: bold;
}
/* Estilização do Formulário VISIOSEG */
.form-contato-visioseg {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  max-width: 600px;
  margin: 0 auto;
}

/* Cor das labels */
.form-contato-visioseg .form-label {
  color: #0E4181; /* Azul VISIOSEG */
}

/* Efeito ao clicar nos campos de texto */
.form-contato-visioseg .form-control:focus {
  border-color: #009B9E; /* Bordas ficam Ciano */
  box-shadow: 0 0 0 0.25rem rgba(0, 155, 158, 0.25);
}

/* Botão do Formulário */
.btn-enviar-visioseg {
  background-color: #009B9E; /* Ciano */
  color: #ffffff;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-enviar-visioseg:hover {
  background-color: #0E4181; /* Troca para Azul no hover */
  color: #ffffff;
}
/* Estilo Principal do Rodapé */
.rodape-site {
  background-color: #0E4181; /* Azul escuro da VISIOSEG */
  color: #ffffff;
  padding: 40px 20px 10px 20px;
  margin-top: 50px;
}

/* Alinhamento Lado a Lado (Flexbox) */
.container-rodape {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}

/* Colunas individuais */
.coluna-rodape {
  flex: 1;
  min-width: 220px;
}

.titulo-coluna {
  color: #009B9E; /* Ciano VISIOSEG */
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.coluna-rodape p {
  margin: 0;
  font-size: 0.95rem;
  color: #e2e8f0;
}

/* Links do E-mail */
.link-email {
  color: #ffffff;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.3s ease;
}

.link-email:hover {
  color: #009B9E;
}

/* Botões do Rodapé */
.btn-rodape, .btn-destaque {
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s ease;
}
