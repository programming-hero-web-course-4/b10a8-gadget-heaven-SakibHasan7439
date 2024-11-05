import { useNavigate } from 'react-router-dom';
import hero from '/src/assets/banner.jpg'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[900px] md:h-[800px]">
            <div className="bg-purple-600 h-[440px] p-6 rounded-b-lg ">
                <div className="text-center w-10/12 lg:w-6/12 mb-8 mx-auto">
                    <h1 className="text-xl mb-6 text-white md:text-3xl lg:text-4xl font-bold">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>
                    <p className="text-white mb-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button onClick={()=>navigate('/dashboard')} className="bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-purple-700 font-semibold lg:font-bold">Shop Now</button>
                </div>
                <div className="backdrop-blur-xl mx-auto border-2 border-white rounded-xl p-4 w-11/12 lg:w-8/12 mb-12">
                <img className='object-cover rounded-xl w-full h-[450px]' src={hero} alt="banner image" />
            </div>
            </div>

        </div>
    );
};

export default Banner;