import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import ItemDetailContainer from "./Components/ItemDetailContainer";



function App() {
  return (
    <Router>
      <main>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
}

export default App;
