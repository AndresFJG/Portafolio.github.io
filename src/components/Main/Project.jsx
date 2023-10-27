import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Marketplace.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Marketplace</h3>
                            <p>
                                Marketplace of NFTS
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Ganache-Cli
                                <span> -</span> Truffle
                                <span> -</span> Infura
                                <span> -</span> Tailwind CSS
                                <span> -</span> NodeJS
                                <span> -</span> CometChat SDK
                                <span> -</span> Yarn
                                <span> -</span> Metamask
                            </p>
                            <a href="https://etermarket.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./justice.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Justice</h3>
                            <p>
                                lawyers website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> PHP
                            </p>
                            <a href="https://justiceeter.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Bienesr.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Bienes raices</h3>
                            <p>
                                Bienes raices website
                            </p>
                            <p className="tecnologias">
                                PHP
                                <span> -</span> Scss
                                <span> -</span> NodeJS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://bienesraicesafjg.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./festival.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Rock & Event</h3>
                            <p>
                                Festival
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://festivalafjg.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Cafe.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Blog Café</h3>
                            <p>
                               Coffe website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                   </p>
                            <a href="https://cafeafjg.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./DappWorks.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Dapp Work</h3>
                            <p>
                                Freelancer Marketplace
                            </p>
                            <p className="tecnologias">
                            React
                                <span> -</span> Node.js
                                <span> -</span> Solidity
                                <span> -</span> CometChat SDK
                                <span> -</span> Tailwind CSS
                                <span> -</span> MetaMask
                                <span> -</span> Yarn
                            </p>
                            <a href="https://dappsworketer.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Cinema.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Cinema </h3>
                            <p>
                                ETH Cinema
                            </p>
                            <p className="tecnologias">
                            React
                                <span> -</span> Node.js
                                <span> -</span> Solidity
                                <span> -</span> CometChat SDK
                                <span> -</span> Tailwind CSS
                                <span> -</span> MetaMask
                                <span> -</span> Yarn
                            </p>
                            <a href="https://cinemaeter.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./loteria2.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Loteria Blockchain</h3>
                            <p>
                                Loteria website
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Solidity
                                <span> -</span> Truffle
                                <span> -</span> Metamask
                                <span> -</span> NodeJS
                                <span> -</span> Boostrap
                            </p>
                            <a href="https://eterlotery.netlify.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);