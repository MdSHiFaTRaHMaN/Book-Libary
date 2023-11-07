import { useLoaderData, useParams } from "react-router-dom";
import './bookDetails.css'
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import moment from "moment";
const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { id } = useParams();
    const idInt = id;
    const book = bookDetails.find((details) => details._id === idInt);
    const { _id, name, Category, rating, photoURL, discriptions, Author, Date, Quantity } = book;
    const [remainingQuantity, setRemainingQuantity] = useState(Quantity);

    const currentDateTime = moment().format('MMMM Do YYYY, h:mm a');
    console.log(currentDateTime)

    const { user } = useContext(AuthContext);

    const handleBorrow = () => {
        Swal.fire({
            title: "Return Date",
            text: `Email: ${user.email}`,
            input: "date",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Submit"
        }).then((result) => {
            console.log(result)
            // setReturnDate(result.value)
            if (result.isConfirmed === true) {
                if (remainingQuantity > 0) {
                    // Decrement the quantity by 1
                    setRemainingQuantity(remainingQuantity - 1);
                    Swal.fire({
                        title: "Borrowed",
                        text: "Your Book has been Borrowed Successful.",
                        icon: "success"
                    });
                    const remaining = remainingQuantity - 1;
                    const borrowing = {
                        name,
                        remaining,
                        Author,
                        bookID: _id,
                        photoURL,
                        Category,
                        rating,
                        ReturnDate: result.value,
                        email: user.email,
                        currentDateTime
                    }
                    console.log(borrowing)
                    fetch('http://localhost:5000/borrowings', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(borrowing)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                console.log("hello")
                            }

                        })


                }
            }
        });

    }
    return (
        <div>
            <div className="hero min-h-screen rounded-lg w-10/12 back mx-auto ">
                <div className="hero-content flex -mt-32 gap-20">
                    <img src={photoURL} className="max-w-sm rounded-lg shadow-2xl w-52" />
                    <div className="text-white">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-1 text-gray-200 font-semibold">Author: <span className="text-xl text-white font-semibold">{Author}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Category: <span className="text-xl text-white font-semibold">{Category}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Rating: <span className="text-xl text-white font-semibold">{rating}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Remaining Quantity: <span className="text-xl text-white font-semibold">{remainingQuantity}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Release Date: <span className="text-xl text-white font-semibold">{Date}</span></p>
                        <p className="py-1 text-gray-200 font-semibold">Language: <span className="text-xl text-white font-semibold">English (Only)</span></p>
                        <div className="flex gap-4 mt-4">
                            <button
                                className="btn btn-outline btn-secondary"
                                onClick={handleBorrow}
                                disabled={remainingQuantity <= 0}
                            >
                                <span className="text-white">Borrow Book</span>
                            </button>
                            <button className="btn btn-info">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="mt-[500px] w-11/12 text-white">
                    <h1 className="text-4xl font-bold">Book Overview</h1>
                    <p className="text-lg mt-2">{discriptions}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
