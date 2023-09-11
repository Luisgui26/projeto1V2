import {} from 'react';
import imagem2 from './imagem2.jpg'
import imagem3 from './imagem3.jpg'
import imagem4 from './imagem4.jpg'
import imagem5 from './imagem5.jpg'

const Produtos = () => {
  return (
    <div className='texto-produtos'>
      <h1>Nossos Produtos</h1>
      <ul>
        <li>Produto 1</li>
        <img src={imagem2} alt="" className='img-produtos'/>
        <li>Produto 2</li>
        <img src={imagem3} alt="" className='img-produtos'/>
        <li>Produto 3</li>
        <img src={imagem4} alt="" className='img-produtos'/>
        <li>Produto 4</li>
        <img src={imagem5} alt="" className='img-produtos'/>
      </ul>
    </div>
  );
}

export default Produtos;
