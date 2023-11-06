import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from 'react-rating-stars-component';

const HistoryCategory = () => {
    const [historyBooks, setHistoryBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/book")
            .then(res => res.json())
            .then(data => setHistoryBooks(data))
    }, [])
    const [bookRatings, setBookRatings] = useState({});
    const handleRatingChange = (bookId, rating) => {
        setBookRatings(prevRatings => ({
            ...prevRatings,
            [bookId]: rating,
        }));
    };
    const books = historyBooks.filter(book => book.Category === "History")

    return (
        <div>
            <div className="bg-sky-800 rounded-xl my-5 pb-7">
                <h1 className="text-center text-3xl mx-auto font-bold pt-7 text-white">History Library</h1>
                <div className="grid px-14 my-7 mx-auto gap-9 lg:grid-cols-3">
                    {books.map(book => (
                        <div key={book._id}>
                            <div className="card w-full lg:w-96 bg-cyan-700 shadow-xl border-2 border-cyan-800 hover:border-2 hover:bg-transparent hover:border-white">
                                <figure className="px-5 pt-2">
                                    <img src={book.photoURL} alt="Shoes" className="rounded-xl h-[160px] lg:h-[228px]" />
                                </figure>
                                <div className="card-body px-1 text-white gap-1 items-center text-center">
                                    <h2 className="card-title">{book.name}</h2>
                                    <p>Author: {book.Author}</p>
                                    <p>Category: {book.Category}</p>
                                    <div className="flex items-center">
                                        <div className="flex items-center mb-1">
                                            <Rating
                                                count={5}
                                                value={bookRatings[book._id] || 0}
                                                size={24}
                                                edit={true}
                                                activeColor="#f8ce0b"
                                                onChange={(rating) => handleRatingChange(book._id, rating)}
                                            />
                                        </div>
                                        <span className="bg-yellow-500 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{book.rating}</span>
                                    </div>

                                    <div className="card-actions">
                                        <Link to={`/bookDetails/${book._id}`}>
                                            <button className="btn btn-outline btn-info"><span className="text-white">Show Details</span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryCategory;