import BreakingNews from "../BreakingNews/BreakingNews";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsBookmarks } from 'react-icons/bs';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import imfbb1 from '../../assets/1.png';
import imfbb2 from '../../assets/2.png';
import imfbb3 from '../../assets/3.png';
import NewsCard from "../NewsCard/NewsCard";


const Home = () => {
    const news = useLoaderData();
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* leftside */}
                <div className="border px-2">
                    <h2 className="text-2xl font-semibold mb-3">All Categorie</h2>
                    {
                        catagories.map(catagorie =>
                            <Link
                                to={`/catagorie/${catagorie.id}`}
                                key={catagorie.id}>
                                <p className="border my-2 px-4 py-2 rounded-lg hover:bg-gray-200 font-semibold">{catagorie.name}</p>
                            </Link>)
                    }
                    <div className="my-6 border-b-2 pb-4">
                        <img className="mb-3" src={imfbb1} alt="" />
                        <p className="text-xl font-medium mb-2">Bayern Slams Authorities</p>
                        <div className="flex items-center">
                            <p className="font-semibold">Sports</p>
                            <p className="ml-6"><BsBookmarks></BsBookmarks></p>
                            <p className="ml-2 font-semibold">Jan 4, 2022</p>
                        </div>

                    </div>
                    <div className="my-6 border-b-2 pb-4">
                        <img className="mb-3" src={imfbb2} alt="" />
                        <p className="text-xl font-medium mb-2">Bayern Slams Authorities</p>
                        <div className="flex items-center">
                            <p className="font-semibold">Sports</p>
                            <p className="ml-6"><BsBookmarks></BsBookmarks></p>
                            <p className="ml-2 font-semibold">Jan 4, 2022</p>
                        </div>

                    </div>
                    <div className="my-6 border-b-2 pb-4">
                        <img className="mb-3" src={imfbb3} alt="" />
                        <p className="text-xl font-medium mb-2">Bayern Slams Authorities</p>
                        <div className="flex items-center">
                            <p className="font-semibold">Sports</p>
                            <p className="ml-6"><BsBookmarks></BsBookmarks></p>
                            <p className="ml-2 font-semibold">Jan 4, 2022</p>
                        </div>

                    </div>
                </div>


                {/* news */}
                <div className="col-span-2 border px-2">
                    <h2 className="text-2xl font-semibold mb-8">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>


                {/* Rightside */}
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

export default Home;