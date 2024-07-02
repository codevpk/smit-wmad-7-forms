import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Frontend from "./pages/Frontend";
import Login from "./pages/Auth/Login";

function App() {

  const isAuthenticated = true

  if (!isAuthenticated) return <Login />

  return (
    <>
      <Header />
      {/* {isAuthenticated
        ? <Frontend />
        : <Login />
      } */}
      <Frontend />
      <Footer />
    </>
  );
}

export default App;
