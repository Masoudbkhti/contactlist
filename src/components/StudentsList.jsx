import StudentItem from "./StudentItem";

const StudentList = ({ students, searchTerm }) => {
  return (
    <div className="list">
      <ul>
        {students
          .filter(({ name }) => name.includes(searchTerm))
          .map(({ id, name, email, phone }) => (
            <StudentItem
              id={id}
              name={name}
              email={email}
              phone={phone}
              searchTerm={searchTerm}
            />
          ))}
      </ul>
    </div>
  );
};

export default StudentList;
