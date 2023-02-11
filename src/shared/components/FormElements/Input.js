import React,{useEffect,useReducer} from "react";
import "./Input.css";
import {validate} from '../../util/validators'

const inputReducer = (state,action)=>{
  switch(action.type){
  case "CHANGE":
    return {
      ...state,
      value:action.val,
      isValid:validate(action.val,action.validators)
    }
  case "TOUCH":
    return {
      ...state,
      isTouched:true
    }
  default: return state;
  }
}

const Input = (props) => {
  const  [inputState,dispatch] =useReducer(inputReducer,{value:props.value ? props.value : "" ,isValid:false});
  	const changeHandler = event  =>{
      dispatch({type:"CHANGE",val:event.target.value,validators:props.validators})
  inputState.isValid ? props.onInput(props.id,1,inputState.value) : props.onInput(props.id,0,inputState.value);
	}
const onTouched = ()=>{
  dispatch({type:"TOUCH"})
  inputState.isValid ? props.onInput(props.id,1,inputState.value) : props.onInput(props.id,0,inputState.value);
}
const {id,onInput} = props;
const {value,isValid} = inputState;
// useEffect(()=>{
//   onInput(id,value,isValid);
// },[id,value,isValid,onInput]);

	const element =
    props.element === "input" ? (
      <input onBlur={onTouched} value={inputState.value} type={props.type} 
      id={props.id} placeholder={props.placeholder} onChange={changeHandler}/>
    ) : (
      <textarea onBlur={onTouched} value={inputState.value} id={props.id} 
      rows={props.rows || 3}onChange={changeHandler} />
    );
  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;


