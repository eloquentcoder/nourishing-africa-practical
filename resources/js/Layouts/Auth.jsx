import Lottie from 'react-lottie-player'

import welcomeLottie from '@/assets/assets.json'

const Auth = ({ children }) => {
    return (
        <>
            <div className="flex">
                <div className="hidden md:flex items-center flex-col md:w-1/2 bg-gradient-to-b from-[#c08a7c] to-[#d3b485] h-screen">
                    <div className="mt-16">
                        <Lottie
                            loop
                            animationData={welcomeLottie}
                            play
                            style={{ width: 400, height: 400 }}
                        />
                    </div>
                    <div className='text-white text-center'>
                        <h1 className="font-bold text-3xl">
                            Welcome to AFCHub
                        </h1>
                        <p className="text-2xs"> Create and manage companies associated to your account all in one place. <br />
                            Get paid to do the things you love without worrying about organization and management
                        </p>
                    </div>

                </div>
                <div className="w-full md:w-1/2 h-screen">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Auth;