import { Link } from "react-router-dom";
import icon from "../images/cryptocurrency.png";
const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="logo">
				<img width="72px" src={icon} />
				<h2>Crypto Sphere</h2>
			</div>
			<Link to="/"><i className="fa-solid fa-server"></i>
				Dashboard
			</Link>
			<Link to="/exchanges">
				<i className="fa-solid fa-chart-line"></i>Exchanges
			</Link>
			<Link to="/prediction">
				<i className="fa-solid fa fa-microchip"></i>Prediction
			</Link>
			<Link to="/cryptohome">
				<i className="fa-solid fa fa-address-book"></i>News & Details
			</Link>
		</aside>
	 );
}

export default Sidebar;
