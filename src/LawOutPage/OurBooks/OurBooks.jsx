import { useEffect, useState } from "react";
import Books from "./Books";
import './book.css'

const Ourbooks = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 6; 

    useEffect(() => {
        fetch("https://book-library-server-two.vercel.app/book")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    const indexOfLastProduct = currentPage * booksPerPage;
    const indexOffFirstProduct = indexOfLastProduct - booksPerPage;
    const currentBooks = books.slice(indexOffFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = () =>{
        if(currentPage < Math.ceil(books.length / booksPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="bg-[#2e3267]">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 w-11/12 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className=" w-full mb-6 lg:mb-0 text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Our Books Library</h1>
                            <div className="h-1 w-72 text-center mx-auto bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="grid lg:grid-cols-3 gap-14">
                            {
                                currentBooks.map((book) => (
                                    <Books key={book._id} book={book}></Books>
                                ))
                            }
                        </div>
                        <ul className="pagination flex justify-center gap-3 mx-auto text-center mt-8 mb-3">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link btn btn-info text-white font-semibold text-center"
                        onClick={prevPage}>Previous
                    </button>
                </li>
                {Array(Math.ceil(books.length / booksPerPage))
                    .fill()
                    .map((_, i) => (
                        <li
                            key={i}
                            className={`page-item ${i + 1 === currentPage ? "activeClass" : ""}`}>
                            <button
                                className="page-link btn btn-info text-white font-semibold text-center"
                                onClick={() => paginate(i + 1)}>
                                {i + 1}
                            </button>
                        </li>
                    ))}
                <li
                    className={`page-item ${currentPage === Math.ceil(books.length / booksPerPage)
                            ? "disabled"
                            : ""
                        }`}>
                    <button
                        className="page-link btn btn-info text-white font-semibold text-center"
                        onClick={nextPage}
                    > Next
                    </button>
                </li>
            </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ourbooks;