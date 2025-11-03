

export default function ProductCard(props){

  return(
    <div className='card'>
    <img src={props.picture} ></img>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <h2>{props.price}</h2>
    <button className="addToCard">Add To Cart</button>
    <button className="buyNow">Buy now</button>


    </div>




  )






}


