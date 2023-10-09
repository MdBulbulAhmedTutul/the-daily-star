import { FcGoogle } from "react-icons/fc";
import Header from "../Header/Header";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
import { Link, useLoaderData, useParams } from "react-router-dom";
import inside1 from '../../assets/editorsInsight1.png';
import inside2 from '../../assets/editorsInsight2.png';
import inside3 from '../../assets/editorsInsight3.png';

const NewsDetails = () => {
    const detail = useLoaderData();
    const { id } = useParams();
    const news = detail.find(news => news._id === id);
    console.log(news);
    const { image_url, details } = news;
    return (
        <div>
            <div className="mb-10">
                <Header></Header>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {/* News Details */}
                <div className="col-span-3">
                    <h2 className="text-2xl font-semibold mb-4">Dragon News</h2>
                    <div>
                        <img className="w-full mb-5" src={image_url} alt="" />
                        <p className="mb-5">{details}</p>
                        <Link to="/">
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg text-white font-bold">All news in this category</button>
                        </Link>
                    </div>
                    <h2 className="text-2xl my-10 font-semibold">Editors Insight</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <img className="mb-4" src={inside1} alt="" />
                            <h2 className="text-xl font-semibold mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                            <p>Jan 4, 2022</p>
                        </div>
                        <div>
                            <img className="mb-4" src={inside2} alt="" />
                            <h2 className="text-xl font-semibold mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                            <p>Jan 4, 2022</p>
                        </div>
                        <div>
                            <img className="mb-4" src={inside3} alt="" />
                            <h2 className="text-xl font-semibold mb-2">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>
                </div>

                {/* Rightside Nav */}
                <div className="border px-2">
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Login With</h2>
                        <button className="my-2 btn btn-outline btn-secondary w-full">
                            <FcGoogle className="text-2xl"></FcGoogle>
                            <p>Login With Google</p>
                        </button>
                        <button className="my-2 btn btn-outline btn-secondary w-full">
                            <BsGithub className="text-2xl"></BsGithub>
                            <p>Login With Github</p>
                        </button>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-3">Find Us On</h2>
                        <button className="border flex items-center px-4 w-full py-2 rounded-lg hover:bg-gray-200 my-2">
                            <FaFacebookF></FaFacebookF>
                            <p className="ml-2 font-semibold">FaceBook</p>
                        </button>
                        <button className="border flex items-center px-4 w-full py-2 rounded-lg hover:bg-gray-200 my-2">
                            <BsTwitter></BsTwitter>
                            <p className="ml-2 font-semibold">Twitter</p>
                        </button>
                        <button className="border flex items-center px-4 w-full py-2 rounded-lg hover:bg-gray-200 my-2">
                            <BsInstagram></BsInstagram>
                            <p className="ml-2 font-semibold">Instagram</p>
                        </button>
                    </div>
                    <div className="bg-gray-200">
                        <h2 className="text-2xl font-semibold my-3">Q-Zone</h2>
                        <img className="my-4" src={qZone1} alt="" />
                        <img className="my-4" src={qZone2} alt="" />
                        <img className="my-4" src={qZone3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;