import {useContext} from 'react'
import QuestionsData from "../../data/questionData";
import { DataContext } from '../../App';

const Score = () => {
  const {setScore,setAppstate,score} = useContext(DataContext)
  return (
    <div className="score">
      <h1>Score</h1>
      <h2>{score}/{QuestionsData.length}</h2>
      <button onClick={()=>{
        setScore(0)
        setAppstate('menu')
      }} >Play Again</button>
    </div>
  );
};

export default Score;
