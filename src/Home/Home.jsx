import Banner from "../LawOutPage/Banner/Banner";
import BookCategories from "../LawOutPage/BooksCategories/BookCategories";
import Footer from "../LawOutPage/Footer/Footer";
import Ourbooks from "../LawOutPage/OurBooks/Ourbooks";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <Ourbooks></Ourbooks>
            <Footer></Footer>
        </div>
    );
};

export default Home;