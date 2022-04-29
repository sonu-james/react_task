import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './AddUserForm.css';
import record from "./records.json"
 
function AdduserForm ()  {
    let navigate =useNavigate();
    const [values,setValues]=useState({
        
        first_name: "",
        last_name: "",
        email: "",
        gender:"",
        designation: "",
        phone_no:"",
        city:"",
        department:"",
        date_of_birth:"",
        language:"",

    });
        const [submitted,setSubmitted]=useState(false);
        const [valid,setValid]=useState(false);

        const handleFirstNameInputChange =(event:any) =>{
            setValues({...values,first_name:event.target.value});

        }
        const handleLastNameInputChange =(event:any) =>{
            setValues({...values,last_name:event.target.value})
            

        }
        const handleEmailInputChange =(event:any) =>{
            setValues({...values,email:event.target.value})
        
        }
        const handleDesiInputChange =(event:any) =>{
            setValues({...values,designation:event.target.value})
        
        }
        const handlePhoneInputChange =(event:any) =>{
            setValues({...values,phone_no:event.target.value})
        
        }

        const handleCityInputChange =(event:any) =>{
            setValues({...values,city:event.target.value})
        
        }

        const handleDeptInputChange =(event:any) =>{
            setValues({...values,department:event.target.value})
        
        }

        const handleLangInputChange =(event:any) =>{
            setValues({...values,language:event.target.value})
        
        }
        const handleGenderInputChange =(event:any) =>{
            setValues({...values,gender:event.target.value})
        // console.log(event.currentTarget.value);
        }
        const handleDobInputChange =(event:any) =>{
            setValues({...values,date_of_birth:event.target.value})
        
        }


        const handleSubmit =(event:any)=>{
            event.preventDefault();
           
            if(values.first_name && values.last_name && values.email && values.phone_no && values.city && values.department &&values.designation &&values.language &&values.date_of_birth &&values.gender)
            {
                setValid(true);
                navigate('/');
            }
            setSubmitted(true);
            record.push({
                id:record.length+1,
                first_name:values.first_name,
                last_name:values.last_name,
                email:values.email,
                gender:values.gender,
                designation:values.designation,
                phone_no:values.phone_no,
                city:values.city,
                department:values.department,
                date_of_birth:values.date_of_birth,
                language:values.language,
            }
            )
            record.sort();
            record.reverse();
            // console.log(values);
          
        }
       
    return(
        <div className ='formDiv'>
           <form onSubmit={handleSubmit} >
                {submitted && valid? <div className='success-message'>Successfully Added</div>:null}
               <h1>Add User Form</h1>
               <label  htmlFor='Firstname'>FirstName</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.first_name} onChange={handleFirstNameInputChange}
                name="fname" id="fname"/>
                {submitted && !values.first_name ?<span>Please Enter a Valid FirstName</span>:null}
                
                <label htmlFor='Lastname'>LastName</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.last_name} onChange={handleLastNameInputChange}
                name="lname" id="lname"/>
                {submitted && !values.last_name ?<span>Please Enter a Valid LastName</span>:null}
               
               
                <label htmlFor='Email'>Email</label>
               <input  className ='formInput' type="email" autoComplete='off' value={values.email} onChange={handleEmailInputChange}
                name="email" id="email"/>
                {submitted && !values.email ?<span>Please Enter a Valid Email</span>:null}


                <label htmlFor='Gender'>Male</label>
               <input  className ='formInput' type="radio" autoComplete='off' value="male"  onChange={handleGenderInputChange}
                name="radiovalues" id="male"/>
                 <label htmlFor='gender'>Female</label>
               <input  className ='formInput' type="radio" autoComplete='off' value="female" onChange={handleGenderInputChange}
                name="radiovalues" id="female"/>
                {submitted && !values.gender ?<span>Please select Valid Input</span>:null}



                <label htmlFor='Designation'>Designation</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.designation} onChange={handleDesiInputChange}
                name="designation" id="designation"/>
                {submitted && !values.designation ?<span>Please Enter a Valid Designation</span>:null}

                <label htmlFor='Phone_no'>Phone_no</label>
               <input  className ='formInput' type="phone_no" autoComplete='off' value={values.phone_no} onChange={handlePhoneInputChange}
                name="phone_no" id="phone_no"/>
                {submitted && !values.phone_no ?<span>Please Enter a Valid Phone_no</span>:null}

                 <label htmlFor='City'>City</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.city} onChange={handleCityInputChange}
                name="city" id="city"/>
                {submitted && !values.city ?<span>Please Enter a Valid City</span>:null}
                
                <label htmlFor='Department'>Department</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.department} onChange={handleDeptInputChange}
                name="department" id="department"/>
                {submitted && !values.department ?<span>Please Enter a Valid Department</span>:null}

                <label htmlFor='Dob'>Dob</label>
               <input  className ='formInput' type="date" autoComplete='off' value={values.date_of_birth} onChange={handleDobInputChange}
                name="dob" id="dob"/>
                {submitted && !values.date_of_birth ?<span>Please Enter a Valid Date of Birth</span>:null}




                <label htmlFor=' language'>Language</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values. language} onChange={handleLangInputChange}
                name=" language" id=" language"/>
                {submitted && !values.language ?<span>Please Enter a Valid  Language</span>:null}
                
               <input type="submit"  value ='Submit'/>
           </form>
        </div>
    )
    
}
export default AdduserForm;