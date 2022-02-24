import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div id="Layout">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
