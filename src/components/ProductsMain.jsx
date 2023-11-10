import tunnelImg from "../images/red-torii-gates.jpg";

const ProductsMain = () => {
  return (
    <>
      <div className="front-page">
        <img id="red-torii" src={tunnelImg} alt="tunnel" />
      </div>
      <section className="main card-deck">
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            className="card-img-top"
            src="https://i.postimg.cc/JhxYCKtZ/72CW.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            className="card-img-top"
            src="https://i.postimg.cc/JhxYCKtZ/72CW.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            className="card-img-top"
            src="https://i.postimg.cc/JhxYCKtZ/72CW.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsMain;
