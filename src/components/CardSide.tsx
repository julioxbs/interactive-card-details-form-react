import { formProps } from "../App";

type cardSideProps = {
  formInputs: formProps
}

export const CardSide = ({ formInputs }: cardSideProps) => {
  const { cardName, cardNumber, expDate, cvc } = formInputs;
  return (
    <aside id="card__side">
        <div id='card__front' className='cards__attr'>
            <img src="/images/bg-card-front.png" alt="card front" className='cards__img--attr' />
            <img src="/images/card-logo.svg" alt="card logo" id='card__logo' className='card__info'/>

            <p id='card__number' className='card__info'>{cardNumber.value === '' ? '0000 0000 0000 0000' : cardNumber.value}</p>
            <div id='card__bottom' className='card__info'>
                <p>{cardName.value === '' ? 'name' : cardName.value}</p>
                <p>{expDate.value === '' ? '00/00' : expDate.value}</p>
            </div>
        </div>

        <div id='card__back' className='cards__attr'>
            <img src="/images/bg-card-back.png" alt="card back" className='cards__img--attr' />
            <p id='card__cvc'>{cvc.value === '' ? '000' : cvc.value}</p>
        </div>
    </aside>
  )
}