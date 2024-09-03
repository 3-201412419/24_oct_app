import Comment from './datas';

export default function Cart() {
    let food : any = ['Tomatoes', 'Pastas'];
    return (
      <div>
        <h4 className="title">Cart</h4>
        <Comment />
        <Cartitem item = {food[0]}/>
        <Cartitem item = {food[1]}/>
        <Button item = "red" />
        <Button item = "blue" />
      </div>
    )
  } 

  function Button(props : any){
    return (
        <button style = {{background : `${props.item}`, margin : '50px'}}>123</button>
    )
  }


  function Cartitem(props : any){
    return (
        <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
    }