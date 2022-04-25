import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [ filterText, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const alreadyExists = persons.some((person) => person.name === newName);
    const message= `${newName} is already added to phonebook`
  
    if(alreadyExists){
      window.alert(message)
      setNewName('')
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)

    if (event.target.value.length >= 1){      
      setShowAll(false)      
    }
    else {
      setShowAll(true)
    }    
  }

  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()) === true)

  return (
    
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilter={handleFilter}/>
      <h2> add a new</h2>
      <PersonForm name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow = {personsToShow}/>
    </div>
  )

}

const Filter = (props) => {
  return(
    <form>
    <div> 
        filter shown with  <input value={props.filterText} onChange={props.handleFilter}
    /></div> 
  </form>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
        
    <div> 
      name: <input value={props.name} onChange={props.handleNameChange}
    /></div>
    <div>
      number: <input value={props.number} onChange={props.handleNumberChange}
    /></div>
    <button type="submit">add</button>
</form>
  )
}

const Persons = (props) => {
  return(
    <ul>
        {props.personsToShow.map(person => 
          <Person key={person.name} note={person} />
        )}
   </ul>

  )
}


export default App