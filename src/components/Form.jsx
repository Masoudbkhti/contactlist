const Form = ({
  submitFormHandler,
  inputChangeHandler,
  emailChangeHandler,
  phoneChangeHandler,
  searchHandler,
  value,
  email,
  phone,
  searchTerm,
}) => {
  return (
    <form className="form" onSubmit={submitFormHandler}>
      <div>
        <input
          className="search"
          placeholder="Search"
          value={searchTerm}
          onChange={searchHandler}
        />
      </div>
      <input
        className="input"
        placeholder="Enter your Name"
        value={value}
        onChange={inputChangeHandler}
      />
      <input
        className="input"
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={emailChangeHandler}
      />
      <input
        className="input"
        type="number"
        placeholder="Enter your Phone number"
        value={phone}
        onChange={phoneChangeHandler}
      />
      <button className="btn" type="submit" style={{ margin: 10 }}>
        + Add
      </button>
    </form>
  );
};

export default Form;
