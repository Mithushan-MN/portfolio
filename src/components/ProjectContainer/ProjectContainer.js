import React from 'react'
import {Element} from "react-scroll";
import Project from '../Project/Project';
import "./ProjectContainer.css"
import proimg from "../../assets/proj1.png"
import proimg1 from "../../assets/proj2.png"
import proimg2 from "../../assets/proj3.png"
import proimg3 from "../../assets/proj4.png"
import proimg4 from "../../assets/proj5.png"
import proimg5 from "../../assets/proj6.png"

const ProjectContainer = () => {

  const projects = [
    {
      img:proimg,
      title: "Gym App",
      desc:"This Website(Gym APP) Created by using ReactJs Framework.",
      link:"https://mithushan-mn.github.io/Gym-app/ ",
    },
    {
      img:proimg1,
      title: "Restorant WebApp",
      desc:"This Website(Restorant Website) Created by using ReactJs Framework.",
      link:"https://mithushan-mn.github.io/Restorant/",
    },
    {
      img:proimg2,
      title: "Coffee Shop",
      desc:"This Website(Coffee Shop) Created by using Html,CSS and Javascript.",
      link:"https://mithushan-mn.github.io/Coffee-Shop/",
    },
    {
      img:proimg3,
      title: "Travel Management System",
      desc:"This Website(Travel Mangement System) Created by using Html,CSS,Javascript,Boostrap,PHP and MySQL.",
      link:"https://github.com/Mithushan-MN/Travel-Management-System",
    },
    {
      img:proimg4,
      title: "Plant App UI/UX",
      desc:"A UI/UX for online Plant store, Created by using Figma.",
      link:"https://www.behance.net/gallery/170305135/Plant-Store-App",
    },
    {
      img:proimg5,
      title: "Food App UI/UX",
      desc:"A UI/UX for online Food App, Created by using Figma.",
      link:"https://www.behance.net/gallery/170821159/Food-App",
    },
  ];


  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some of my projects which I made..</p>
      <div className="projectContainer__projects">
      {
        projects.map((project,index)=>{
          return (
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
          )
        })
      }
      </div>
      
    </Element>
  );
};

export default ProjectContainer;
