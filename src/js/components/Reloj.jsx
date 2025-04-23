import React from "react";

const Reloj = (props) => {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.numeroCuatro % 10}</div>
            <div className="three">{props.numeroTres % 10}</div>
            <div className="two">{props.numeroDos % 10}</div>
            <div className="one">{props.numeroUno % 10}</div>
        </div>
    );
}

export default Reloj;