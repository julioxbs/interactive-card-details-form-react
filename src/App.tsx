import { useState } from "react";
import { CardSide } from "./components/CardSide";
import { Complete } from "./components/Complete";
import { FormSide } from "./components/FormSide";
import { validateForm } from "./utils/validateForm";

export type formProps = {
  cardName: {
    value: string;
    error: boolean;
    errorMessage: string;
  };
  cardNumber: {
    value: string;
    error: boolean;
    errorMessage: string;
  };
  expDate: {
    value: string;
    error: boolean;
    date: string;
  };
  cvc: {
    value: string;
    error: boolean;
    errorMessage: string;
  };
};

export const App = () => {
  const [formInputs, setFormInputs] = useState<formProps>({
    cardName: {
      value: "",
      error: false,
      errorMessage: "",
    },
    cardNumber: {
      value: "",
      error: false,
      errorMessage: "",
    },
    expDate: {
      value: "",
      error: false,
      date: "",
    },
    cvc: {
      value: "",
      error: false,
      errorMessage: "",
    },
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValid = validateForm(setFormInputs, formInputs);
    setIsValid(formValid);
  };

  return (
    <main>
      <CardSide formInputs={formInputs} />
      {isValid ? (
        <Complete />
      ) : (
        <FormSide
          setFormInputs={setFormInputs}
          formInputs={formInputs}
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};
