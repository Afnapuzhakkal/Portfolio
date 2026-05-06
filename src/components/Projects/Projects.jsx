import React from 'react'
import projects from "../../data/projects.json"
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="projects" id='projects'>
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, id) => {
          return (
            <ProjectCard key={id} {...project} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects