import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-transparent text-white p-5">
            <TypeAnimation
                sequence={[
                    'Welcome To This Website',
                    1000,
                    'This is an Image Gallery Website',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
                className="text-blue-900 font-bold text-2xl"
            />
        </div>
    );
};

export default Header;
