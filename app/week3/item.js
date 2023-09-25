
export default function Item({name, quantity, category}){
    return(
        <div className="m-1 p-1 border-x-cyan-600 border-2">
            <h3>Name: {name}</h3>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}