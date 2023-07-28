import React from 'react';
import icon1 from '../assets/icon/search.png'
import icon2 from '../assets/icon/shopping-cart.png'
import icon3 from '../assets/icon/user.png'

const Navigation = () => {
    return (
        <nav className="bg-white py-4 px-8 fixed top-0 left-0 w-full h-28 items-center justify-end flex opacity-70 shadow-custom ">
            <ul className="flex space-x-4 mr-10">
                <li><a href="/" className="text-black font-bold italic text-xl">ahan is beautiful</a></li>
                <li className="flex items-center space-x-4 ml-auto">
                    <a href="/"><img className="w-8 h-8" src={icon1} alt="Icon 1" ></img></a>
                    <a href="/"><img className="w-8 h-8" src={icon2} alt="Icon 2" ></img></a>
                    <a href="/"><img className="w-8 h-8" src={icon3} alt="Icon 3" ></img></a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
