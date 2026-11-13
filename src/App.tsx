import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="mx-auto max-w-7xl p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
