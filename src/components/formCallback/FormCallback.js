import "./formCallback.scss";
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {changeEventHandlerDecorator} from "../prices/Prices";
import OrdinaryCircleLoader from "../loader/Loader";

export default function FormCallback() {
    const [send, setSend] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [valueName, setValueName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();
    const counterClasses = ["submitButton"];

    useEffect(()=> {
        setClicked(clicked);
        setSend(send);
        setValueName(valueName);
        setPhone(phone);
        setMessage(message);
    }, [form])

    if (clicked) {
        counterClasses.push("disabled");
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setClicked(true);
        emailjs.sendForm('service_voob34a', 'template_sm7vb8d', form.current, 'T_LI95it-xjRg98z2')
            .then((result) => {
                console.log(result.text);
                setSend(true);
                setValueName("");
                setPhone("");
                setMessage("");
                setClicked(false);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="formCallback">
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <h4>Заказать обратный звонок:</h4>
                    <div className="callBack">
                        <input type="text"
                               name="name"
                               value={valueName}
                               onChange={changeEventHandlerDecorator(setValueName)}
                               placeholder="Имя *"
                               required/>
                        <input type="phone"
                               name="phone"
                               value={phone}
                               onChange={changeEventHandlerDecorator(setPhone)}
                               placeholder="Телефон *"
                               required/>
                        <textarea type="text"
                                  name="message"
                                  value={message}
                                  onChange={changeEventHandlerDecorator(setMessage)}
                                  placeholder="Какой у Вас вопрос"/>
                    </div>
                    <label>
                        <input type="checkbox" required/>
                        Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006
                    </label> <br/>
                    {!send &&
                        <button type="submit" value="send" className={counterClasses.join(" ")} onClick={()=>setClicked(true)}>
                            {!clicked ?
                                <>Отправить</> :
                                <span><OrdinaryCircleLoader/>
                                    Отправляется</span>
                            }
                        </button>
                    }
                    {send &&
                        <button type="submit" value="send" className="submitButton disabled" style={{padding:"12px 31px"}}>
                            Отправлено
                        </button>
                    }

                </form>
            </div>
        </div>
    )
}