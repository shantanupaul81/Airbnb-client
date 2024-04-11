import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import RegisterPage from "./Pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./Pages/AccountPage";
import PlacesPage from "./Pages/PlacesPage";
import PlacesFormPage from "./Pages/PlacesFormPage";
import PlacePage from "./Pages/PlacePage";
import BookingsPage from "./Pages/BookingsPage";
import BookingPage from "./Pages/BookingPage";

axios.defaults.baseURL = "https://airbnb-server-bgq5.onrender.com";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        {/* Putting Header for all the component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
