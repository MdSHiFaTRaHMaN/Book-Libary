import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddBooks from "../Components/AddBooks/AddBooks";
import AllBooks from "../Components/AllBooks/AllBooks";
import BorrowedBooks from "../Components/BorrowedBooks/BorrowedBooks";

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
                element: <AllBooks></AllBooks>
            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>
            }
        ]
    }
])

export default Router;