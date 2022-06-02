import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Best Sellers",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Swimwear",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Jeans",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "T-shirts",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Shirts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Sweatshirts&Hoodies",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Trousers",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Shorts",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Trousers",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Accessories",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Shoes",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
