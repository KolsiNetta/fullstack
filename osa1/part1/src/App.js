
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} />
      <Content exercises1={course.parts[0].exercises} />
      <Content part2={course.parts[1].name} />
      <Content exercises2={course.parts[1].exercises} />
      <Content part3={course.parts[2].name} />
      <Content exercises3={course.parts[2].exercises} />
      <Total  total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App
