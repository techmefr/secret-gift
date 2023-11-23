function Gift() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-light my-5">
            <strong>Hover the box</strong>
          </h3>
        </div>
        <div className="col-12 mt-5 d-flex justify-content-center">
          <div className="box">
            <div className="box-body">
              <div className="whiteCard" />
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
export default Gift;
