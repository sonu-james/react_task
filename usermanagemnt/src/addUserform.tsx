import React,{useState} from 'react';
import './AddUserForm.css';
 function AdduserForm ()  {

    const [values,setValues]=useState({
        fname: "",
        lname: "",
        email: "",
        designation: "",
        phone_no:"",
        city:"",
        department:"",
        language:"",

    });
        const [submitted,setSubmitted]=useState(false);
        const [valid,setValid]=useState(false);

        const handleFirstNameInputChange =(event:any) =>{
            setValues({...values,fname:event.target.value});

        }
        const handleLastNameInputChange =(event:any) =>{
            setValues({...values,lname:event.target.value})
            

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



        const handleSubmit =(event:any)=>{
            event.preventDefault();
            if(values.fname && values.lname && values.email && values.phone_no && values.city && values.department &&values.designation &&values.language)
            {
                setValid(true);
            }
            setSubmitted(true);
            console.log(values);
        }
     
    return(
        <div className ='formDiv'>
           <form onSubmit={handleSubmit} >
                {submitted && valid? <div className='success-message'>Successfully Added</div>:null}
               <h1>Add User Form</h1>
               <label  htmlFor='fname'>FirstName</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.fname} onChange={handleFirstNameInputChange}
                name="fname" id="fname"/>
                {submitted && !values.fname ?<span>Please Enter a Valid FirstName</span>:null}
                
                <label htmlFor='lname'>LastName</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.lname} onChange={handleLastNameInputChange}
                name="lname" id="lname"/>
                {submitted && !values.lname ?<span>Please Enter a Valid LastName</span>:null}
               
               
                <label htmlFor='email'>Email</label>
               <input  className ='formInput' type="email" autoComplete='off' value={values.email} onChange={handleEmailInputChange}
                name="email" id="email"/>
                {submitted && !values.email ?<span>Please Enter a Valid Email</span>:null}

                <label htmlFor='designation'>Designation</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.designation} onChange={handleDesiInputChange}
                name="designation" id="designation"/>
                {submitted && !values.designation ?<span>Please Enter a Valid Designation</span>:null}

                <label htmlFor='phone_no'>Phone_no</label>
               <input  className ='formInput' type="phone_no" autoComplete='off' value={values.phone_no} onChange={handlePhoneInputChange}
                name="phone_no" id="phone_no"/>
                {submitted && !values.phone_no ?<span>Please Enter a Valid Phone_no</span>:null}

                 <label htmlFor='city'>City</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.city} onChange={handleCityInputChange}
                name="city" id="city"/>
                {submitted && !values.city ?<span>Please Enter a Valid City</span>:null}
                
                <label htmlFor='department'>Department</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values.department} onChange={handleDeptInputChange}
                name="department" id="department"/>
                {submitted && !values.department ?<span>Please Enter a Valid Department</span>:null}

                <label htmlFor=' language'>Language</label>
               <input  className ='formInput' type="text" autoComplete='off' value={values. language} onChange={handleLangInputChange}
                name=" language" id=" language"/>
                {submitted && !values.language ?<span>Please Enter a Valid  Language</span>:null}
                

               <input type="submit" value ='Submit'/>
           </form>
        </div>
    )

}
export default AdduserForm;