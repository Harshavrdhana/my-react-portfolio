import React from 'react'
import './skillsDescription.css'
import {BiCheck} from 'react-icons/bi'

function SkillsDescription() {
  return (
    <section id="services">
      <h5>Proficiency</h5>
      <h2>Skills Depth & Specialization</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>HTML and CSS</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>HTML Document Structure, HTML Elements and Tags</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>HTML Forms, Links, Navigation and Images</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>HTML Tables, Semantic Elements, Multimedia</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>HTML5 Doctype and Validation, Metadata</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>CSS Selectors, Box Model, Flexbox, Transforms</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>CSS Grid, Responsive Design(@media), Positioning</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>CSS Transitions, Variables(Custom Properties)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>CSS Pseudo-classes</p>
            </li>
          </ul>
        </article>
        {/* End of Ui/UX */}
        <article className="service">
          <div className="service_head">
            <h3>JavaScript and React</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Variables, Data Types, Operators and Expressions</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Controls Flow, Functions, Arrays and Objects</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>DOM Manipulation, Events and Event Handling</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Asynchronous JavaScript(Callbacks, Promises, Async/Await)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>JavaScript Error Handling, LocalStorage, ES6+ Features</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>React Components, JSX (JavaScript XML)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>React State and Props, Lifecycle Methods, React Forms</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>React Router, Hooks, State Management(e.g.,Context API)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>React and API Integration, Conditional Rendering,Custom Hooks</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Java and Oracle SQL</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Java Basics: Data Types, Variables, Operators, Control Flow</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Object-Oriented Programming (OOP concept)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Thread and Exception Handling</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Java Collections Framework Libraries</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Basic SQL queries, SQL Joins, Aggregation Functions</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Group By and Having Clauses, Subqueries</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Data Modification Statements(INSERT,UPDATE,DELETE)</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Indexes and Contraints, SQL Languages</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default SkillsDescription