import { useState } from 'react'

const StatisticLine = (props) => {
  if(props.value===0)return(<></>)
  let val = props.value
  if(props.text==="positive"){
    val+=" %"
  }
  return(<tr>

      <td>{props.text}</td>
      <td>{val}</td>

  </tr>
    
  )
}


const Statistics = (props) => {
  

  return(
    <div>
      <table>
      <StatisticLine text="good" value ={props.statistic[0]} />
      <StatisticLine text="neutral" value ={props.statistic[1]} />
      <StatisticLine text="bad" value ={props.statistic[2]} />
      <StatisticLine text="all" value ={props.statistic[3]} />
      <StatisticLine text="avarage" value ={props.statistic[4]} />
      <StatisticLine text="positive" value ={props.statistic[5]} />
      </table>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avarage, setAvarage] = useState(0)
  const [positive, setPositive] = useState(0)

  const Button =(button)=> () =>{
    
    let newGood =good
    let newNeutral=neutral
    let newBad=bad
    if(button==="good"){
      newGood+=1
    }else if(button==="neutral"){
      newNeutral+=1
    }else{
      newBad+=1
    }
    setGood(newGood)
    setNeutral(newNeutral)
    setBad(newBad)

    setAll(all+1)
    
    setAvarage((newGood-1*newBad)/(all+1))
    
    setPositive(newGood/(all+1));
   

  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={Button("good")}>good</button> 
      <button onClick={Button("neutral")}>neutral</button>
      <button onClick={Button("bad")}>bad</button>
      <h1>statistics</h1>
      <Statistics statistic={[good,neutral,bad,all,avarage,positive]} />

    </div>
  )
}

export default App
