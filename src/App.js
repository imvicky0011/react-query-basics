import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValidator, setFirstNameValidator] = useState(false);
  const [firstNameValidatorText, setfirstNameValidatorText] = useState("");
  const firstNameOnChangeHandler = (text) => {
    if (!/^\b([A-ZA-z])+\s*$/.test(text)) {
      setFirstName(text);
      setFirstNameValidator(true);
      setfirstNameValidatorText("Invalid firstname");
    } else {
      setFirstName(text);
      setFirstNameValidator(false);
      setfirstNameValidatorText("");
    }
  };

  //Last Name Validation
  const [lastName, setLastName] = useState("");
  const [lastNameValidator, setLastNameValidator] = useState(false);
  const [lastNameValidatorText, setLastNameValidatorText] = useState("");
  const lastNameOnChangeHandler = (text) => {
    if (!/^\b([A-ZA-z])+\s*$/.test(text)) {
      setLastName(text);
      setLastNameValidator(true);
      setLastNameValidatorText("Invalid lastname");
    } else {
      setLastName(text);
      setLastNameValidator(false);
      setLastNameValidatorText("");
    }
  };

  //Username Validation
  const [username, setUsername] = useState("");
  const [usernameValidate, setUsernameValidate] = useState(false);
  const [usernameValidateText, setUsernameValidateText] = useState("");
  
  const usernameOnChangeHandler = (text) => {
    console.log(text);
    setUsername(text);
  
    if (text.length >= 5 && text.length <= 30) {
      if (/^[a-zA-Z0-9._]{5,30}$/.test(text)) {
        setUsernameValidate(false);
        setUsernameValidateText("");
      } else {
        setUsernameValidate(true);
        setUsernameValidateText("Invalid Username");
      }
    } else {
      setUsernameValidate(true);
      setUsernameValidateText("Invalid Username");
    }
  };
  

  

  //Password Validation
  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [passwordValidateText, setPasswordValidateText] = useState("");
  
  const passwordOnChangeHandler = (text) => {
    setPassword(text);
  
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!@#$%^&*()_+|?~])[A-Za-z\d.!@#$%^&*()_+|?~]{7,16}$/.test(
        text
      )
    ) {
      setPasswordValidate(false);
      setPasswordValidateText("");
    } else {
      setPasswordValidate(true);
      setPasswordValidateText("Invalid password");
    }
  };
  

  //submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!usernameValidate && !passwordValidate && !firstNameValidator && !lastNameValidator && username.length > 0 && lastName.length > 0 && firstName.length > 0 && password.length > 0) {
      alert("Form submitted successfully!");
    }
    else {
      alert("Please enter the valid credentials")
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="gap-y-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="gap-y-5 px-5 flex flex-col items-center">
            <div className="flex flex-row items-center justify-between">
              <div className="w-[40%] flex flex-col items-start">
                <label htmlFor="firstname">Firstname</label>
                <input
                  style={{ border: "1px solid black", marginRight: "15px" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => firstNameOnChangeHandler(e.target.value)}
                />
                {firstNameValidator && (
                  <p className="text-red-500">{firstNameValidatorText}</p>
                )}
              </div>
              <div className="w-[40%] flex flex-col items-start">
                <label htmlFor="lastname">Lastname</label>
                <input
                  style={{ border: "1px solid black" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => lastNameOnChangeHandler(e.target.value)}
                />
                {lastNameValidator && (
                  <p className="text-red-500">{lastNameValidatorText}</p>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="w-[49%] flex flex-col items-start">
                <label htmlFor="username">Username</label>
                <input
                  style={{ border: "1px solid black", marginRight: "15px" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => usernameOnChangeHandler(e.target.value)}
                />
                {usernameValidate && (
                  <p className="text-red-500">{usernameValidateText}</p>
                )}
              </div>
              <div className="w-[49%] flex flex-col items-start">
                <label htmlFor="password">Password</label>
                <input
                  style={{ border: "1px solid black" }}
                  className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => passwordOnChangeHandler(e.target.value)}
                />
                {passwordValidate && (
                  <p className="text-red-500">{passwordValidateText}</p>
                )}
              </div>
            </div>
            <button
              style={{ border: "1px solid black" }}
              type="submit"
              className="border-[1px] border-[#B7B7B7] rounded-full px-3 py-1 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App