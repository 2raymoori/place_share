import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/util/validators'
const UpdatePlace = props=>{
	const placeId = useParams()["placeId"];
	// useEffect(()=>{
	// 	console.log(watch)
	// },[])

	const DUMMY_PLACES = [
	{
		id:"p1",
		image:"https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		title:"test Title",
		description:"test Description",
		address:"test Address",
		creator:"u1",
		location:{
    lat: 52.4095378, lng: 12.9749277}
	},

	{
		id:"p2",
		image:"https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		title:"test Title 2",
		description:"test Description 2",
		address:"test Address 2",
		creator:"u2",
		location:{lat:40.7484405,lng:-73.9878584}
	}
		]
	const placeFound = DUMMY_PLACES.find(p=>{return p.id===placeId});
  const [formState,setFormState] = useState({"description":1,"title":1});
  const [formData,setFormData] = useState({"description":"","title":""});
  const setFormValidity = (inputKey,inputstate,inputVal)=>{
    setFormState(prevState=>{
        return{
          ...prevState,
          [inputKey]:inputstate
        }
    })

    //  setFormData(prevState=>{
    //     return{
    //       ...prevState,
    //       [inputKey]:inputVal
    //     }
    // })
  }

    const processFormData = (event)=>{
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(formData);
  }
	return (

		<>
		{placeFound ? (<div>
			<form onSubmit={processFormData} className="place-form">
			<Input onInput={setFormValidity} id="title" element="input" type="text" 
      label="Title" validators={[VALIDATOR_REQUIRE()]} onChange={setFormValidity}value={placeFound.title}

       errorText="Please enter a valid Title"/>
			 <Input 
      onInput={setFormValidity} 
      id="description" 
      element="textarea" 
      type="text" 
      label="Description" 
      validators={[VALIDATOR_MINLENGTH(5)]} 
      onChange={setFormValidity} 
      value={placeFound.description}
      errorText="Please enter a valid Descriptoin atleast 5 characters"/>
			<Button disabled={Object.values(formState).includes(0)} >Update Place</Button>
			</form>

		</div>) : 
			(<div className="center"><h2>Sorry No place found</h2></div>)
	}
		
		</>
		)
}
export default UpdatePlace;