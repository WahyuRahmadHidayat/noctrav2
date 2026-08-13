import Navbar from "layouts/Navbar";
import Footer from "layouts/Footer";
import Home from "views/home";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;