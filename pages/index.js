import Leyout from "../components/leyout";
import Link from 'next/link'
import {skills, experiences, projects} from '../profile'

const Index = () => (
    <Leyout>
        {/**header card**/}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="foto.jpeg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>Danny Vivas</h1>
                            <h3>FullStack Developer</h3>
                            <p>Apasionado por la Tecnología y la Innovación.
                                Soy un entusiasta de la tecnología, me apasiona saber que se puede hacer con esa caja llena de circuitos integrados. Me gusta ahondar en temas relevantes como el trabajo en equipo, las relaciones humanas, las aptitudes que adquirimos a lo largo de nuestra vida profesional. Considero que mi lado fuerte es el desarrollo backend. Espero poder aprender todos los días algo nuevo. Doy lo mejor de mi siempre y mas cuando algo me apasiona tanto!
                            </p>
                            <a href="/hereme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/**second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                    skills.map(({skill, percentage}, i )=> (
                            <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                        <div className="progress">
                                            <div 
                                            className="progress-bar" 
                                            role="progressbar" 
                                            style={{ width: `${percentage}%` }}>
                                            </div>
                                        </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>{
                            experiences.map(({title, from, to, description, role}, index) => (
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h5>{from} - {to}</h5>
                                            <h6>{role}</h6>
                                            <p>{description}</p>
                                        </li>
                                        ))
                        }
                        </ul>

                        <Link href="/experiences">
                            <a className="btn btn-light">Know More</a>
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/**Section Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                    {
                        projects.map(({name, description, image}, i) => (
                            <div className="col-md-4 p-2" key={i}>
                            <div className="card h-100">
                                <div className="overflow">
                                <img src={`/${image}`} alt="" className="card-img-top"/>
                                </div>
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <a href="#!">Nkow More</a>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                    <div className="text-center">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Leyout>
)

export default Index;