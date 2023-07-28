import React from 'react';
import '../css/Content.css';
import Card from './Content/Card.jsx';

const Navigation = () => {
    return (
        <div className=' mt-28 flex justify-center font-bold italic text-xl mx-auto w-4/6 h-full flex-col '>
            <span className='text-center mt-4 mb-2 text-3xl'>DELICATESSE烘焙坊</span>
            <span className='text-center mt-2 mb-4 text-sm'>DELICATESSE烘焙坊-高雄洲際酒店</span>
            <hr className='border-t border-black'/>
            <div className='text-sm ml-auto mt-2 mb-2 font-normal '>顯示第1-9項結果</div>
            <hr className='border-t border-black'/>
            <div className='justify-center place-items-center mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default Navigation;
