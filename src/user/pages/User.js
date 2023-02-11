import React from 'react';
import UsersList from '../components/UsersList'
const User = (props)=>{
  const USERS = [
    {id:2313,image:"https://plus.unsplash.com/premium_photo-1661753441806-9ec2180080b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",name:"lot",places:13},
    {id:2315,image:"https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",name:"lot2",places:23},
    {id:2316,image:"https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",name:"lot3",places:43}
    ]
  
  return(
    <div>
    <UsersList items={USERS} />
    </div>
  )
}
export default User;
