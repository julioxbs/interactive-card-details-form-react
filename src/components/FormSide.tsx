import { formProps } from "../App";
import { transformData } from "../utils/validateForm";

type Props = {
  setFormInputs: (value: any) => void;
  formInputs: formProps;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const FormSide = ({
  setFormInputs,
  formInputs,
  handleSubmit,
}: Props) => {
  const { cardName, cardNumber, cvc, expDate } = formInputs;

  return (
    <div id="form__content">
      <form onSubmit={handleSubmit}>
        <label>
          <span className="title__form">cardholder name</span>
          <input
            className={cardName.error ? "borderError" : ""}
            type="text"
            placeholder="e.g. Jane Appleseed"
            name="cardName"
            onChange={(e) =>
              setFormInputs({
                ...formInputs,
                cardName: {
                  value: e.target.value,
                },
              })
            }
          />

          {cardName.error && (
            <p className="errorMessage">{cardName.errorMessage}</p>
          )}
        </label>

        <label>
          <span className="title__form">card number</span>
          <input
            className={cardNumber.error ? "borderError" : ""}
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) =>
              setFormInputs({
                ...formInputs,
                cardNumber: {
                  value: e.target.value,
                },
              })
            }
          />
          {cardNumber.error && (
            <p className="errorMessage">{cardNumber.errorMessage}</p>
          )}
        </label>

        <div id="wrap__dates">
          <div id="wrap__titles">
            <span className="title__form">exp. date (MM/YY)</span>
            <span className="title__form">cvc</span>
          </div>

          <div id="wrap__expDates">
            <label>
              <input
                className={expDate.error ? "borderError" : ""}
                type="month"
                placeholder="MM"
                onChange={(e) =>
                  setFormInputs({
                    ...formInputs,
                    expDate: {
                      value: transformData(e.target.value),
                    },
                  })
                }
              />
            </label>

            <label>
              <input
                type="number"
                className={cvc.error ? "borderError" : ""}
                onChange={(e) =>
                  setFormInputs({
                    ...formInputs,
                    cvc: {
                      value: e.target.value,
                    },
                  })
                }
                placeholder="e.g. 123"
              />
            </label>
          </div>

          {cvc.error ? (
            <p className="errorMessage">{cvc.errorMessage}</p>
          ) : expDate.error ? (
            <p className="errorMessage">Can't be empty</p>
          ) : null}
        </div>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
