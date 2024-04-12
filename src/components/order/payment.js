import React from 'react'
import "./Order.css";

function Payment() {
  return (
    <div className="container">
    <div className="column">
      <div className="col-12 col-md-10 hh-grayBox pt45 pb20 sbs">
        <div className="row justify-content-between">
          <div className="order-tracking completed">
            <span className="is-complete"></span>
            <p>
              Payment
              <br />
              <span>Mon, June 24</span>
            </p>
          </div>
          <div className="order-tracking completed">
            <span className="is-complete"></span>
            <p>
              Intimated
              <br />
              <span>Tue, June 25</span>
            </p>
          </div>
          <div className="order-tracking">
            <span className="is-complete"></span>
            <p>
              Pending
              <br />
              <span>Fri, June 28</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Payment;