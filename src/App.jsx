import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <main>
      <div>
      <Navbar />
      <ItemListContainer text="Bienvenidos a Sneaker Valut!" />
      <Footer />
      </div>
    </main>
  );
}

export default App;
