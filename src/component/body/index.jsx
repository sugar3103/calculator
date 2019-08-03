import React, {useState} from 'react';

export default function Body(props) {
    const sendTextToParent = (num) => {
        // num.preventDefault();
        console.log(num)
    }

    return (
        <section>
            <div className="jumbotron text-center">
                <h1>
                    <img width="100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104216853/original/add16bf5eab299809a30a1c20a0217efb8a0c860/create-an-html-calculator.png" />
                    Sugar Calculator 3FORCOM
                <img width="100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104216853/original/add16bf5eab299809a30a1c20a0217efb8a0c860/create-an-html-calculator.png" />
                </h1>
            </div>
            <div className="jumbotron">
                <div style={{width:"1300px"}}className="text-center">
                    <h1 id="result" style={{ fontWeight: "bold", fontSize:"50px" }}>{props.result}</h1>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button type="button" class="btn btn-secondary" onClick={sendTextToParent}>
                            CE</button>
                        <button type="button" class="btn btn-secondary">C</button>
                        <button type="button" class="btn btn-secondary">Del</button>
                        <button type="button" class="btn btn-warning">/</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" class="btn btn-secondary">7</button>
                        <button type="button" class="btn btn-secondary">8</button>
                        <button type="button" class="btn btn-secondary">9</button>
                        <button type="button" class="btn btn-warning">*</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" class="btn btn-secondary">4</button>
                        <button type="button" class="btn btn-secondary">5</button>
                        <button type="button" class="btn btn-secondary">6</button>
                        <button type="button" class="btn btn-warning">-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" class="btn btn-secondary">1</button>
                        <button type="button" class="btn btn-secondary">2</button>
                        <button type="button" class="btn btn-secondary">3</button>
                        <button type="button" class="btn btn-warning">+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" class="btn btn-secondary">+/-</button>
                        <button type="button" class="btn btn-secondary">0</button>
                        <button type="button" class="btn btn-secondary">.</button>
                        <button type="button" class="btn btn-warning">=</button>
                    </div>
                </div>
            </div>
        </section >
    )
}