import PropTypes from "prop-types";
import "./gift.css";

function Gift({ personneTiree }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-light my-5">
            <strong>Trouvez à qui offrir votre cadeau :</strong>
          </h3>
        </div>
        <div className="col-12 mt-5 d-flex justify-content-center">
          <div className="box">
            <div className="box-body">
              <div className="whiteCard">
                <p className="nameReceiver">{personneTiree}</p>
              </div>
              <div className="box-lid">
                <div className="box-bowtie"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Gift.propTypes = {
  personneTiree: PropTypes.string.isRequired,
};

export default Gift;
