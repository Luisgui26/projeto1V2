import {} from 'react';
import imagem1 from './imagem1.jpg'
const Sobre = () => {
  return (
    <div className='texto-sobre'>
      <h1>Sobre Nós</h1>
      <img src={imagem1} alt="imagem"  className='img-sobre'/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit deserunt, fugit repellendus, numquam ipsum ratione iste nemo fugiat, corporis quod hic deleniti porro incidunt reprehenderit! Unde dolor enim fuga.</p>
    </div>
  );
}

export default Sobre;
