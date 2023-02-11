import React,{useState} from 'react';
import './Modal.css';
import Button from '../../shared/components/FormElements/Button';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
const Modal = (props)=>{
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
      <h2>description</h2>
      </div>
      <div className="modal-content__map">
        <GoogleMap

          mapContainerStyle={mapStyles}
          zoom={17}
          center={props.location}
          
        >
        <Marker
      icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={props.location}
    />
        </GoogleMap >
      </div>
      <div className="modal-content__footer">
      
      <Button onClick={()=>{props.onShowHideModal(!props.showModal,0)}} danger>Close</Button>
      </div>
    </div>
    </div>
  )
  }else{
    return (<></>)
  }
}
export default Modal;

// <!-- The Modal -->
// <div id="myModal" class="modal">

//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <p>Some text in the Modal..</p>
//   </div>

// </div>