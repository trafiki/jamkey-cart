import { Link } from 'react-router-dom'
import './heroSection.css'
import controller from '../../assets/controller.png'
import zelda from "../../assets/zelda.jpg"
import { IonIcon } from '@ionic/react'


export default function HeroSection() {
  return (
    <section className="slider wrapper">
    <div className="main-slider">
        <div className="main-slider-content">
            <h3>over 2,000 games</h3>
            <h1>Best deals <br /> on Jamkey</h1>
            <a href="/#shop" className="btn">
                <span>View products</span>
                <IonIcon name="caret-forward-outline"></IonIcon> 
            </a>
        </div>
        <div className="controller-pic">
            <img src={controller} alt="" />
        </div>
    </div>
    <div className="groupings desktop-only">
        <div className="grp-box">
            <div className="display-pic">
                <img src={zelda} alt="" />
            </div>
            <div className="content">
                <div className="grp-link">
                    <Link to="#">Arcade</Link>
                    <p>150 games</p>
                </div>
                <div className="grp-nav">
                    <Link to="#"><IonIcon name="chevron-forward"></IonIcon></Link>
                </div>
            </div>
        </div>
        <div className="grp-box">
            <div className="display-pic">
                <img src={zelda} alt="" />
            </div>
            <div className="content">
                <div className="grp-link">
                    <Link to="#">Strategy</Link>
                    <p>312 games</p>
                </div>
                <div className="grp-nav">
                    <Link to="#"><IonIcon name="chevron-forward"></IonIcon></Link>
                </div>
            </div>
        </div>
        <div className="grp-box">
            <div className="display-pic">
                <img src={zelda} alt="" />
            </div>
            <div className="content">
                <div className="grp-link">
                    <Link to="#">Action</Link>
                    <p>320 games</p>
                </div>
                <div className="grp-nav">
                    <Link to="#"><IonIcon name="chevron-forward"></IonIcon></Link>
                </div>
            </div>
        </div>
        <div className="grp-box">
            <div className="stack one"></div>
            <div className="stack two"></div>
            <div className="content">
                <div className="grp-link">
                    <Link to="#">Show All</Link>
                    <p>+25 categories</p>
                </div>
                <div className="grp-nav">
                    <Link to="#"><IonIcon name="chevron-forward"></IonIcon></Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
