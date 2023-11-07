import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddBooks from "../Components/AddBooks/AddBooks";
import AllBooks from "../Components/AllBooks/AllBooks";
import BorrowedBooks from "../Components/BorrowedBooks/BorrowedBooks";
import HistoryCategory from "../LawOutPage/BooksCategories/HistoryCategory/HistoryCategory";
import NovelCategory from "../LawOutPage/BooksCategories/NovelCategory/NovelCategory";
import ThrilerCategory from "../LawOutPage/BooksCategories/ThrilerCategory/ThrilerCategory";
import DramaCategory from "../LawOutPage/BooksCategories/DramaCategory/DramaCategory";
import BookDetails from "../Components/BookDetails/BookDetails";
import UpdateBook from "../Components/AllBooks/UpdateBook/UpdateBook";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivetRoute from "./PrivetRoute";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <AddBooks></AddBooks>
            },
            {
                path: '/allBooks',
                element: <AllBooks></AllBooks>,
                loader: () => fetch('http://localhost:5000/book')
            },
            {
                path: '/borrowedBooks',
                element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>
            },
            {
                path: '/history',
                element: <HistoryCategory></HistoryCategory>
            },
            {
                path: '/novel',
                element: <NovelCategory></NovelCategory>
            },
            {
                path: '/Thriler',
                element: <ThrilerCategory></ThrilerCategory>
            },
            {
                path: '/drama',
                element: <DramaCategory></DramaCategory>
            },
            {
                path: '/bookDetails/:id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch(`http://localhost:5000/book`)
            },
            {
                path: '/updateBook/:id',
                element: <UpdateBook></UpdateBook>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }


        ]
    }
])

export default Router;