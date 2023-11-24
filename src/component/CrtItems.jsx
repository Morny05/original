import React from 'react'
import { AiOutLineClose } from ""

export const CrtItems = ({id, title, price, description, category, image, rating}) => {
  return (
    <>
        <div className="cardList" key={id}>
            <div className="cardContent">
                <div className="img">
                    <img src='' alt=''/>
                    <button>
                        <AiOutLineClose/>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CrtItems