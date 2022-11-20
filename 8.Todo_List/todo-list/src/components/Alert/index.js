import { useEffect } from "react"

const Alert = (props) =>{
    const {showState,setShowState,todoList} = props
    useEffect(() => {
        // for automatically cleaing alert
      const tid = setTimeout(()=>setShowState(
        {
            show: false,
            title: "",
            color: "",
          }
      ),3000)
      return () => clearTimeout(tid)
    },)
    
    const cName = "show-alert "
    return (
        <h2 className={cName + showState.color}> {showState.show && showState.title}</h2>
    )
}

export default Alert