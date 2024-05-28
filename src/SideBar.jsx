import { useState } from "react";



function SideBar({formData,handleChange,...props})
{
    const spanStyle ={
        fontSize:"10px",
        opacity:0.7,
    }

    const Layout1 ={
        color:"red",
        fontSize:"2em",
        display:"flex",
        justifyContent:"space-around",
        backgroundColor:'black',
    }
    const[isEducationOn,setisEducationOn] = useState(false);
    const[isExperienceOn,setisExperienceOn] = useState(false);
    const[isPersonalOn,setPersonalOn] = useState(false);
    const[isCustomizeOn,setisCustomizeOn] = useState(false);

    const[isAdd,setAdd]=useState(false);
   

    const iconBtn ={add:"expand_more",remove:"expand_less"}

    const resetFormEtude =()=>{
        setisEducationOn(false);
        props.handleClickCancel();    
    }
    const resetFormExp =()=>{
        setisExperienceOn(false);
        props.handleClickCancelExp();
    }
    const saveFormEtude=(e)=>{
        
        setisEducationOn(false);
        props.handleClickCancel();
        props.handleSubmit(e);   
    }
    const saveFormExp=(e)=>{
        setisExperienceOn(false);
        props.handleClickCancelExp();
        props.handleSubmitExp(e);
    }
    const toogleEduction =()=>{
        setisEducationOn(!isEducationOn)
        setPersonalOn(false)
        setisExperienceOn(false)
        if(isEducationOn)
            setAdd(true);
        else
            setAdd(false)
    };
    const toogleExperience =()=>{
        setisExperienceOn(!isExperienceOn)
        setPersonalOn(false)
        setisEducationOn(false);
        if(isExperienceOn)
        setAdd(true);
    else
        setAdd(false)
    };
    const tooglePersonnalDetails=()=>{
        setPersonalOn(!isPersonalOn)
        setisEducationOn(false);
        setisEducationOn(false);

    }
    const toogleCustomize=()=>{
        setisCustomizeOn(!isCustomizeOn)
    }
    const handleClickAdd=()=>{
        if(isEducationOn)
        props.addEtuddes()
        if(isExperienceOn)
        props.addExperience();
        isEducationOn ? props.addEtuddes : props.addExperience
        setAdd(!isAdd);
    }
    const handleClickData = (e)=>{
        setAdd(true);
        isEducationOn ?
        props.handleEditData(e,"educ") : props.handleEditData(e,"exp")

    }
    const handleDelete = (e) =>{
        e.preventDefault();
        isEducationOn ?
        props.handleDelete("educ") : props.handleDelete("exp")
        setisExperienceOn(false);
        props.handleClickCancelExp();
        
        
    }
    const handleClickLayout =(e) =>
    {
        props.handleClickLayout(e.target.innerHTML)
    }

  

    return (
   

         <div className="side-bar">

        {!isEducationOn && !isExperienceOn && !isPersonalOn &&
         <div className="diplays-customize"style={isEducationOn || isExperienceOn || isPersonalOn ? { display: "none" } : { display: "flex" }}>
            <button className="btn-customize"
                onClick={toogleCustomize}
            > 
            <span className="material-symbols-outlined">
                        inbox_customize
                    </span>
                    <h2> Customize CV </h2> 
                    <span className="material-symbols-outlined">
                        {isCustomizeOn?  iconBtn.remove :iconBtn.add}
                    </span>
            </button>
            {
                isCustomizeOn && <div className="display-possible"> 
                    <button 
                        className="btn-display-possible"
                        onClick={handleClickLayout}
                        style={{backgroundColor:"#ffe5ec",color:"#ff8fab"}}
                    > 
                        Layout 1 
                    </button>

                    < button 
                        className="btn-display-possible"
                        onClick={handleClickLayout}
                        style={{backgroundColor:"#003049",color:"#fcbf49"}}

                    > 
                        Layout 2 
                    </button>

                    <button 
                    className="btn-display-possible"
                    onClick={handleClickLayout}
                    style={{backgroundColor:"#03045e",color:"#0096c7"}}

                    > 
                        Layout 3 
                    </button>
                
                </div>
            }

        </div>
        }

{/********* Personnal Details content button and form ***************/}

                < button 
                    className="btn-display-form"
                    onClick={tooglePersonnalDetails}
                > 
                    <span className="material-symbols-outlined">
                        person
                    </span>
                    <h3>Personnal Details </h3> 
                    <span className="material-symbols-outlined">
                        {isPersonalOn ?  iconBtn.remove :iconBtn.add}
                    </span>
                    
                </button> 
            {
            
                isPersonalOn && !isEducationOn && !isExperienceOn &&
                <form className="Form">
                <label>  

                    Full name  
                    
                </label>

                <input 
                    type="text"
                    name="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    onClick={props.handleClickDetails}
                />

                <label > 
                    Address <span style={spanStyle}>{"recommended"}</span>      
                </label>
                
                <input 
                    type="text"
                    name="address"
                    value={formData.address} 
                    onChange={handleChange}
                    onClick={props.handleClickDetails}
                />
                

                <label > 
                    Email <span style={spanStyle}>{"recommended"}</span>
                </label>

                <input 
                    type="text"
                    name="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    onClick={props.handleClickDetails}
                />

                <label > 
                    Phone number <span style={spanStyle}>{"recommended"}</span> 
                </label>
                <input 
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber} 
                    onChange={handleChange}
                    onClick={props.handleClickDetails}
                />
                </form>
            }
        
{/******************************************************************************************************************** */}
 
 
 
 
 
{/********* Education Details content button and form ***************/} 

                < button 
                    className="btn-display-form"
                    onClick={toogleEduction}
                > 
                    <span className="material-symbols-outlined">
                        school
                    </span>
                    <h3>Education </h3> 
                    <span className="material-symbols-outlined">
                        {isEducationOn ?  iconBtn.remove :iconBtn.add}
                    </span>
                    
                </button> 
            {
                isEducationOn && 
                <div className=" enter-display"> 
                    {
                      !isAdd &&  <ul className="ul-data">
                           {
                           props.arrayEtudes.map(element=>
                            {
                                return (
                               element.school !== "" &&
                                <li 
                                    key={element.id}
                                    
                                >
                                    <button 
                                        className="btn-Data-Saved"
                                        onClick={()=>handleClickData(element)}
                                        
                                    >
                                    <span className="material-symbols-outlined span-data">
                                            edit_note
                                        </span>
                                        {element.school} 
                                       
                                    </button>
                                </li>
                            )
                            })
                           } 
                        </ul>
                        
                    }
                    {   
                        !isAdd && 
                        <button 
                            className="add"
                            onClick={handleClickAdd}
                        > 
                            <span className="material-symbols-outlined add-icon">
                                add                    
                            </span>
                        </button>
                    }
            
            
                 {
                 isAdd && isEducationOn && 
                 <form className="Form"
                onSubmit={saveFormEtude}
                >
            
                <label>  
                School    
                </label>

                <input 
                    type="text"
                    name="school"
                    value={props.etudes.school} 
                    onChange={props.handleChangeEtudes} 
                    onClick={props.handleClickEtudes}
                />
                <label>  
                Degree    
                </label>

                <input 
                    type="text"
                    name="degree"
                    value={props.etudes.degree} 
                    onChange={props.handleChangeEtudes} 
                    onClick={props.handleClickEtudes}
                />

                <label>  
                Start Date    
                </label>
                    <input 
                    type="date"
                    name="startDate"
                    value={props.etudes.startDate} 
                    onChange={props.handleChangeEtudes} 
                    onClick={props.handleClickEtudes}
                />
                <label>  
                End Date    
                </label>
                    <input 
                    type="date"
                    name="endDate"
                    value={props.etudes.endDate} 
                    onChange={props.handleChangeEtudes} 
                    onClick={props.handleClickEtudes}
                />

                <label>  
                Location   
                </label>
                    <input 
                    type="text"
                    name="location"
                    value={props.etudes.location} 
                    onChange={props.handleChangeEtudes} 
                    onClick={props.handleClickEtudes}
                />
                
            
                
             
                <div className="button-education">
                    <button > 
                        Save
                    </button>

                 
                </div>
        
                </form>
            }
                </div>   
            }

{/******************************************************************************************************************** */}
 
 
 
 
 
 {/********* Experience Details content button and form ***************/}
 
                <button 
                    className="btn-display-form"
                    onClick={toogleExperience}
                > 
                    <span className="material-symbols-outlined">
                        work_history
                    </span>
                    <h3>Experience </h3> 
                    <span className="material-symbols-outlined">
                        {isExperienceOn ?  iconBtn.remove :iconBtn.add}
                    </span>
                    
                </button>
            {
                isExperienceOn &&
                <div className="enter-display">

                { !isAdd && <ul className="ul-data">
                           {
                           props.arrayExp.map(element=>
                            {
                                return (
                               element.company !== "" &&
                                <li 
                                    key={element.id}
                                    
                                >
                                <button 
                                        className="btn-Data-Saved-Exp"
                                        onClick={()=>handleClickData(element)}
                                        
                                >
                                    <span className="material-symbols-outlined span-data">
                                            edit_note
                                        </span>
                                        {element.company} 
                                       
                                </button>

                                </li>
                            )
                            })
                           } 
                        </ul> } 
                       { 
                       !isAdd && 
                            <button 
                                className="add"
                                onClick={handleClickAdd}
                            > 
                                <span className="material-symbols-outlined add-icon">
                                    add                    
                                </span>
                            </button>
                        }

                {
                isAdd && isExperienceOn &&
                <form className="Form" onSubmit={saveFormExp}>
                     <label>  
                Company Name    
                </label>

                <input 
                    type="text"
                    name="company"
                    value={props.experience.company} 
                    onChange={props.handleChangeExperience} 
                    onClick={props.handleClickExperience}
                />
                <label>  
                Postion Title    
                </label>

                <input 
                    type="text"
                    name="position"
                    value={props.experience.position} 
                    onChange={props.handleChangeExperience} 
                    onClick={props.handleClickExperience}
                />

                <label>  
                Start Date    
                </label>
                    <input 
                    type="date"
                    name="startDate"
                    value={props.experience.startDate} 
                    onChange={props.handleChangeExperience} 
                    onClick={props.handleClickExperience}
                />
                <label>  
                End Date    
                </label>
                    <input 
                    type="date"
                    name="endDate"
                    value={props.experience.endDate} 
                    onChange={props.handleChangeExperience} 
                    onClick={props.handleClickExperience}
                />

                <label>  
                Location   
                </label>
                <input 
                    type="text"
                    name="location"
                    value={props.experience.location} 
                    onChange={props.handleChangeExperience} 
                    onClick={props.handleClickExperience}
                />
                <label>  
                Description   
                </label>
                <textarea 
                    className="description-form"
                    name="description"
                    value={props.experience.description} 
                    onChange={props.handleChangeExperience} 
                    onClick={props.handleClickExperience}
                />

                     
                <div className="button-education">
                    <button > 
                        Save
                    </button>
                    {props.experience.company !== 'Enter Company Name'&&<button onClick={handleDelete}>
                        Delete
                    </button>}

                </div>
                </form>
    }
            </div>
            }

{/******************************************************************************************************************** */}
          
            
        </div> 

        

      
    )

}
export {SideBar}