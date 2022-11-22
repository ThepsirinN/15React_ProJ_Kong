import { MyCartContext } from "../../management/context";
const HeadCart = () => {
    const {amount} = MyCartContext()
    return (
        <button className="button">
            <span>Shoping Cart </span>
            <span className="badge">{amount}</span>
        </button>
    )
}

export default HeadCart