import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
    
  }

  const Header = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
      </div>
    )
  }
  
  const Content = (props) => {
      return (
          <div> 
          {props.parts.map(part =>
          <Part key={part.id} part={part} />)}
        </div>
      )
      
  }
  
  const Part = (props) => {
        return(
          <div>
          <p>{props.part.name} {props.part.exercises} </p>
          </div>
      
      )
  }

  const Total = ({parts}) => {
    return (
      <h4>total of {parts.reduce((sum,part) => sum+part.exercises,0)} exercises</h4>
    )
  }
  



export default Course