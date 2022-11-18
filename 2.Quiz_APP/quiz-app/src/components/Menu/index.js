import {useContext} from "react";
import {DataContext} from '../../App'

const Menu = () => {
  //const menuContext = useContext(DataContext)
  const { setAppstate } = useContext(DataContext)
  return (
    <div className="menu">
      <h1>Menu</h1>
      <button onClick={() => {return setAppstate('quiz')} }>Start Quiz!</button>
    </div>
  );
};

export default Menu;
