import React from 'react'
 import { useForm } from "react-hook-form";
import { useAuth } from '../Login/useAuth';
  import  './Shipment.css'

const Shipment = () => {
    
const auth =useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
       
         
        <input defaultValue={auth.user.name} {...register("name", { required: true })} placeholder="Your Name"/>
        {errors.name && <span>Name is required</span>}

        
       
        <input defaultValue={auth.user.email}  {...register("email", { required: true })}placeholder="Your Email" />
        {errors.email && <span>Email is required</span>}


        
        <input {...register("AddressLine1", { required: true })} placeholder="Your Address"/>
        {errors.AddressLine1 && <span>AddressLine1 is required</span>}
 
        <input {...register("AddressLine2", )}placeholder="Your Address 2" />

      
        <input {...register("City", { required: true })} placeholder="Your City"/>
        {errors.City && <span>City is required</span>}
        
        
        <input type="submit" />
      </form>
    );
}

export default Shipment;
