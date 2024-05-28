
function DisplayCv({ formData, etudesData, experienceData, styleDisplay }) {
  console.log(styleDisplay)
  return (
    <div className="display" style={styleDisplay.container}>
      <div className="information" style={styleDisplay.subheading}>
        <h1>{formData.name}</h1>
        <div className="contact-info">
          <p>
            <span className="material-symbols-outlined" style={styleDisplay.icon}>
              mail
            </span>
            {formData.email}
          </p>

          <p>
            <span className="material-symbols-outlined" style={styleDisplay.icon}>
              smartphone
            </span>
            {formData.phoneNumber}
          </p>
        </div>
        <p>
          <span className="material-symbols-outlined" style={styleDisplay.icon}>
            location_on
          </span>
          {formData.address}
        </p>
      </div>

      <div className="display-data" style={{overFlowY:"scroll"}}>
        <h2 style={styleDisplay.title}>Education</h2>
        <div className="data-container" style={styleDisplay.dataContainer}>
          {etudesData.length > 0 && <DisplayEtudes data={etudesData} styleDisplay={styleDisplay} />}
        </div>

        <h2 style={styleDisplay.title}>Professional Experience</h2>
        <div className="data-container" style={styleDisplay.dataContainer}>
          {experienceData.length > 0 && <DisplayExp data={experienceData} styleDisplay={styleDisplay} />}
        </div>
      </div>
    </div>
  );
}

function DisplayEtudes({ data, styleDisplay }) {
  return (
    <>
      {data.map((etude) => (
        etude.school !== "" && (
          <div key={etude.id} className="etudes" style={styleDisplay.item}>
            <div className="etudes-date-location" style={styleDisplay.dateLocation}>
              <p>{etude.startDate} / {etude.endDate}</p>
              <p>{etude.location}</p>
            </div>
            <div className="etudes-details" style={styleDisplay.details}>
              <p><span style={{ fontWeight: 500 }}>{etude.school}</span></p>
              <p>{etude.degree}</p>
            </div>
          </div>
        )
      ))}
    </>
  );
}

function DisplayExp({ data, styleDisplay }) {
  return (
    <>
      {data.map((exp) => (
        exp.company !== "" && (
          <div key={exp.id} className="experience" style={styleDisplay.item}>
            <div className="experience-date-location" style={styleDisplay.dateLocation}>
              {exp.endDate !== "" && <p>{exp.startDate} / {exp.endDate}</p>}
              <p>{exp.location}</p>
            </div>
            <div className="experience-details" style={styleDisplay.descriptionExp}>
              <p><span style={{ fontWeight: 700 }}>{exp.company}</span></p>
              <p style={{ fontWeight: 500 }}>{exp.position}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        )
      ))}
    </>
  );
}

export { DisplayCv, DisplayEtudes, DisplayExp };
