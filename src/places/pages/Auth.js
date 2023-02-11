import React,{useState,useContext} from 'react';
import './Auth.css'
import Input from  '../../shared/components/FormElements/Input';
import Button from  '../../shared/components/FormElements/Button';
import {AuthContext} from '../../shared/context/auth-context'
import {VALIDATOR_REQUIRE,VALIDATOR_EMAIL ,VALIDATOR_MINLENGTH} from '../../shared/util/validators'
const Auth = ()=>{
  const authContext = useContext(AuthContext);
  const [formState,setFormState] = useState({state:true,"name":0,"email":0,"password":0});
  const [formData,setFormData] = useState({"name":undefined,"email":"","password":""});
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

    const switchLoginSignup = ()=>{
    	authContext.login();
    	setFormState(p=>{
    		return {
    			...p,
    			["state"]:!p.state
    		}
    	})
    	let nameStatus ="";
    	if(formState.state){
    		nameStatus = undefined;
    		setFormState(p=>{
    		return {
    			...p,
    			["name"]:1
    		}
    	})

    	}else{
 			nameStatus = "";
 			setFormState(p=>{
    		return {
    			...p,
    			["name"]:0
    		}
    	})
    	}
    	
    	setFormData(state =>{
    			return {
    				...formData,
    				['name']:nameStatus
    			}
    	});

    }


    const processFormData = (event)=>{
    event.preventDefault();
    console.log(formData);
  }
	return (
		<div className="auth-form">
			<form onSubmit={processFormData}>
				{formState.state ? (<Input  
					id="name" 
					onChange={setFormValidity} 
					onInput={setFormValidity}
				    element="input" 
				    type="text" 
				    validators={[VALIDATOR_REQUIRE()]} 
				    errorText="Please enter a valid Name"
				    label="Name" 
				/>):(<></>)}

      <Input  id="email" 

onChange={setFormValidity} 
onInput={setFormValidity}
      element="input" 
      type="email" 
      validators={[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]} 
      errorText="Please enter a valid Email"
      label="Email" />

      <Input  
      id="password" 
		onChange={setFormValidity} 
		onInput={setFormValidity}
      element="input" 
      type="password" 
      validators={[VALIDATOR_MINLENGTH(7)]} 
      errorText="Please enter a Valid Password"
      label="Password" />
      	<div className="authFormButton__container">
      	      <Button disabled={Object.values(formState).includes(0)} >{formState.state ? ("SignUp"):("Login")}</Button>
		</div>
			</form>
		<div className="authFormButton__container">
			<Button  onClick={switchLoginSignup}> Switch {formState.state ? ("Login"):("SignUp")}</Button>
      	</div>
		</div>
		)
}
export default Auth;