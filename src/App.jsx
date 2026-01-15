import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./components/paymentsuccess";
import SubmissionSuccess from "./components/submissionSuccess";
import StreamOfConsciousnessPage from "./components/streamOfConsciousnessPage";
import PainPointPage from "./components/painPointPage";
import Header from "./components/header";
import Hero from "./components/hero";
import Books from "./components/books";
import ReferralProgram from "./components/referralProgram";
import SubmissionsSection from "./components/submissionsSection";
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
                <section id="referral"><ReferralProgram /></section>
                <section id="programs"><SubmissionsSection /></section>
                <section id="mission"><Mission /></section>
                <section id="author"><AboutAuthor /></section>
                <AIchat />
              </>
            }
          />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/submission-success" element={<SubmissionSuccess />} />
          <Route path="/stream-of-consciousness" element={<StreamOfConsciousnessPage />} />
          <Route path="/pain-point-solution" element={<PainPointPage />} />
        </Routes>
      </main>
      <footer id="contact"><Footer /></footer>
    </Router>
  );
}

export default App;
