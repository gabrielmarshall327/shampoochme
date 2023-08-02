import "./index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Pictures from "./components/Gallery";
import Price from "./components/Price";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Pictures />
			<Clients />
			<About />
			<Price />
			<Contact />
			<Footer />
		</div>
	);
}
