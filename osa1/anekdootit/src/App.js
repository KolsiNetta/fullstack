import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

  const getRandom = () => {

    var x = Math.floor(Math.random()*5 )
    
    return(      
      x
    )
  }

  const Votes = (props) => {
    return (
      <p>has votes {props.pisteet[props.index]}</p>
    )
  }


  


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setAll] = useState([0,0,0,0,0,0])

  const setAnec = () => {    
    setSelected(getRandom())
    
  }

  const setVote = () => {
    const copy = {...allVotes}
    copy[selected] += 1
    setAll(copy)    
  }

  const MostVotes = (props) => {
    var indeksi= 0
    var suurin = 0

    for(var i = 0; i < 6; i++){
      if(allVotes[i] > suurin){
        suurin = allVotes[i]
        indeksi = i
      }
    }
    return (
      <div>
        <p>{anecdotes[indeksi]} </p>
        <p>has {allVotes[indeksi]} votes</p>
      </div>
    )
  }

  return (
    <div>
      <h1> Anecdotes of the day</h1>
      {anecdotes[selected]}
      <Votes pisteet={allVotes} index={selected}/>
      <Button handleClick={() => setVote()} text="vote" />   
      <Button handleClick={() => setAnec()} text="next anecdote" />   
      <h1> Anecdote with most votes</h1>
      <MostVotes  anecdotes={anecdotes}/> 
       </div>
 
 )
}

export default App