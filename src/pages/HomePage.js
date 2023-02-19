import logo from "../assets/img/homepage.png";

const HomePage = () => {
  return (
    <main>
      <div className="home-pics">
        {/* <h1>welcome</h1> */}
        <img className="home-hero-forme" src={logo} alt="logo homepage" />
      </div>
    </main>
  );
};

export default HomePage;
