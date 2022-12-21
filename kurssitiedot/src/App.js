
const Header = (props) => {
  

  return (
    <>
      {props.course}
    </>
  )
}

const Part = (props) => {
  

  return (
    <>
      {props.part} {props.exercises}
    </>
  )
}

const Total = (props) => {
  

  return (
    <>
      {props.total}
    </>
  )
}

const Content = (props) => {
  

  return (
    <>
      <p>
      <Part part={props.part1} exercises={props.exercises1}/>
      </p>
      <p>
      <Part part={props.part2} exercises={props.exercises2}/>
      </p>
      <p>
      <Part part={props.part3} exercises={props.exercises3}/>
      </p>
    </>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course={course} /></h1>
      <Content part1={part1} part2={part2} part3={part3} exercises3={exercises3} exercises2={exercises2} exercises1={exercises1} />
      <p>Number of exercises <Total total={exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

export default App