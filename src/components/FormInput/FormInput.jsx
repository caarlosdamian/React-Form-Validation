import "./forminput.css";
const FormInput = ({ placeholder, setUsername }) => {
  return (
    <div className="formInput">
      {/* <label htmlFor="">Username</label> */}
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
