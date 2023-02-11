import React,{useCallback,useState} from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./NewPlace.css";

import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/util/validators'

const NewPlace = (props) => {

  const [formState,setFormState] = useState({"description":0,"title":0,"address":0});
  const [formData,setFormData] = useState({"description":"","title":"","address":""});
  const setFormValidity = (inputKey,inputstate,inputVal)=>{
    setFormState(prevState=>{
        return{
          ...prevState,
          [inputKey]:inputstate
        }
    })

     setFormData(prevState=>{
        return{
          ...prevState,
          [inputKey]:inputVal
        }
    })
  }

    const processFormData = (event)=>{
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={processFormData} className="place-form">
      <Input onInput={setFormValidity} id="title" element="input" type="text" 
      label="Title" validators={[VALIDATOR_REQUIRE()]} onChange={setFormValidity}
       errorText="Please enter a valid Title"/>

       <Input 
      onInput={setFormValidity} 
      id="address" 
      element="input" 
      type="text" 
      label="Address" 
      validators={[VALIDATOR_REQUIRE()]} 
      onChange={setFormValidity} 
      errorText="Please enter a valid Descriptoin Please Enter a valid Address"/>
      
      <Input 
      onInput={setFormValidity} 
      id="description" 
      element="textarea" 
      type="text" 
      label="Description" 
      validators={[VALIDATOR_MINLENGTH(5)]} 
      onChange={setFormValidity} 
      errorText="Please enter a valid Descriptoin atleast 5 characters"/>

      <Button disabled={Object.values(formState).includes(0)} >Submit Form</Button>
    </form>
  );
};
export default NewPlace;
