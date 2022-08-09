import React from "react";
import { formProps } from "../App";

const containsSpecialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const containsNumbers = /[0-9]/;
const containsLetters = /[a-zA-Z]/;

export const validateForm = (
  setFormInputs: React.Dispatch<React.SetStateAction<formProps>>,
  formInputs: formProps
) => {
  const { cardName, cardNumber, expDate, cvc } = formInputs;

  let resultCardName = validateCardName(cardName);
  let resultCardNumber = validateCardNumber(
    cardNumber,
    setFormInputs,
    formInputs
  );
  let resultCardExpDate = validateExpDate(expDate);
  let resultCardCvc = validateCvc(cvc);

  return !resultCardName &&
    !resultCardNumber &&
    !resultCardExpDate &&
    !resultCardCvc
    ? true
    : false;
};

const validateCardName = (cardName: any) => {
  if (cardName.value === "") {
    cardName.error = true;
    cardName.errorMessage = "Can't be empty";
  } else if (
    containsNumbers.test(cardName.value) ||
    containsSpecialCharacters.test(cardName.value.replaceAll(" ", ""))
  ) {
    cardName.error = true;
    cardName.errorMessage = "Wrong format, only letters are allowed";
  } else {
    cardName.error = false;
    cardName.errorMessage = "";
  }

  return cardName.error;
};

const validateCardNumber = (
  cardNumber: any,
  setFormInputs: any,
  formInputs: any
) => {
  if (cardNumber.value === "") {
    setFormInputs({
      ...formInputs,
      cardNumber: {
        ...cardNumber,
        error: true,
        errorMessage: "Can't be empty",
      },
    });
  } else if (cardNumber.value.replaceAll(" ", "").length !== 16) {
    setFormInputs({
      ...formInputs,
      cardNumber: {
        ...cardNumber,
        error: true,
        errorMessage: "Wrong format, 16 digits are required",
      },
    });
  } else if (
    containsSpecialCharacters.test(cardNumber.value.replaceAll(" ", "")) ||
    containsLetters.test(cardNumber.value)
  ) {
    setFormInputs({
      ...formInputs,
      cardNumber: {
        ...cardNumber,
        error: true,
        errorMessage: "Wrong format, only digits are allowed",
      },
    });
  } else {
    setFormInputs({
      ...formInputs,
      cardNumber: {
        ...cardNumber,
        error: false,
        errorMessage: "",
      },
    });
  }

  return cardNumber.error;
};

const validateExpDate = (expDate: any) => {
  if (expDate.value === "") {
    expDate.error = true;
  } else {
    expDate.error = false;
    expDate.date = transformData(expDate.value);
  }

  return expDate.error;
};

const validateCvc = (cvc: any) => {
  if (cvc.value === "") {
    cvc.error = true;
    cvc.errorMessage = "Can't be empty";
  } else if (cvc.value.replaceAll(" ", "").length !== 3) {
    cvc.error = true;
    cvc.errorMessage = "Wrong format, 3 digits are required";
  } else {
    cvc.error = false;
    cvc.errorMessage = "";
  }

  return cvc.error;
};

export const transformData = (date: string) => {
  const result = date.split("-");
  const year = result[0];
  const month = result[1];

  return `${Number(year) - 2000}/${month}`;
};
