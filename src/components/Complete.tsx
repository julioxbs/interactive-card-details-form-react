export const Complete = () => {
  return (
    <div id="complete__message">
        <img src="../../public/images/icon-complete.svg" alt="complete" />
        <h2>thank you</h2>
        <p>We've added your card details</p>
        <button onClick={() => window.location.reload()}>Continue</button>
    </div>
  )
}