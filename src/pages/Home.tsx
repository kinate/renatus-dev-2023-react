import Header from "../components/Header";
import Hero from "../components/HomePage/Hero";
import RecentWorks from "../components/HomePage/RecentWorks";

const Home: React.FC = () => {
	return (
		<div className="page-wrapper">
			{/* <Header /> */}
			<Hero />
			<RecentWorks />
		</div>
	);
};

export default Home;

// TODO: Minor problems with the header section
