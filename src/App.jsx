


// שלב_ראשון

// function CourseGrade() {
//   return <h3>ציון: 95</h3>;
// }

// function ReactCourse() {
//   return (
//     <div>
//       <h2>קורס React</h2>
//       <CourseGrade />
//     </div>
//   );
// }

// function JavaCourse() {
//   return <h2>קורס Java</h2>;
// }
// שלב_שני
const books = [
  {
    id: 1,
    title: "לומדים React",
    author: "דנה לוי",
    year: 2024,
    price: 80
  },
  {
    id: 2,
    title: "מבוא ל־Java",
    author: "יעל כהן",
    year: 2023,
    price: 95
  },
  {
    id: 3,
    title: "יסודות התכנות",
    author: "נועה ישראלי",
    year: 2025,
    price: 70
  }
];
function BooksTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>מזהה</th>
          <th>שם הספר</th>
          <th>מחברת</th>
          <th>שנת הוצאה</th>
          <th>מחיר</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CourseDetails(props) {
  return (
    <div>
      <h2>{props.courseName}</h2>
      <p>ציון: {props.grade}</p>
    </div>
  );
}
function PersonDetails() { 
   return (
    <div dir="rtl">
      <h1>פרטים אישיים</h1>
      <p>שם: רוזה</p>
      <p>גיל: 20</p>
      {/* שלב_ראשון */}
      {/* <ReactCourse />
      <JavaCourse /> */}
      <CourseDetails courseName="React" grade={95} />
      <CourseDetails courseName="Java" grade={90} />
      <BooksTable />
    </div>
  );
}

export default PersonDetails;