import React, { useRef, useState } from 'react';
import './Input.css';

const Input = (props) => {
    const genderRef = useRef();
    const nounRef = useRef();
    const [genderValid, setGenderValid] = useState(false);
    const [nounValid, setNounValid] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!genderValid) {
            alert("Enter the gender as Der Das Die");
            return;
        } 
        if (!nounValid) {
            alert("Noun can not be empty");
            return;
        }
        setFormValid(true);
        props.onAdd({gender: genderRef.current.value, noun: nounRef.current.value});
    }

    const genderOnChangeHandler = (event) => {
        if (event.target.value === "Der" || event.target.value === "Die" || event.target.value === "Das"){
            setGenderValid(true);
        } else {
            setGenderValid(false);
        }
    }

    const nounOnChangeHandler = (event) => {
        if (event.target.value !== "")
            setNounValid(true);
        else
            setNounValid(false);
    }
    return (
        <div className="form-wrapper">
        <form >
            <div> 
                <input type="text" placeholder="Gender(Der, Das, Die)" ref={genderRef} onChange={genderOnChangeHandler}></input>
                <input type="text" placeholder="Noun" ref={nounRef} onChange={nounOnChangeHandler}></input>
            </div>
            <button onClick={onSubmitHandler} type="submit" name="button" className="button facebook-style-btn facebook-style-light" >Add Noun</button>
        </form>
        </div>

    );
}

export default Input;