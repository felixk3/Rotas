import { useState } from 'react'
import './style/Header.css'
import Bannerimage  from './img/banner/christmas.jpg'
import Wacth from  './img/produto/Smartwatch.webp'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


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
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>

            <div className='card-produto'>
                <div className='image'><img src={Wacth} alt="" /></div>
                <div className='prod-info'>
                    <div className='nome'>Smart Wacth Ultra Power</div>
                    <div className='preco'>2500 MT</div>
                    <div className='quantidade'>disponive: 595</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header
