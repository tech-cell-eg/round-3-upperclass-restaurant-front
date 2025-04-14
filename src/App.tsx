import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import HomePage from "./pages/Home";

function App() {
  return (

    <BrowserRouter basename="/round-3-upperclass-restaurant-front/">
      <Routes>
        <>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

