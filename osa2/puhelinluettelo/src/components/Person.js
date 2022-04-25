const Person = (props) => {
    console.log(props)
    return(
      <div>
      <p>{props.note.name} {props.note.number} </p>
      </div>
  )
}

  export default Person