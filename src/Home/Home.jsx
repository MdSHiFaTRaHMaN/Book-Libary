import AuthorReview from "../LawOutPage/AuthorReview/AuthorReview";
import Banner from "../LawOutPage/Banner/Banner";
import BookCategories from "../LawOutPage/BooksCategories/BookCategories";
import Footer from "../LawOutPage/Footer/Footer";
import Ourbooks from "../LawOutPage/OurBooks/Ourbooks";
import Subscribe from "../LawOutPage/Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <Ourbooks></Ourbooks>
            <AuthorReview></AuthorReview>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;