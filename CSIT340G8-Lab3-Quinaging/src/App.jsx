import './App.css'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.name} name={part.name} exercises={part.exercises} />
    ))}
  </div>
)

const Total = ({ parts }) => (
  <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
)

const App = () => {
  const course = 'Information Technology'
  const parts = [
    { name: 'CSIT321', exercises: 3 },
    { name: 'CSIT327', exercises: 3 },
    { name: 'IT365', exercises: 3 },
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
