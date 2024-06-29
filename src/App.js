import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Header1 from "./components/Header1";
import Page404 from "./pages/Page404";
import ContextProvider from "./context/Context";
import LoginAdmin from "./pages/admin/LoginAdmin";
import HeaderAdmin from "./components/admin/HeaderAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";
import CategoriesAdmin1 from "./pages/admin/CategoriesAdmin1";
import AddCategory from "./pages/admin/AddCategory";
import ToyAdmin from "./pages/admin/ToyAdmin";


function App() {



  return (
    <ContextProvider>
      <BrowserRouter>
      {/* אזור של ההידר לפי היו אר אל יציג
      את ההידר הנכון */}
        <Routes>
          <Route path="/admin/*" element={<HeaderAdmin />} />
          <Route path="*" element={<Header1 />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* admin pages */}
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/categories" element={<CategoriesAdmin1 />} />
          <Route path="/admin/categories/add" element={<AddCategory />} />
          <Route path="/admin/toys" element={<ToyAdmin />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
