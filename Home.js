import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home() {
    return (
        <div>
             <nav class="navbar navbar-light bg-warning">
                <span class="navbar-brand mb-0 h1">Mobile's World</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item1 active">
                        <Link class="nav-link" to="login">Login<span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </nav>
            <h1 id="home">Welcome To Mobile World....</h1>
            <p id="hpara"></p>
           <div className="card" style={{width: "23rem"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfvpXUYd3W21Ja6jI7tqL3i-9hVU0V5y-cTISHzlU41KvFSWgKOrJ-hBmIC_sF_rZhaElwTM&usqp=CAc" class="card-img-top" alt="..."/><div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>Apple</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWZDU0CkB7XUzeFyTc5RBi4ESG8szyePbswtitjH6C7yQXgBCBrVwKN6XDR7Ipr5xH9KHL6ZVS&usqp=CAc" class="card-img-top" alt="..."/><div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>Samsung</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
            <img src="./image/nokia.jpg" class="card-img-top" alt="..."/><div class="card-body">

                <p style={{color:"darkblue"}} class="card-text"><b>Nokia</b><br/>website: WWW.nokia.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
            <img src="./image/oneplus.jpg" class="card-img-top" alt="..."/><div class="card-body">

                <p style={{color:"darkblue"}} class="card-text"><b>One+</b><br/>website: WWW.oneplus.com</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="./image/soppo.jpg" class="card-img-top" alt="..."/><div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>Vivo</b><br/>website: WWW.vivo.com </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
            <img src="./image/oppo.jpg" class="card-img-top" alt="..."/><div class="card-body">
                <p style={{color:"darkblue"}} class="card-text"><b>Oppo</b> <br/> website: WWW.oppo.com</p>
            </div>
            </div>
        </div>
    )
}
