import { DisplayCv } from "./DisplayCv";
import { SideBar } from "./SideBar";
import { useState } from "react";

function GenerateCv()
{
    const [styleDisplay,setStyleDisplay]=useState({});

    /*Personal Details */
        const [formData, setFormData] = useState({
            name: 'Homer Simpson',
            email: 'homer.simpson@example.com',
            address: 'Springfield, USA',
            phoneNumber:'+44 3245 5521 5521',
        });
        
      // Formate une date donnée (ou la date du jour si aucune date n'est fournie)
        const getDateofTheDayFormated = (dateInput) => {
            // Utilise la date donnée ou la date actuelle si aucun argument n'est fourni
            const date = dateInput ? new Date(dateInput) : new Date(); 
            const annee = date.getFullYear();
            let mois = date.getMonth() + 1; 
            let jour = date.getDate();
            mois = mois < 10 ? `0${mois}` : mois;
            jour = jour < 10 ? `0${jour}` : jour;

            return `${annee}-${mois}-${jour}`; 
        };

      /*Education */
        const [etudes, setEtudes]=useState([{
            id:"Entry0",
            school:" Springfield University",
            degree:"Nuclear Physics",
            startDate:getDateofTheDayFormated(),
            endDate:getDateofTheDayFormated(),
            location:"Springfield, USA",
        }]);

        const [etudesForm,setEtudesForm]= useState({
           
            school:"Enter School / University",
            degree:"Enter Degree / Field of study",
            startDate:getDateofTheDayFormated(),
            endDate:getDateofTheDayFormated(),
            location:"Enter Location",
            
        })

    /*Experience*/
    const [experience, setExperience]=useState([{
        id:"1st Entry",
        company:"Springfield Nuclear Power Plant",
        position:" Nuclear Safety Inspector",
        startDate:getDateofTheDayFormated(),
        endDate:getDateofTheDayFormated(),
        location:"Springfield, USA",
        description:"A position which he has held since Homer's Odyssey, the third episode of the series, despite the fact that he is totally unsuitable for it.",
    }]);

    const [experienceForm,setExperienceForm]= useState({
       
        company:"Springfield Nuclear Power Plant",
        position:" nuclear safety inspector",
        startDate:getDateofTheDayFormated(),
        endDate:getDateofTheDayFormated(),
        location:"Springfield, USA",
        description:"A position which he has held since Homer's Odyssey, the third episode of the series, despite the fact that he is totally unsuitable for it.",
    })

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormData(prevState =>({
            ...prevState,[name]:value
        }))
      }

      const handleClick=(e)=>{
        const {name} = e.target;
       const defaultValue = {
        name: 'Homer Simpson',
        email: 'homer.simpson@example.com',
        address: 'Springfield, USA',
        phoneNumber:'+44 3245 5521 5521',
        
    }
    if(formData[name]=== defaultValue[name])
    {
        setFormData(prevState =>({
            ...prevState,
            [name]:''
           }))
    }
    }

    const handleChangeEtudes =(e)=>
    {
        
            let {name,value} = e.target;
            let lastValue = etudesForm[name];

            setEtudesForm(prevState =>({
                ...prevState,
                [name]:value
            }))

          setEtudes(currentEtudes => {
            const newEtudes = [...currentEtudes];

            
            let index = newEtudes.findIndex(f => f[name] === lastValue)
            if((name ==='startDate'|| name ==="endDate") && !lastValue  )
            {
                name === "startDate" ? index = newEtudes.findIndex(f => f["school"] === etudesForm.school) :
                index = newEtudes.findIndex(f => f["school"] === etudesForm.school)
                console.log(` la Mise à jour de ${name} avec la valeur ${value} (ancienne valeur : ${lastValue} index :${index}`);

            }
            // console.log(`Mise à jour de ${name} avec la valeur ${value} (ancienne valeur : ${lastValue} index :${index}`);
            
            
            if(index !==-1 )
            {
                newEtudes[index] = { ...newEtudes[index], 
                [name]: value };
            }
           
         
            
            return newEtudes;
            });     
    }

    const resetEtudeForm =()=>{
        
        setEtudesForm({
        school:"Enter School / University",
        degree:"Enter Degree / Field of study",
        startDate:getDateofTheDayFormated(),
        endDate:getDateofTheDayFormated(),
        location:"Enter Location",
        })
    }

  
    const handleClickEtudes=(e)=>{
        const {name} = e.target;
       const defaultValue = {
        school:"Enter School / University",
        degree:"Enter Degree / Field of study",
        startDate:getDateofTheDayFormated(),
        endDate:getDateofTheDayFormated(),
        location:"Enter Location",

        }

  
        if(etudesForm[name]=== defaultValue[name])
         {
            setEtudesForm(prevState =>({
                ...prevState,
                [name]:''
            }))
         }
    }
    const handleSubmitEtude = (e) => {
        e.preventDefault();
        
        
        setEtudes(currentEtudes => {
            
            const derniereEntree = currentEtudes[currentEtudes.length - 1];
            const estDerniereEntreeVide = !derniereEntree || 
                (!derniereEntree.school && !derniereEntree.degree );
        
            if (estDerniereEntreeVide) {
                return currentEtudes;
            }
        
            // Sinon, ajoutez une nouvelle entrée vide
            return [
                ...currentEtudes,
                { // Préparez une nouvelle entrée vide
                    id: "Entry" + currentEtudes.length, // Attention: cela pourrait ne pas être unique après suppression d'entrées
                    school: "",
                    degree: "",
                    startDate: getDateofTheDayFormated(),
                    endDate: getDateofTheDayFormated(),
                    location: "",
                }
            ];
        });
        
        

        setEtudesForm( {   
            school:"Enter School / University",
            degree:"Enter Degree / Field of study",
            startDate:getDateofTheDayFormated(),
            endDate:getDateofTheDayFormated(),
            location:"Enter Location",
        } )
    };

    const handleClickExperience=(e)=>{
        const {name} = e.target;
       const defaultValue = {
        company:"Enter Company Name",
        position:"Enter Position Title",
        startDate:getDateofTheDayFormated(),
        endDate:getDateofTheDayFormated(),
        location:"Enter Location",
        description:"Enter Descripton here",

        }

  
        if(experienceForm[name]=== defaultValue[name])
         {
            setExperienceForm(prevState =>({
                ...prevState,
                [name]:''
            }))
         }
    }

    const handleChangeExperience =(e)=>
    {
        
            const {name,value} = e.target;
            let lastValue = experienceForm[name]

            setExperienceForm(prevState =>({
                ...prevState,
                [name]:value
            }))

            setExperience(currentExperience => {
                const newExperience = [...currentExperience];
    
                
                let index = newExperience.findIndex(f => f[name] === lastValue)
                if((name ==='startDate'|| name ==="endDate") && !lastValue  )
                {
                    name === "startDate" ? index = newExperience.findIndex(f => f["company"] === experienceForm.company) :
                    index = newExperience.findIndex(f => f["company"] === experienceForm.company)
                    console.log(` la Mise à jour de ${name} avec la valeur ${value} (ancienne valeur : ${lastValue} index :${index}`);
    
                }
                // console.log(`Mise à jour de ${name} avec la valeur ${value} (ancienne valeur : ${lastValue} index :${index}`);
                
                
                if(index !==-1 )
                {
                    newExperience[index] = { ...newExperience[index], 
                    [name]: value };
                }
               
             
                
                return newExperience;
                }); 
     }    

    const resetExperienceForm =()=>{
        
        setExperienceForm({
            company:"Enter Company Name",
            position:"Enter Position Title",
            startDate:getDateofTheDayFormated(),
            endDate:getDateofTheDayFormated(),
            location:"Enter Location",
            description:"Enter Descripton here",
     })

    }
    const handleSubmitExp = (e) => {
        e.preventDefault();
        setExperience(currentExperience => {
            
            const derniereEntree = currentExperience[currentExperience.length - 1];
            const estDerniereEntreeVide = !derniereEntree || 
                (!derniereEntree.company && !derniereEntree.position );
        
            if (estDerniereEntreeVide) {
                return currentExperience;
            }
        
            // Sinon, ajoutez une nouvelle entrée vide
            return [
                ...currentExperience,
                { // Préparez une nouvelle entrée vide
                    id: "Entry" + currentExperience.length, // Attention: cela pourrait ne pas être unique après suppression d'entrées
                    company:"",
                    position:" ",
                    startDate:getDateofTheDayFormated(),
                    endDate:getDateofTheDayFormated(),
                    location:"",
                    description:"",
                }
            ];
        });
        
        

        setExperienceForm( {   
            company:"Enter Company Name",
            position:"Enter Position Title",
            startDate:getDateofTheDayFormated(),
            endDate:getDateofTheDayFormated(),
            location:"Enter Location",
            description:"Enter Descripton here",
        } )
   
    };

  

    const addEtuddes =()=>{

   setEtudesForm( {   
        school:"Enter School / University",
        degree:"Enter Degree / Field of study",
        startDate:getDateofTheDayFormated(),
        endDate:getDateofTheDayFormated(),
        location:"Enter Location",
    } )
          // Ajoutez l'étude au tableau et préparez une nouvelle entrée vide pour le prochain remplissage.
          setEtudes(currentEtudes => [
            ...currentEtudes,
    
            { // Préparez une nouvelle entrée vide
                id: "Entry" + currentEtudes.length, // Attention: cela pourrait ne pas être unique après suppression d'entrées
                school: "",
                degree: "",
                startDate:getDateofTheDayFormated(),
                endDate: getDateofTheDayFormated(),
                location: "",
            }
        ]);

    }
    const addExperience =()=>{
        setExperienceForm({
            company:"Enter Company Name",
            position:"Enter Position Title",
            startDate:getDateofTheDayFormated(),
            endDate:getDateofTheDayFormated(),
            location:"Enter Location",
            description:"Enter Descripton here",
        })
             setExperience(currentExperience => [
                ...currentExperience,
        
                { // Préparez une nouvelle entrée vide
                    id: "Entry" + currentExperience.length, // Attention: cela pourrait ne pas être unique après suppression d'entrées
                    company: "",
                    position: "",
                    startDate:getDateofTheDayFormated(),
                    endDate: getDateofTheDayFormated(),
                    location: "",
                    description:"",
                }
            ]);
    }

    const handleDelete =(type) =>{
        type ==="exp" ?
        setExperience(currentExperience=>{
           let newExperience =[...currentExperience]
           let index = newExperience.findIndex(f => f["company"]===experienceForm.company && f["position"]=== experienceForm.position && f["location"]=== experienceForm.location)
            if(index !==-1)
            {
                newExperience.splice(index,1)
                return newExperience;
            }
            return newExperience

    }) 
    :
    setEtudes(currentEtudes => {
        let newEtudes = [...currentEtudes]
        let index = newEtudes.findIndex(f => f["school"]===etudesForm.school && f["degree"]=== etudesForm.degree)
        if(index !==-1)
            {
                newEtudes.splice(index,1)
                return newEtudes;
            }
            return newEtudes;

    })

    
}

    const handleEditData=(element,edit)=>{
        edit ==="educ" ?
        setEtudesForm(prevState=>{
            return element;
        })
        :
        setExperienceForm(prevState=>{
            return element;
        })
    }
    const handleClickLayout=(e)=>{
        console.log(e)

        const layout1= {
            
            container: {
                maxWidth: "50vw",
              margin: "0 auto",
              padding: "20px",
              backgroundColor: "#ffe5ec",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            },
            subheading: {
              fontSize: "0.75em",
              color: "#333",
              backgroundColor:"#ffc2d1",
              borderBottom: "2px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
              padding:"10px",
            },
            icon: {
              fontSize: "24px",
              marginRight: "8px",
              verticalAlign: "middle",
              color: "#fb6f92",
            },
            link: {
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "bold",
            },
            title: {
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#ff8fab",
              marginBottom: "15px",
            },
            dataContainer: {
              marginBottom: "20px",
            },
            item: {
              marginBottom: "10px",
            },
            dateLocation: {
              color: "#fb6f92",
              fontSize: "16px",
            },
            details: {
              fontWeight: "normal",
              fontSize: "18px",
              color: "#9d8189",
              
            },
            companyName: {
              fontWeight: "bold",
            },
            position: {
              fontWeight: "500",
            },
            descriptionExp: {
              marginTop: "5px",
              fontSize: "16px",
              color: "#fb6f92",
            }
          
        };
        
          
          const layout2 = {
            
              container: {
                maxWidth: "50vw",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#003049",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              },
              subheading: {
                fontSize: "0.75em",
                color: "#333",
                backgroundColor:"#fcbf49",
                borderBottom: "2px solid #eee",
                paddingBottom: "10px",
                marginBottom: "20px",
                padding:"10px",
              },
              icon: {
                fontSize: "24px",
                marginRight: "8px",
                verticalAlign: "middle",
                color: "#14213D",
              },
              link: {
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              },
              title: {
                fontSize: "22px",
                fontWeight: "bold",
                color: "#fcbf49",
                marginBottom: "15px",
              },
              dataContainer: {
                marginBottom: "20px",
              },
              item: {
                marginBottom: "10px",
              },
              dateLocation: {
                color: "#f77f00",
                fontSize: "16px",
              },
              details: {
                fontWeight: "normal",
                fontSize: "1em",
                color: "#f77f00",
              },
              companyName: {
                fontWeight: "bold",
              },
              position: {
                fontWeight: "500",
              },
              descriptionExp: {
                marginTop: "5px",
                fontSize: "1em",
                color: "#f77f00",
                
              }
            
          };
          

          const layout3 = {
              container: {
                maxWidth: "50vw",
                margin: "25px auto",
                padding: "30px",
                backgroundColor: "#03045e",
                fontFamily: "'Merriweather', serif",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                borderRadius: "10px",
              },
              subheading: {
                fontSize: "17px",
                backgroundColor:"#03045e",
                color: "#2a9d8f",
                borderBottom: "2px solid #eaeaea",
                paddingBottom: "10px",
                marginBottom: "20px",
              },
              icon: {
                fontSize: "22px",
                marginRight: "12px",
                verticalAlign: "middle",
                color: "#0077b6",
              },
              link: {
                color: "#d67e00",
                textDecoration: "none",
                fontWeight: "bold",
              },
            title: {
                fontSize: "21px",
                fontWeight: "bold",
                color: "#0096c7",
                marginBottom: "14px",
              },
              dataContainer: {
                marginBottom: "20px",
              },
              item: {
                marginBottom: "9px",
              },
              dateLocation: {
                color: "#90e0ef",
                fontSize: "15px",
              },
              details: {
                fontWeight: "normal",
                fontSize: "17px",
                color: "#90e0ef",
              },
              companyName: {
                fontWeight: "bold",
              },
              position: {
                fontWeight: "500",
              },
              descriptionExp: {
                marginTop: "5px",
                fontSize: "16px",
                color: "#ade8f4",
              }
            
          };
          
         e === "Layout 1" ? setStyleDisplay(layout1) : e === "Layout 2" ? setStyleDisplay(layout2) : setStyleDisplay(layout3);

           
       
    }
     

      return(
        <div className="container">
            <SideBar 
                formData={formData} 
                handleChange={handleChange}  
                etudes={etudesForm}
                experience={experienceForm}
                handleChangeEtudes={handleChangeEtudes} 
                handleClickDetails={handleClick} 
                handleClickEtudes={handleClickEtudes}
                handleClickCancel={resetEtudeForm}  
                handleSubmit={handleSubmitEtude}
                handleClickExperience={handleClickExperience}
                handleChangeExperience={handleChangeExperience}
                handleClickCancelExp={resetExperienceForm}
                handleSubmitExp = {handleSubmitExp}
                arrayEtudes ={etudes}
                arrayExp ={experience}
                handleEditData={handleEditData}
                addEtuddes ={addEtuddes}
                addExperience={addExperience}
                handleDelete={handleDelete}
                handleClickLayout ={handleClickLayout}
            />

            { 
            < DisplayCv 
                formData={formData}
                etudesData= {etudes}
                experienceData={experience}
                styleDisplay={styleDisplay}
            />
            }
            
        </div>
      )
}


export {GenerateCv}