import React, { useEffect, useState } from 'react';

export default function Body(props) {

    const [firstNum, setFirstNum] = useState("0")
    const [num1, setNum1] = useState(0)
    const [secNum, setSecNum] = useState("0")
    const [num2, setNum2] = useState(0)
    const [callNum2, setCallNum2] = useState(false)
    const [dau, setDau] = useState("")
    const [total, setTotal] = useState("0")

    // thêm số vào num1 hoặc num2
    const pushNum = (num) => {
        // num.preventDefault();
        if (!callNum2) {
            setFirstNum(firstNum + num)
        } else {
            setSecNum(secNum + num)
        }
    }

    //useEffect cho 2 số đầu và thứ 2
    useEffect(() => {
        setNum1(parseFloat(firstNum))
        setTotal(parseFloat(firstNum))
    }, [firstNum])
    useEffect(() => {
        setNum2(parseFloat(secNum))
    }, [secNum])

    // reset phép tính về 0
    const resetNum = () => {
        setTotal("0");
        setFirstNum("0");
        setSecNum("0");
        setDau("");
        setCallNum2(false)
    }
    // nhập dấu +,-,*,/ cho phép tính
    const inputPhepTinh = (dau) => {
        if (firstNum !== "0") {
            setCallNum2(true)
            setDau(dau)
        }
    }

    // thay đổi số đầu tiên sang âm
    const nagative = () => {
        if (num1 > 0) {
            setFirstNum(-Math.abs(firstNum))
            setNum1(parseFloat(firstNum))
        }
    }

    const calculate = () => {
        switch (dau) {
            case "+":
                setTotal(parseFloat(num1 + num2));
                break;
            case "-":
                setTotal(parseFloat(num1 - num2));
                break;
            case "*":
                setTotal(parseFloat(num1 * num2));
                break;
            case "/":
                setTotal(parseFloat(num1 / num2));
                break;
            case "%":
                setTotal(parseFloat(num1 * (num2 / 100)));
                break;
            default:
                setTotal("Wrong Inputed");
                break;
        }
        setCallNum2(false);
    }

    return (
        <section>
            <div className="jumbotron text-center">
                <h1>
                    <img width="100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104216853/original/add16bf5eab299809a30a1c20a0217efb8a0c860/create-an-html-calculator.png"
                        alt="calulator logo" />
                    Sugar Calculator 3FORCOM
                <img width="100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104216853/original/add16bf5eab299809a30a1c20a0217efb8a0c860/create-an-html-calculator.png"
                        alt="calulator logo" />
                </h1>
            </div>
            {!callNum2
                ?
                <div className="jumbotron">
                    <div style={{}} className="text-center">
                        <h1 id="result" style={{ fontWeight: "bold", fontSize: "50px" }}>{total.toLocaleString()}</h1>
                    </div>
                </div>
                :
                <div className="jumbotron">
                    <div style={{}} className="text-center">
                        <p id="num1" style={{ fontSize: "30px" }}>{num1.toLocaleString()}</p>
                    </div>
                    <div style={{ marginTop: "-40px", marginLeft: "300px" }} className="text-center">
                        <h5 id="result" style={{ fontSize: "30px" }}>{dau}</h5>
                    </div>
                    <div style={{}} className="text-center">
                        <p id="num2" style={{ fontSize: "30px" }}>{num2.toLocaleString()}</p>

                    </div>
                </div>
            }

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-secondary" onClick={resetNum}>AC</button>
                        <button type="button" className="btn btn-secondary" onClick={() => nagative()}>+/-</button>
                        <button type="button" className="btn btn-secondary" onClick={() => inputPhepTinh("%")}>%</button>
                        <button type="button" className="btn btn-warning" onClick={() => inputPhepTinh("/")}>/</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("7")}>7</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("8")}>8</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("9")}>9</button>
                        <button type="button" className="btn btn-warning" onClick={() => inputPhepTinh("*")}>*</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("4")}>4</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("5")}>5</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("6")}>6</button>
                        <button type="button" className="btn btn-warning" onClick={() => inputPhepTinh("-")}>-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("1")}>1</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("2")}>2</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum("3")}>3</button>
                        <button type="button" className="btn btn-warning" onClick={() => inputPhepTinh("+")}>+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-secondary custom-btn" onClick={() => pushNum(0)}>0</button>
                        <button type="button" className="btn btn-secondary" onClick={() => pushNum(".")}>.</button>
                        <button type="button" className="btn btn-warning" onClick={() => calculate()}>=</button>
                    </div>
                </div>
            </div>
        </section >
    )
}