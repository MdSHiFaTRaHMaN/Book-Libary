import { Link } from "react-router-dom";

const BookCategories = () => {
    return (
        <section className="text-gray-600 body-font w-11/12 mx-auto">
            <div className="container px-5 py-7 mx-auto">
                <div className="flex flex-col text-center w-full mt-20 mb-7">
                    <h1 className="sm:text-3xl text-3xl font-bold title-font text-white">Books Category</h1>
                </div>
                <div className="flex flex-wrap  text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full h-28">
                        <Link to='/history'>
                            <div className="hover:border-2 border-2 border-[#2e3267] hover:border-gray-200 px-4 py-6 rounded-lg shadow-xl shadow-slate-900 bg-[#2e3267] hover:bg-transparent">
                                <img src="https://i.ibb.co/QKqFcqM/Screenshot-2023-11-05-015243-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                                <p className="leading-relaxed text-white">History</p>
                            </div>
                        </Link>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to='/novel'>
                            <div className="hover:border-2 border-2 border-[#2e3267] hover:border-gray-200 shadow-xl shadow-slate-900 px-4 py-6 rounded-lg bg-[#2e3267] hover:bg-transparent">
                                <img src="https://i.ibb.co/XJrD9L7/Screenshot-2023-11-05-014604-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                                <p className="leading-relaxed text-white ">Novel</p>
                            </div>
                        </Link>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to='/thriler'>
                            <div className="hover:border-2 border-2 border-[#2e3267] hover:border-gray-200 shadow-xl shadow-slate-900 px-4 py-6 rounded-lg bg-[#2e3267] hover:bg-transparent">
                                <img src="https://i.ibb.co/9gSRD8Z/Screenshot-2023-11-05-015617-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                                <p className="leading-relaxed text-white">Thriller</p>
                            </div>
                        </Link>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to='/drama'>
                            <div className="hover:border-2 border-2 border-[#2e3267] hover:border-gray-200 px-4 shadow-xl shadow-slate-900 py-6 rounded-lg bg-[#2e3267] hover:bg-transparent">
                                <img src="https://i.ibb.co/Q9wMbV5/Screenshot-2023-11-05-020146-removebg-preview.png" alt="" className="w-20 h-24 mx-auto" />
                                <p className="leading-relaxed text-white">Drama</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCategories;