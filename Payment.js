import "./Payment.css";

const Payment = () => {
  return (
    <main>
      <div className="Payment">
        <div className="paymentForm">
          <label htmlFor="exampleFormControlInput1" className="paymentLabel">
            Enter mobile number
          </label>
          <input
            type="phone number"
            className="paymentControl"
            id="paymentInput"
            placeholder={"Enter a 10 digit valid no"}
          />
        </div>
        <br />
        <div className="paymentForm">
          <label htmlFor="exampleFormControlInput1" className="paymentLabel">
            Enter the address
          </label>
          <input
            type="text"
            className="paymentControl"
            id="paymentInput"
            placeholder={"Ex. Sai bhakti , Mira Road Mumbai"}
          />
        </div>
        <br />
        <div className="paymentForm">
          <label htmlFor="exampleFormControlInput1" className="paymentLabel">
            Enter postal code
          </label>
          <input
            type="integer"
            className="paymentControl"
            id="paymentInput"
            placeholder={"Ex. 401105"}
          />
        </div>
        <br />
        <div className="paymentForm">
          <label htmlFor="exampleFormControlInput1" className="paymentLabel">
            Enter UPI-Id
          </label>
          <input
            type="text"
            className="paymentControl"
            id="paymentInput"
            placeholder={"Ex. xyz@okaxis.com "}
          />
        </div>
        <br />
        <div className="paymentForm">
          <label htmlFor="exampleFormControlInput1" className="paymentLabel">
            Enter payer name
          </label>
          <input
            type="text"
            className="paymentControl"
            id="paymentInput"
            placeholder={"Ex. xyz "}
          />
        </div>

        <br />
        <div>
          <button type="button" class="paymentButton">
            Proceed
          </button>
        </div>
      </div>
    </main>
  );
};

export default Payment;
