const StudentItem = ({ id, name, email, phone, searchTerm }) => {
  const index = name.indexOf(searchTerm);

  return (
    <li key={id} className="list">
      {index === -1 ? (
        <>
          <div>
            <span style={{ fontWeight: "bold" }}>Name:</span> {name}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Email:</span> {email}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Phone:</span> {phone}
          </div>
        </>
      ) : (
        <p>
          <div>
            <span style={{ fontWeight: "bold" }}>Name: </span>
            <span>{name.slice(0, index)}</span>
            <span style={{ backgroundColor: "yellow" }}>
              {name.slice(index, index + searchTerm.length)}
            </span>
            <span>{name.slice(index + searchTerm.length)}</span>
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Email:</span> {email}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Phone:</span> {phone}
          </div>
        </p>
      )}
    </li>
  );
};

export default StudentItem;
