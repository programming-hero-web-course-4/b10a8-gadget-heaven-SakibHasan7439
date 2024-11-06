import BlogCard from "../Components/BlogCard";
import blog1 from "/src/assets/blogImage1.jpg";
import blog2 from "/src/assets/blog-2.jpg";
import blog3 from "/src/assets/blog-3.webp";
import blog4 from "/src/assets/blog-4.jpg";
import blog5 from "/src/assets/blog-5.jpg";
import blog6 from "/src/assets/blog-6.webp";
import { Helmet } from "react-helmet-async";
// import blog6 from "/src/assets/blogImage1.jpg";

const Blog = () => {
    return (
        <div className="p-2 lg:p-6">
        <Helmet>
            <title>Gadget Heaven | Blog</title>
        </Helmet>
            <h1 className="font-bold text-2xl text-center mt-4 md:text-4xl lg:text-5xl mb-4 md:mb-8">Blog page</h1>
            <div className="lg:w-7/12">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Welcome to Our Gadget Blog!</h2>
                <p className="mb-2 lg:text-lg">
                    Stay up-to-date with the latest in tech and gadgetry! From in-depth reviews of cutting-edge devices to practical how-to guides, we’ve got all the insights you need to make informed decisions. Dive into our articles and discover:
                </p>
                <ul className="list-disc ml-8 mb-2">
                    <li className="mb-2">
                        <span className="text-lg font-semibold">Tech Reviews</span> : Unbiased, hands-on reviews of the newest smartphones, smartwatches, laptops, and more.
                    </li>
                    <li className="mb-2">
                        <span className="text-lg font-semibold">Buying Guides:</span> Find the best gadgets for your needs and budget with our expert recommendations.
                    </li>
                    <li className="mb-2">
                        <span className="text-lg font-semibold">Tech Tips & Tricks:</span> Get the most out of your devices with our   easy-to-follow guides and tips
                    </li>
                    <li className="mb-2">
                        <span className="text-lg font-semibold">Latest Trends:</span> Stay ahead of the curve with news on emerging tech trends, innovations, and upcoming releases.
                    </li>
                </ul>
                <p className="text-lg border-b-2 pb-4 mb-6">
                    Whether you re a tech enthusiast or a casual gadget lover, were here to provide quality content that makes your tech experience better!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
                <BlogCard 
                image={blog1}
                title="iPad Pro 2024: Release Date, Pricing, Specs, News and more"
                description="iPad Pro 2024: What we know so far about the brand-new OLED iPad Pro!  The iPad Pro is getting ready for its most significant update i."
                buttonText="Continue reading"
                ></BlogCard>

                <BlogCard 
                image={blog2}
                title="Latest 2024 Price Update: Apple Product Prices (iPhone, iPad, Apple Watch, MacBook) in Bangladesh"
                description="Discover 2024 Apple product prices in Bangladesh today! Stay informed on iPhones, iPads, Apple Watches, and MacBooks with our updated guide"
                buttonText="Continue reading"
                ></BlogCard>

                <BlogCard 
                image={blog3}
                title="6 Life Changing Apple Watch Apps"
                description="Apple has found a new way to exchange details between wearables like Apple watch, by everyday greeting gesture, such as a hug, handshak..."
                buttonText="Continue reading"
                ></BlogCard>

                <BlogCard 
                image={blog4}
                title="iPad Pro 2024: Release Date, Pricing, Specs, News and more"
                description="iPad Pro 2024: What we know so far about the brand-new OLED iPad Pro!  The iPad Pro is getting ready for its most significant update i."
                buttonText="Continue reading"
                ></BlogCard>

                <BlogCard 
                image={blog5}
                title="Apple Vision Pro: Release date, Specs, Price, and Everything we know!"
                description="Apple has announced its first-ever VR headset named Apple Vision Pro will go live on sale in its U.S. stores starting on February 2."
                buttonText="Continue reading"
                ></BlogCard>

                <BlogCard 
                image={blog6}
                title="Always On Display – The Most Exciting Feature in Apple Watch Series 5"
                description="0Its been more than six months now I am wearing the new Apple Watch Series 5 since it released. Apple launched the new Apple Watch serie"
                buttonText="Continue reading"
                ></BlogCard>
            </div>
        </div>
    );
};

export default Blog;