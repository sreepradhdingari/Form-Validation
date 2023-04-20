import React, {useState} from 'react'

export default function App(){
  const [data,setData] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const {username,email,password,confirmPassword} = data
  const clickHandler = event => {
    setData({...data,[event.target.name]:event.target.value})
  }
  const submitHandler = event => {
    event.preventDefault()
    if (password !== confirmPassword){
      alert("Passwords are not matching")
    }else if(username.length < 5){
      alert("Username must be atleast 5 charecters")
    }else{
      console.log(data)
    }
  }
  return(
    <div>
      <form onSubmit={submitHandler}>
        <input type = "text" name = "username" value = {username} placeholder='Username' onChange = {clickHandler}/><br/>
        <input type = "email" name = "email" value = {email} placeholder='Email' onChange = {clickHandler}/><br/>
        <input type = "password" name = "password" value = {password} placeholder='Password' onChange = {clickHandler}/><br/>
        <input type = "password" name = "confirmPassword" value = {confirmPassword} placeholder='Confirm Password' onChange = {clickHandler}/><br/>
        <input type = "submit" name = "submit"/>
      </form>
    </div>
  )
}