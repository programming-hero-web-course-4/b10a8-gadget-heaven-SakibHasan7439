import { useNavigate } from "react-router-dom";
import errorImage from "/src/assets/errorPage.avif"
import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    const navigate  = useNavigate();
    return (
        <div className="flex justify-center items-center relative h-screen">
            <Helmet>
                <title>Gadget Heaven | ErrorPage</title>
            </Helmet>
            <img src={errorImage} alt="404 error image" />
            <button onClick={()=>{navigate('/')}} className="px-5 font-semibold text-black bg-white py-2 absolute bottom-[35%] lg:bottom-[39%]  xl:bottom-[29%] rounded-lg">Go Home</button>
        </div>
    );
};

export default ErrorPage;