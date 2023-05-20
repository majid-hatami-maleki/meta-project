import React from 'react'
import './main.css'
import FeatureBox from '../show-features-box/FeatureBox'
function Main() {
    const features = [
        {
            id: 'feature1',
            title: 'projects',
            src: 'community.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iusto placeat neque magni eius tempore maiores dolorem, minus illum corporis?'
        },
        {
            id: 'feature2',
            title: 'education',
            src: 'education.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iusto placeat neque magni eius tempore maiores dolorem, minus illum corporis?'
        },
        {
            id: 'feature3',
            title: 'ideas',
            src: 'Ideas.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iusto placeat neque magni eius tempore maiores dolorem, minus illum corporis?'
        },
        {
            id: 'feature4',
            title: 'mobile app',
            src: 'mobile-app.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis iusto placeat neque magni eius tempore maiores dolorem, minus illum corporis?'
        },
    ]
    return (
        <div className='main'>
            <div className="main-portfolio">
                <div className="main-portfolio-picture">
                    <div className="portfolio-pic"></div>
                    <h3>hello , I am Majid</h3>
                </div>
                <h1>a frontend developer specialist in react</h1>
            </div>
            <div className="main-features">
                <h3>featured projects</h3>
                <div className='FeatureBox-container'>
                    {features.map((feature) => (
                        <FeatureBox
                            key={feature.id}
                            title={feature.title}
                            src={feature.src}
                            des={feature.description}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main