import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
function Service() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-sm mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, index) => {
                return (
                  <div className="Service__card mx-auto">
                    <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                    <button type="button" class="btn btn-info">Explore more ..... </button>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>

    </div>

  );
}


export default Service;
