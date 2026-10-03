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

const App = () => {
  const course = 'Information Technology'
  const parts = [
    { name: 'CSIT321', units: 3 },
    { name: 'CSIT327', units: 3 },
    { name: 'IT365', units: 3 },
  ]

  return (
    <main>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </main>
  )
}

export default App
