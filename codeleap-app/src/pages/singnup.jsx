import "../styles/signupStyle.css"

function Signup() {
  return (
    <div className="signupBody">
      <h3>Welcome to CodeLeap network!</h3>
      <label htmlFor="user-input">
        Please enter your username
      </label>
      <input type="text" name="userInput" id="user-input" />
      <button className="login-button">Enter</button>
    </div>
  )
}

export default Signup