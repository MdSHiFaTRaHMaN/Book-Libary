import { Link, useLoaderData } from "react-router-dom";
import './Allbook.css'
import { useState } from "react";
import Rating from 'react-rating-stars-component';

const AllBooks = () => {
    const [bookRatings, setBookRatings] = useState({});

    const books = useLoaderData();
    // console.log(books)
    const handleRatingChange = (bookId, rating) => {
        setBookRatings(prevRatings => ({
            ...prevRatings,
            [bookId]: rating,
        }));
    };
    return (
        <div className="grid lg:grid-cols-3 gap-7 mx-auto w-10/12">
            {books.map((book, index) => (
                <li key={index}>{book.name}
                    <div className="w-full backGround border-2 hover:border-sky-700 border-white overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="imageBack">
                            <img className="object-cover object-center w-32 mx-auto h-48" src={book.photoURL} alt="avatar" />
                        </div>
                        <div className="flex justify-end items-center px-6 py-2 bg-cyan-900">
                            <Link to={`/updateBook/${book._id}`}>
                                <span className="btn  btn-primary hover:bg-transparent hover:border-2 hover:border-white">
                                    <img src="https://i.ibb.co/HYBpTHb/Screenshot-2023-11-06-221454-removebg-preview.png" className="w-[30px] " alt="" />
                                    <h1 className="mx-3 text-lg font-semibold text-white">Update</h1>
                                </span>
                            </Link>
                        </div>

                        <div className="px-6 py-4">
                            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{book.name}</h1>

                            <p className="py-1 text-gray-700 dark:text-gray-400"><span className="text-green-600 text-lg font-bold">By</span> {book.Author}</p>

                            <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
                                <img src="https://i.ibb.co/WzZpH6z/Screenshot-2023-11-06-225244-removebg-preview.png" className="w-6" alt="" />
                                <h1 className="px-2 ml-3 text-lg font-semibold">{book.Category}</h1>
                            </div>
                            <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
                                <img src="https://i.ibb.co/vq1XcSP/Screenshot-2023-11-06-231224-removebg-preview.png" className="w-8" alt="" />
                                <h1 className="px-2 ml-1 text-lg font-semibold">Quantity - {book.Quantity}</h1>
                            </div>
                            <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
                                <span className="bg-yellow-500 text-blue-800 text-xs font-semibold mr-0.5 px-2.5 py-0.5 rounded">{book.rating}/5</span>
                                <div className="flex items-center mb-1">
                                    <Rating
                                        count={5}
                                        value={bookRatings[book._id] || book.rating}
                                        size={24}
                                        edit={true}
                                        activeColor="rgb(250, 213, 3)"
                                        onChange={(rating) => handleRatingChange(book._id, rating)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
                                <img src="https://i.ibb.co/rvBHdPq/Screenshot-2023-11-06-230441-removebg-preview.png" className="w-8" alt="" />

                                <h1 className="px-2 ml-1 text-lg font-semibold">{book.Date}</h1>
                            </div>
                        </div>
                    </div>
                </li>

            ))}
        </div>
    );
};

export default AllBooks;