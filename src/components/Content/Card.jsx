import React from 'react';
import image from '../../assets/剝皮辣椒麵包-600x600.jpg';

const Card = () => {
    return (
        <div className="w-80 h-100 min-w-40 flex items-center flex-col my-8 hover:opacity-70">
            <img src={image} alt="" className='w-full aspect-w-1 aspect-h-1 h-60'/>
            <h3 className="text-black text-xl font-semibold">剝皮辣椒麵包 Hualian peeled chili pepper bread</h3>
            <div className="flex justify-between w-full">
                <p>NT$100</p>
                <button type="button" class="py-2.5 px-5 text-md font-medium text-gray-900 focus:outline-none bg-stone-50 border border-gray-800 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">加入購物車</button>
            </div>
        </div>

    );
};

export default Card;
