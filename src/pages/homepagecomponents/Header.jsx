import { useState } from 'react';
import './style/Header.css';
import Bannerimage from './img/banner/christmas.jpg';
import Wacth from './img/produto/Smartwatch.webp';
import { Link } from 'react-router-dom';  // Importando o Link

function Header() {
  return (
    <div className='Header'>
        <div className='banner'>
            <div className="overlay"></div>
            <img src={Bannerimage} alt="" />
            <div className="banner-text">
                🌟 Oferta Especial! 🌟
                Aproveite descontos incríveis em nossos produtos!
                🔹 Até 50% OFF em itens selecionados!
                Não perca essa chance única! ⏳
            </div>
        </div>

        <div className='produtos'>
            <div className='card-produto'>
                <Link to="/detalhe">  {/* Usando Link corretamente */}
                    <button>
                        <div className='image'>
                            <img src={Wacth} alt="Smart Watch" />
                        </div>
                        <div className='prod-info'>
                            <div className='nome'>Smart Watch Ultra Power</div>
                            <div className='preco'>2500 MT</div>
                            <div className='quantidade'>disponível: 595</div>
                        </div>
                    </button>
                </Link>
            </div>

            {/* Os outros produtos podem ser semelhantes, então vou deixar um exemplo de outro produto */}
            <div className='card-produto'>
                <div className='image'>
                    <img src={Wacth} alt="" />
                </div>
                <div className='prod-info'>
                    <div className='nome'>Smart Watch Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponível: 595</div>
                </div>
            </div>

            {/* Aqui podem continuar os outros cards de produto */}
        </div>
    </div>
  );
}

export default Header;
