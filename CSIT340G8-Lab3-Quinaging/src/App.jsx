import './App.css'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, units }) => (
  <p>
    {name} {units} units
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.name} name={part.name} units={part.units} />
    ))}
  </div>
)

const Total = ({ parts }) => (
  <p>Number of units {parts.reduce((sum, part) => sum + part.units, 0)}</p>
)

const Footer = ({ fullName, courseCode, section }) => (
  <footer className="student-footer">
    <span className="footer-label">Submitted by</span>
    <p>{fullName} - {courseCode} - {section}</p>
  </footer>
)

const App = () => {
  const course = {
    name: 'Information Technology',
    parts: [
      { name: 'CSIT321', units: 3 },
      { name: 'CSIT327', units: 3 },
      { name: 'IT365', units: 3 },
    ],
  }
  const student = {
    fullName: 'Kris Van Ruzzel Quinaging',
    courseCode: 'CSIT340',
    section: 'G8',
  }

  return (
    <>
      <main>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </main>
      <Footer
        fullName={student.fullName}
        courseCode={student.courseCode}
        section={student.section}
      />
    </>
  )
}

export default App
