import { useLoaderData, useParams } from "react-router-dom";
import './bookDetails.css'
const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { id } = useParams()
    const idInt = id;
    const book = bookDetails.find((details) => details._id === idInt);
    const { name, Category, rating, photoURL,discriptions, Author,Date,Quantity } = book;

    return (
        <div>
            <div className="hero min-h-screen rounded-lg w-10/12 back mx-auto ">
                <div className="hero-content flex -mt-32 gap-20">
                    <img src={photoURL} className="max-w-sm rounded-lg shadow-2xl w-52" />
                    <div className="text-white">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-1 text-gray-200 font-semibold">Aurthor: <span className="text-xl text-white font-semibold">{Author}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Category: <span className="text-xl text-white font-semibold">{Category}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Rating: <span className="text-xl text-white font-semibold">{rating}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Quantity: <span className="text-xl text-white font-semibold">{Quantity}</span></p>
                        <p className="py-1 text-gray-200 font-semibold" >Realase Date: <span className="text-xl text-white font-semibold">{Date}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Language: <span className="text-xl text-white font-semibold">English(Only)</span></p>
                        <div className="flex gap-4 mt-4">
                        <button className="btn btn-outline btn-secondary"><span className="text-white">Brrow Book</span></button>
                        <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="mt-[500px] w-11/12 text-white">
                   <h1 className="text-4xl font-bold"> Book OverView</h1>
                   <p className="text-lg mt-2">{discriptions}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
