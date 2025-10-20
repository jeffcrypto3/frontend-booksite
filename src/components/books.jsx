import React from "react";
import "../styles/books.css";
import DreamsBkImage from "../../src/assets/Dreams.png";
import godsBkImage from "../../src/assets/godstogoddesses.jpg";
import PaystackModal from "./paystackmodal"; // ✅ import your modal component
import ComingSoonModal from "./comingsoonmodal";

const AboutBook = () => {
  return (
    <>
      <div className="first-sec-sty">
        <h1>Featured Books</h1>
        <p>
          Discover our featured books – handpicked reads that inspire, educate,
          and resonate with you.
        </p>
      </div>

      <br />

      <div className="featured-books">
        <div className="book-card">
          <div className="image-container">
            <img src={DreamsBkImage} alt="Dreams Beyond Borders" />
          </div>

          <h1>Dreams Beyond Borders</h1>
          <p>
            Azimi Koko’s story is one of resilience and courage, rising from his
            village to the global stage. Battling injustice, loss, and
            corruption, he pursues education and fights for silenced voices.
            Dreams Beyond Borders is an inspiring tale of vision, struggle, and
            the power to spark change in a resistant world.
          </p>

          {/* ✅ Paystack modal for this book */}
          <PaystackModal bookName="DreamsBeyondBorders" amount={5000} />
        </div>

        <div className="book-card">
          <div className="image-container">
            <img id="gods-img" src={godsBkImage} alt="Gods to Goddesses" />
          </div>

          <h1>Gods to Goddesses</h1>
          <p>
            From “Gods to Goddesses" is a captivating tale of Ogiesoba's
            courageous odyssey through gender constraints, injustice, and
            self-discovery. Her triumphant return home sparks a transformative
            revolution, challenging societal norms and igniting a fervent
            advocacy for women's empowerment and education.
          </p>

          <ComingSoonModal />
        </div>
      </div>
    </>
  );
};

export default AboutBook;
