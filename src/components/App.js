import React, {Component, useState} from "react";
// import '../styles/App.css';s

const App = () => {
  const Projects = [{projectName:"Project 1", projectDisc: "Description 1"},
    {projectName:"Project 2", projectDisc: "Description 2"},
    {projectName:"Project 3", projectDisc: "Description 3"},
    {projectName:"Project 4", projectDisc: "Description 4"},
  ]
  return (
    <div id="main">
      <ol>
      {Projects.map((item)=>{
        return <li>
           <h1 data-ns-test="project-name">{item.projectName}</h1>
           <h6 data-ns-test="project-description">{item.projectDisc}</h6>
        </li>
      })}
      </ol>
     
    </div>
  )
}


export default App;
