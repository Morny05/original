import React ,{ useState } from "react";
import "./card.css";

export default function Card(){
    const [cardOpen, setCardOpen] = useState(false)

    const closeCard= () => {
        setCardOpen(null);
    }

    return (
        <>
            <div className="card" onClick={() => closeCard(!cardOpen)}>
                <span className="flexCenter"></span>    
            </div> 
            <div className={cardOpen ? "overlay" : "nonoverlay"}></div>
            <div className={cardOpen ? "cartItem" : "cardHide"}>
                <div className="title flex">
                    <h2>Card JSX</h2>
                </div>
            </div>
            
        </>
    )
}