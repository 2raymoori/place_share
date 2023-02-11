
import React from 'react';
import PlaceList from '../components/PlaceList'
import {useParams} from 'react-router-dom'
const UserPlaces = (props)=>{
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
	const userId = useParams().userId;
	const loaded = DUMMY_PLACES.filter(place=>place.creator === userId)
  return(
    <PlaceList items={DUMMY_PLACES} />
  )
}
export default UserPlaces;

// <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={17}
//           center={props.location}
          
//         >
//         <Marker
//       icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
//       position={props.location}
//     />
// </GoogleMap >