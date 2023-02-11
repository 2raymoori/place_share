import React,{useState} from 'react';
import './Modal.css';
import Button from '../../shared/components/FormElements/Button';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
const DeleteModal = (props)=>{
  const [flag,setFlag] = useState(0);
  const mapStyles = {        
    height: "100%",
    width: "100%"};
  
  // const defaultCenter = 

  if(props.showModal){
    return(
    <div className="modal-container">
    <div className="modal-content">
      <div className="modal-content__header">
      <h2>Confirm Delete</h2>
      </div>
      <div className="modal-content__map">
        <p>
          Do you want to proceed and delete this place? 
          Please note tht it can't be undone thereafter.
        </p>
      </div>
      <div className="modal-content__footer">
      <Button onClick={()=>{props.onShowHideModal(!props.showModal)}} danger>CANCEL</Button>
      <Button onClick={()=>{props.onShowHideModal(!props.showModal,1)}} danger>DELETE</Button>
      </div>
    </div>
    </div>
  )
  }else{
    return (<></>)
  }
}
export default DeleteModal;

// <!-- The Modal -->
// <div id="myModal" class="modal">

//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>Some text in the Modal..</p>
//   </div>

// </div>