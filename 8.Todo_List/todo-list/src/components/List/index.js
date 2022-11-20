import {AiOutlineEdit,AiTwotoneDelete} from 'react-icons/ai'
const List = (props) => {
    const {title,id, removeItem,editItem} = props
    return (
       
        <div className="list-item">
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="button-container">
                <button className='edit-btn' onClick={()=>editItem(id)}><AiOutlineEdit/></button>
                <button className='del-btn' onClick={()=>removeItem(id)}><AiTwotoneDelete/></button>
            </div>
        </div>

    )
}

export default List