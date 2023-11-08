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
import ErrorPage from "../ErrorPage/ErrorPage";

const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addBooks',
                element: <PrivetRoute><AddBooks></AddBooks></PrivetRoute>
            },
            {
                path: '/allBooks',
                element: <PrivetRoute><AllBooks></AllBooks></PrivetRoute>,
                loader: () => fetch('http://localhost:5000/book')
            },
            {
                path: '/borrowedBooks',
                element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>
            },
            {
                path: '/history',
                element: <PrivetRoute><HistoryCategory></HistoryCategory></PrivetRoute>
            },
            {
                path: '/novel',
                element: <PrivetRoute><NovelCategory></NovelCategory></PrivetRoute>
            },
            {
                path: '/Thriler',
                element: <PrivetRoute><ThrilerCategory></ThrilerCategory></PrivetRoute>
            },
            {
                path: '/drama',
                element: <PrivetRoute><DramaCategory></DramaCategory></PrivetRoute>
            },
            {
                path: '/bookDetails/:id',
                element: <PrivetRoute><BookDetails></BookDetails></PrivetRoute>,
                loader: () => fetch(`http://localhost:5000/book`)
            },
            {
                path: '/updateBook/:id',
                element: <PrivetRoute><UpdateBook></UpdateBook></PrivetRoute>,
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