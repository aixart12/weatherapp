import React, { useState } from 'react';
import { instance } from '../setupProxy';

export default function Home() {
  let formStyle = {
    display : "flex",
    flexFlow : "column",
    justifyContent : "center",
    alignItems : "center",
    marginTop : "6px"

  }

  const [data , setData] = useState("")
  const [city, setCity] = useState("")
  // const [formValues , setFormValues] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{

      const  response= await instance.post('/weather' , {cityName:city});
      setData(response.data)
    } 
    catch(err){
      console.log(err)
    }
  }
  // console.log(data)
  // const cityexist = asysc (req , res) =>{
  //   let c = await W
  // }
  return (
    <div style={formStyle}>
        <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label >City Name</label>
          <input type="text" className="form-control m-4" placeholder="Enter cityName" onChange={(e) => setCity(e.target.value)} ></input>
        </div>
      
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <hr></hr>
      <div>
        <p>visibility:{data?.visibility}</p>
        <p>maxTemperature:{data?.main?.temp_max}</p>
        <p>minTemperature:{data?.main?.temp_min}</p>
        <p>name:{data?.name}</p>

      </div>
    </div>
  )
}

