import React from 'react'



const Category = () => {

  return (
    <>
        <section className="category">
            <div className="container">
                {Category.map((item)=>(
                    <div className="boxs" key={item.id}>
                        <div className="box boxItem">

                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Category