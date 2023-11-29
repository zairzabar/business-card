import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";

function Cards() {
  return (
    <div className="card">
      <Header />
      <Button name="Email" />
      <Introduction />
      <Footer />
    </div>
  );
}

export default Cards;
