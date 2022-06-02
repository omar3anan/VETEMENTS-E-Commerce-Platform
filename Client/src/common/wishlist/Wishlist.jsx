import React, { useEffect, useState } from "react"
import "./style.css"


/// BATCH

let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlRFU1RAZ21haWwuY29tIiwiX2lkIjoiNjI5OGY2ODk2YTJjMGQ4YzQ5YmI4ZWViIiwiaWF0IjoxNjU0MTkxNzUzLCJleHAiOjE2NTQyNzgxNTN9.sxbrhQ17of8ZAwEh61LY4py4L-u_W4aA7suQTLF1v3E"
const headers = {
  'Accept': 'Application/json',
  'Authorization': token
}


const Wishlist = ({ CartItem, addToCart, decreaseQty }) => {

  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/customer/wishlist", {
      // const response = await fetch("http://vetements4-env.eba-djbmqqrc.us-east-1.elasticbeanstalk.com /customer/wishlist", {
      method: 'GET',
      headers: {
        ...headers
      }
    })
    const data = await response.json()
    setProducts(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {products.length == 0 && <h1 className='no-items product'>No Items are add in Wishlist</h1>}
            {products.map((product) => {
              return (
                <div className='box'>
                  <div className='product mtop'>
                    <div className='img'>
                      <img src={product.banner} alt='' />
                      <div className='product-like'>
                        {/* <label>{count}</label> <br /> */}
                        {/* <i className='fa-regular fa-heart' onClick={increment}></i> */}
                      </div>
                    </div>
                    <div className='product-details'>
                      <h3>{product.name}</h3>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='price'>
                        <h4>${product.price}.00 </h4>

                        <button onClick={(event) => {

                          fetch(`http://localhost:8000/wishlist/${product._id}`, {
                            //fetch(`http://vetements4-env.eba-djbmqqrc.us-east-1.elasticbeanstalk.com/wishlist/${product._id}`, {
                            method: 'delete',
                            headers: {
                              ...headers
                            }


                          }).then(function (response) {
                            console.log(response)
                            return response.json();

                          });
                          window.location.reload(false)


                        }}
                        >
                          <i className='fa fa-minus'></i>
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>

        </div>


      </section>

    </>
  )

}

export default Wishlist;  