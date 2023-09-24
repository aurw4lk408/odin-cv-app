import { useState } from "react";

export default function WorkInfo() {
  const [isSent, setIsSent] = useState("");
  const [basicInfoArray, setBasicInfoArray] = useState([]);
  const [required, setRequired] = useState(true);

  const [editButtonDisabled, setEditButtonDisabled] = useState(true);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  function onEdit() {
    if (isSent === "submitted") {
      const inputs = document.querySelectorAll(".work_info_input");
      inputs.forEach((input, index) => {
        input.value = basicInfoArray[index];
      });

      setIsSent("editing");
      setRequired(false);

      setEditButtonDisabled(true);
      setSubmitButtonDisabled(false);
      setInputDisabled(false);
    }
  }

  function onSubmit() {
    const inputs = document.querySelectorAll(".work_info_input");
    let allFieldsFilled = true;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFieldsFilled = false;
      }
    });

    if (allFieldsFilled) {
      const values = Array.from(inputs).map((input) => input.value);

      setBasicInfoArray(values);
      setIsSent("submitted");

      inputs.forEach((input) => {
        input.value = "";
      });
      setRequired(true);

      setEditButtonDisabled(false);
      setSubmitButtonDisabled(true);
      setInputDisabled(true);
    }
  }

  return (
    <div className="work_info_table">
      <div className="underline">
        <h2 className="table_header_text">Work Experience</h2>
      </div>

      <form action="#" className="form_container">
        {/* <label htmlFor="">First Name</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="First Name"
          required={required}
          disabled={inputDisabled}
        />

        {/* <label htmlFor="">Last Name</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="Last Name"
          required={required}
          disabled={inputDisabled}
        />

        {/* <label htmlFor="">Email</label> */}
        <input
          className="work_info_input"
          type="email"
          placeholder="Email"
          required={required}
          disabled={inputDisabled}
        />

        {/* <label htmlFor="">Phone number</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="Phone Number"
          required={required}
          disabled={inputDisabled}
        />

        {/* <label htmlFor="">Address</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="Address"
          required={required}
          disabled={inputDisabled}
        />

        <div className="button_container">
          <button
            className="edit"
            onClick={onEdit}
            disabled={editButtonDisabled}
          >
            Edit
          </button>
          <button
            className="submit"
            onClick={onSubmit}
            disabled={submitButtonDisabled}
          >
            Submit
          </button>
        </div>
      </form>

      <p
        className="notification_text"
        style={{ margin: isSent ? "1em 0" : "0" }}
      >
        {isSent === "submitted" && "This section was successfully submitted"}
        {isSent === "editing" && "This section is currently being edited"}
      </p>
    </div>
  );
}
