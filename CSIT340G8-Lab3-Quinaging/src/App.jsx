import './App.css'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, units }) => (
  <p>
    {name} {units} units
  </p>
)

const Content = ({ part1, part2, part3 }) => (
  <div>
    <Part name={part1.name} units={part1.units} />
    <Part name={part2.name} units={part2.units} />
    <Part name={part3.name} units={part3.units} />
  </div>
)

const Total = ({ part1, part2, part3 }) => (
  <p>Number of units {part1.units + part2.units + part3.units}</p>
)

const App = () => {
  const course = 'Information Technology'
  const part1 = { name: 'CSIT321', units: 3 }
  const part2 = { name: 'CSIT327', units: 3 }
  const part3 = { name: 'IT365', units: 3 }

  return (
    <main>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </main>
  )
}

export default App
