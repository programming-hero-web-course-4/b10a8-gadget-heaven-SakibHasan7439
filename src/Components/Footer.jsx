const Footer = () => {
    return (
        <footer className=" bg-white text-base-content p-10">
            <div className="text-center pb-6 border-b-2 mb-6">
                <h2 className="text-xl md:text-2xl md:font-bold mb-3 font-semibold">Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="footer justify-around">
                <nav>
                    <h6 className="footer-title text-black opacity-100">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black opacity-100">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-black opacity-100">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;