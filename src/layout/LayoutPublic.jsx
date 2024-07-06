import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar></Navbar>
      <main>
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet></Outlet>
      </main>
      <footer className="container text-center">Footer</footer>
    </>
  );
};

export default LayoutPublic;
