import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from '../auth/AuthModal';

function Navbar({ showModal }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <header className="bg-white h-[70px] shadow-md ">
                <nav className={`flex justify-between items-center w-[92%] mx-auto ${menuOpen ? 'top-[9%]' : ''}`}>
                    <div class="mt-3">
                        <img className="w-16" src="https://www.bizcorps.org/wp-content/uploads/2018/05/cropped-Logos-Sin-Marca-Con-fondo-02.png" alt="..." />
                    </div>
                    <div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[70px]' : '-top-full'} md:w-auto w-full  mt-3 items-center px-5 transition-all duration-300`}>
                        <ul className="flex md:flex-row flex-col md:items-center   md:gap-[4vw] gap-8">
                            <li>
                                <a className="hover:text-gray-500 font-bold" href="/home">Sintetica Ya</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500 font-bold" href="/field">Canchas</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500 font-bold" href="#">Soy un propietario</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6 mt-3">
                        <button onClick={showModal} className="bg-[#71ff74] text-black px-5 py-2 rounded-full hover:bg-[#02e506]">Sign in</button>
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
                    </div>
                </nav>
            </header>
            {menuOpen && (
                <div className="bg-gray-300 h-screen w-screen absolute top-0 left-0 z-10" onClick={() => setMenuOpen(false)}></div>
            )}
        </div>
    );
}

export default Navbar;