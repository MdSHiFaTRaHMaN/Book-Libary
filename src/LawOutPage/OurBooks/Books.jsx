import Rating from 'react-rating-stars-component';
import './Book.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Books = ({ book }) => {
    const [bookRatings, setBookRatings] = useState({});
    const { name, Author, photoURL, rating, Category } = book;
    const handleRatingChange = (bookId, rating) => {
        setBookRatings(prevRatings => ({
            ...prevRatings,
            [bookId]: rating,
        }));
    };
    return (

        <div className="w-full max-w-sm border-2 border-gray-200 hover:border-2 hover:border-gray-200 shadow  bg-[#284c89] hover:bg-transparent">
            <div className="background">
                <img className=" mx-auto w-40 h-[250px] opacity-100" src={photoURL} alt="product image" />
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <div className="text-white mt-2">
                    <h4>Author: {Author}</h4>
                    <h4>Category: {Category}</h4>
                </div>

                <div className="flex items-center mt-1 text-gray-700 dark:text-gray-200">
                    <span className="bg-yellow-500 text-blue-800 text-xs font-semibold mr-0.5 px-2.5 py-0.5 rounded">{book.rating}/5</span>
                    <div className="flex gap-12 items-center mb-1">
                        <Rating
                            count={5}
                            value={bookRatings[book._id] || rating}
                            size={24}
                            edit={true}
                            activeColor="rgb(250, 213, 3)"
                            onChange={(rating) => handleRatingChange(book._id, rating)}
                        />
                        <Link to={`/bookDetails/${book._id}`}>
                            <button className="btn btn-outline btn-info"><span className="text-white">Show Details</span></button>
                        </Link>                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;