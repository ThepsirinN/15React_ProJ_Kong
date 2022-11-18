import { useState,useEffect,useContext} from "react";
import QuestionsData from "../../data/questionData";
import { DataContext } from '../../App'



const Quiz = () => {
  const [current, setCurrent] = useState(0)
  const [selectChoice, setSelectChoice] = useState('')

  const {score,setScore, setAppstate} = useContext(DataContext)

  const nextQuestion = () =>{
    setSelectChoice('') 
    if(current === 4){
      setAppstate('score')
    }
    setCurrent(current+1)
  }

  const checkAns = () => {
    if (selectChoice!==""){
      if(selectChoice === QuestionsData[current].answer){
        setScore(score+1)
        nextQuestion()
      }else{
        nextQuestion()
      }
    }
  }

  useEffect(() => {
    checkAns()
    // eslint-disable-next-line
  },[selectChoice])
  
  return (
    <div className="quiz">
      <h1>{current+1}.{QuestionsData[current].question} ?</h1>
      <div className="choice">
        <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
        <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
        <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
        <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
      </div>
      <p>{current+1}/{QuestionsData.length}</p>
    </div>
  );
};

export default Quiz;
