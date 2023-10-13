import { useState } from "react";

export default function WorkInfo() {
  const [newBoxArray, setNewBoxArray] = useState([]);
  const [boxData, setBoxData] = useState({
    title: "",
    company: "",
    dates: "",
    responsibilities: "",
  });
  const [editValue, setEditValue] = useState({
    title: "",
    company: "",
    dates: "",
    responsibilities: "",
  });

  function createBox(boxData, index) {
    return (
      <>
        <div className="work_info_box">
          <div className="workplace_title_container">
            <p>
              {boxData.company} / {boxData.title}
            </p>
          </div>
          <div className="work_box_icons">
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => remove(index)}>Remove</button>
          </div>
        </div>
      </>
    );
  }

  function onEdit(indexToEdit) {
    const editedBox = newBoxArray[indexToEdit];
    const inputs = document.querySelectorAll(".work_info_input");

    // populates the input fields with the correct array index data
    inputs.forEach((input) => {
      const fieldname = input.getAttribute("placeholder");
      const value = editedBox[fieldname.toLowerCase()];

      //   input.value = editedBox[fieldname.toLowerCase()];

      // update boxData and editValue so that the input fields are left with the correct data
      setBoxData((prevData) => ({
        ...prevData,
        [fieldname.toLowerCase()]: value,
      }));

      setEditValue((prevData) => ({
        ...prevData,
        [fieldname.toLowerCase()]: value,
      }));
    });

    // updates main array so that it can update the task boxes correctly
    const updatedBoxArray = newBoxArray.filter(
      (_, index) => index !== indexToEdit
    );
    setNewBoxArray(updatedBoxArray);
  }

  //   function returnEditValue(variable) {
  //     return editValue[variable];
  //   }

  function remove(indexToRemove) {
    // const boxes = document.querySelectorAll(".work_box");
    const updatedBoxArray = newBoxArray.filter(
      (_, index) => index !== indexToRemove
    );
    setNewBoxArray(updatedBoxArray);
  }

  function onSubmit() {
    const inputs = document.querySelectorAll(".work_info_input");
    let allFieldsFilled = true;

    inputs.forEach((input) => {
      const fieldName = input.getAttribute("placeholder");
      const value = input.value;

      if (value === "") {
        allFieldsFilled = false;
      } else {
        setBoxData((prevData) => ({
          ...prevData,
          [fieldName.toLowerCase()]: value,
        }));

        setEditValue((prevData) => ({
          ...prevData,
          [fieldName.toLowerCase()]: value,
        }));
      }
    });

    console.log(boxData);
    console.log(editValue);

    if (allFieldsFilled) {
      setNewBoxArray([...newBoxArray, boxData]);

      setBoxData({
        title: "",
        company: "",
        dates: "",
        responsibilities: "",
      });

      setEditValue({
        title: "",
        company: "",
        dates: "",
        responsibilities: "",
      });

      //   inputs.forEach((input) => {
      //     input.value = "";
      //   });
    }
  }

  return (
    <div className="work_info_table">
      <div className="underline work_info_underline">
        <h2 className="table_header_text">Work Experience</h2>
        <div className="work_info_experiences">
          {newBoxArray.map((item, index) => (
            <div className="work_box" key={index}>
              {createBox(item, index)}
            </div>
          ))}
        </div>
      </div>

      <form action="#" className="form_container">
        {/* <label htmlFor="">First Name</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="Title"
          required
          onChange={(e) => {
            setBoxData({ ...boxData, title: e.target.value });
            setEditValue({ ...editValue, title: e.target.value });
          }}
          value={editValue.title}
          //   onChange={(e) => setBoxData({ ...boxData, title: e.target.value })}
        />

        {/* <label htmlFor="">Last Name</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="Company"
          required
          onChange={(e) => {
            setBoxData({ ...boxData, company: e.target.value });
            setEditValue({ ...editValue, company: e.target.value });
          }}
          value={editValue.company}
          //   onChange={(e) => setBoxData({ ...boxData, company: e.target.value })}
        />

        {/* <label htmlFor="">Email</label> */}
        <input
          className="work_info_input"
          type="email"
          placeholder="Dates"
          required
          onChange={(e) => {
            setBoxData({ ...boxData, dates: e.target.value });
            setEditValue({ ...editValue, dates: e.target.value });
          }}
          value={editValue.dates}
          //   onChange={(e) => setBoxData({ ...boxData, dates: e.target.value })}
        />

        {/* <label htmlFor="">Phone number</label> */}
        <input
          className="work_info_input"
          type="text"
          placeholder="Responsibilities"
          required
          onChange={(e) => {
            setBoxData({ ...boxData, responsibilities: e.target.value });
            setEditValue({ ...editValue, responsibilities: e.target.value });
          }}
          value={editValue.responsibilities}
          //   onChange={(e) =>
          //     setBoxData({ ...boxData, responsibilities: e.target.value })
          //   }
        />

        {/* <input
          className="work_info_input"
          type="text"
          placeholder="Address"
          required
        /> */}

        <div className="button_container">
          <button className="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
