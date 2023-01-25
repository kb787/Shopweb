import "./styles.css";
import Content from "./Content";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Clothing from "./Clothing";
import ElectronicsComp from "./ElectronicsComp";
import Groceries from "./Groceries";
import HomeAppliances from "./HomeAppliances";
import Login from "./Login";
import Monitor from "./Monitor";
import Projector from "./Projector";
import Printer from "./Printer";
import Powerbank from "./Powerbank";
import Realme from "./Realme";
import Poco from "./Poco";
import Redmi from "./Redmi";
import ApplePhone from "./ApplePhone";
import Oppo from "./Oppo";
import AppleMac from "./AppleMac";
import Lenovo from "./Lenovo";
import Asus from "./Asus";
import HP from "./HP";
import Dell from "./Dell";
import Earphone from "./Earphone";
import Payment from "./Payment";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/Clothing" element={<Clothing />} />
        <Route exact path="/ElectronicsComp" element={<ElectronicsComp />} />
        <Route exact path="/Groceries" element={<Groceries />} />
        <Route exact path="/HomeAppliances" element={<HomeAppliances />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Monitor" element={<Monitor />} />
        <Route exact path="/Projector" element={<Projector />} />
        <Route exact path="/Printer" element={<Printer />} />
        <Route exact path="/Powerbank" element={<Powerbank />} />
        <Route exact path="/Realme" element={<Realme />} />
        <Route exact path="/Poco" element={<Poco />} />
        <Route exact path="/Redmi" element={<Redmi />} />
        <Route exact path="/ApplePhone" element={<ApplePhone />} />
        <Route exact path="/Oppo" element={<Oppo />} />
        <Route exact path="/Asus" element={<Asus />} />
        <Route exact path="/AppleMac" element={<AppleMac />} />
        <Route exact path="/Lenovo" element={<Lenovo />} />
        <Route exact path="/HP" element={<HP />} />
        <Route exact path="/Dell" element={<Dell />} />
        <Route exact path="/Earphone" element={<Earphone />} />
        <Route exact path="/Payment" element={<Payment />} />
      </Routes>
    </div>
  );
}
