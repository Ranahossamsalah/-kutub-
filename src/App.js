import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/homepage";
import CardDetails from "./pages/card-details/cardDetails";
import SignUp from "./pages/signup/signup";
import NotFound from "./pages/notFound/notfound";
import SignIn from "./pages/signin/signin";
import ProfileEventList from "./components/profileeventlist/profileeventlist";
import IntroductionPage from "./pages/introductionPage/IntroductionPage";
import SearchResult from "./pages/search-results/search-result";
import Categorylist from "./pages/category-list/categoryList";
import Options from "./pages/intro-option/option";
import HomeBooks from "./components/home-books/home-books";
import HomeComics from "./components/home-comics/home-comics";
import ComicsCategorylist from "./pages/comics-category-list/ComicsCategoryList";
import ProfilePage from "../src/pages/profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/options" element={<Options />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="books" element={<HomeBooks />} />
          <Route path="comics" element={<HomeComics />} />
        </Route>
        <Route path="/category" element={<Categorylist />}></Route>
        <Route path="/home/:id" element={<CardDetails />}></Route>
        <Route path="/comicscategorylist" element={<ComicsCategorylist />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
