import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./components/paymentsuccess";
import Header from "./components/header";
import Hero from "./components/hero";
import Books from "./components/books";
import Mission from "./components/missionAbout";
import AboutAuthor from "./components/aboutAuthor";
import AIchat from "./components/AIchatbox";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero"><Hero /></section>
                <section id="books"><Books /></section>
                <section id="mission"><Mission /></section>
                <section id="author"><AboutAuthor /></section>
                <AIchat />
              </>
            }
          />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </main>
      <footer id="contact"><Footer /></footer>
    </Router>
  );
}

export default App;
