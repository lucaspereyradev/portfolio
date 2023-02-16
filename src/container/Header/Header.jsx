import { useContext } from 'react';
import HeroVideo from '../../assets/videos/hero.mp4';
import Typewriter from 'typewriter-effect';
import { LangContext } from '../../App';
import { AppWrap } from '../../wrapper';

const Header = (props) => {
    const lang = props.lang.header;

    const handleDropdown = () => {
        const dropdown = document.getElementById('dropdown');
        dropdown.classList.toggle('hidden');
    };

    return (
        <>
            <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden p-7 text-white">
                <div className="absolute top-0 left-0 h-full w-screen overflow-hidden">
                    <video
                        className="h-full w-full object-cover"
                        src={HeroVideo}
                        autoPlay
                        loop
                        muted
                    ></video>
                    <div className="absolute top-0 left-0 h-full w-full bg-black/70"></div>
                    <div className="absolute top-0 left-0 m-auto flex h-full w-full flex-col items-center justify-center text-center 2xl:-top-12">
                        <h1 className="mb-4 text-5xl font-semibold md:text-6xl">Lucas Pereyra</h1>
                        <span className="text-xl">
                            <Typewriter
                                options={{
                                    strings: ['Desarrollador Frontend', 'Full Stack JavaScript'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 110,
                                    deleteSpeed: 100,
                                    pauseFor: 1500,
                                }}
                            />
                        </span>
                        <div className="mt-7 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                            <button className="rounded-xl bg-emerald-500 px-4 py-2 text-white shadow-lg shadow-emerald-700/60 transition hover:bg-emerald-700">
                                <a href="#Proyectos">Ver Proyectos</a>
                            </button>
                            <button
                                className="relative rounded-xl bg-emerald-500 px-4 py-2 text-white shadow-lg shadow-emerald-700/60 transition hover:bg-emerald-700"
                                onClick={handleDropdown}
                            >
                                <i className="fa-solid fa-download" /> <span>Descargar CV</span>
                                <div
                                    id="dropdown"
                                    className="absolute mt-2 hidden w-max min-w-full -translate-x-4 rounded-xl bg-white shadow-md"
                                >
                                    <ul className="rounded-sm text-left text-CustomBlack">
                                        <li className="border-b px-5 py-2">
                                            <a
                                                href="./cv-lucaspereyra-español.pdf"
                                                download="./cv-lucaspereyra-español.pdf"
                                            >
                                                Español
                                            </a>
                                        </li>
                                        <li className="px-5 py-2">
                                            <a
                                                href="./cv-lucaspereyra-english.pdf"
                                                download="./cv-lucaspereyra-english.pdf"
                                            >
                                                Inglés
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppWrap(Header, lang.header.redirect, '', 'absolute h-full');
