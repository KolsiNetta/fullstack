import { useState } from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
  if (props.value[0] + props.value[1] + props.value[2] == 0){
    return "no feedback given"
  }
  
  return (
    <table>
      <StatisticLine text="good" value={props.value[0]}  />
      <StatisticLine text="neutral" value={props.value[1]} />
      <StatisticLine text="bad" value={props.value[2]} />
      <StatisticLine text="all" value={props.value[0] + props.value[1] + props.value[2]} />
      <StatisticLine text="average" value={((props.value[0] * 1) + (props.value[2] * (-1)))/(props.value[0] + props.value[1] + props.value[2])} />
      <StatisticLine text="positive" value={props.value[0]/ (props.value[0] + props.value[1] + props.value[2]) * 100}  symbol="%" />
    </table>
  )

}

const StatisticLine = props => <tr><td>{props.text}</td> <td>{props.value} </td></tr> 

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleLeftClick = () => {
    setGood(good + 1)
  }
  const handleMiddleClick = () => {
    setNeutral(neutral + 1)
  }

  const handleRightClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text={'give feedback'} />
      <button onClick={handleLeftClick}>good</button>
      <button onClick={handleMiddleClick}>neutral</button>
      <button onClick={handleRightClick}>bad</button>
      <Header text={'statistics'} />
      <Statistics value={[good , neutral , bad]}/>
    </div>
  )
}

export default App