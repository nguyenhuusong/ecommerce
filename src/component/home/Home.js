import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { Modal, Overlay } from "./ModalOverlay";
import { useState } from "react";
import ReactDOM from "react-dom";
import OtherInformation from "./OtherInformation";
function Home() {
  const [showModal, setShowModal] = useState(false);
  function hideModalHandler() {
    setShowModal(false);
  }

  function showModalHandler() {
    setShowModal(true);
  }
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/shop");
  }

  return (
    <section>
      {showModal &&
        ReactDOM.createPortal(
          <Overlay onClick={hideModalHandler} />,
          document.getElementById("overlay")
        )}
      {showModal &&
        ReactDOM.createPortal(
          <Modal onClick={hideModalHandler} />,
          document.getElementById("overlay")
        )}

      <Banner onClickFunction={onClickHandler} />
      <Categories />
      <ProductList onShowModal={showModalHandler} />
      <OtherInformation />
    </section>
  );
}
export default Home;
