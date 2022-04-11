
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part pt= {props.part1} ex= {props.exercises1} />
      <Part pt= {props.part2} ex= {props.exercises2} />
      <Part pt= {props.part3} ex= {props.exercises3} />
    </div>
  )
}

const Part = (props) => {

  return(
    <div>
    <p>{props.pt} {props.ex} </p>

    </div>

  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.total}</p>

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
      <Header course={course} />
      <Content part1={part1} />
      <Content exercises1={exercises1} />
      <Content part2={part2} />
      <Content exercises2={exercises2} />
      <Content part3={part3} />
      <Content exercises3={exercises3} />
      <Total  total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
