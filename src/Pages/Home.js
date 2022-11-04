import React from "react";
import { useState } from "react";
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';

const Home = () =>{
    const [item, setItem]=useState({price:"", name:"",image:""});
    const [items, setItems] = useState([{
      image:pic1,
      name: "Salt-Bread",
      price: "2500rwf"
  
    },
    {
      image:pic2,
      name: "Chocolate-Bread",
      price: "3500rwf"
  
    },
    {
      image:pic3,
      name: "Milk-Bread",
      price: "2000rwf"
  
    }]);
    const ChangeItem=(e)=>{
      setItem({...item,[e.target.name]:e.target.value})
  
    }
  
  
    const addItem=()=>{
  setItems([...items,item])
  setItem({price:"", name:"",image:""})
    }
  
  
    return(
        <>
     <di><h1>Home</h1></di>
     <div className="container mt-5">
      <div className='row'>
        <div className='col col-6'>
          <ul className="list-group">
            {
              items.map(function (item,index) {
                return (<li key={index} className="list-group-item">
                   <div><img src={item.image} style={{height:'10rem'}} /></div>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </li>)
              })
            }
          </ul>
        </div>



       
  < div className='col col-6'>
  <div className="mb-3">
          <label  className="form-label">ProductImage</label>
          <input value={item.image} onChange={ChangeItem} type="text" name='image' className="form-control"  placeholder="ProductImage" />
        </div>
  <div className="mb-3">
          <label  className="form-label">ProductName</label>
          <input value={item.name} onChange={ChangeItem} type="text" name='name' className="form-control"  placeholder="ProductName" />
        </div>
        <div className="mb-3">
          <label  className="form-label">Price</label>
          <input value={item.price} onChange={ChangeItem} type="text" name='price' className="form-control"  placeholder="ProductPrice" />
        </div>
        <div className='mb4'>
          <button onClick={addItem} className='btn btn-success '>ADD PRODUCT</button>
        </div>
    
  </div>
       
      </div>

    </div>
     </>
    )
}
export default Home