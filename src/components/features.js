import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"


const Features = () => (
    <section id="features" className="pt-10">
        <div className="">
            <p className="text-center text-2xl rajdhani pb-20">Fitur yang kami punya bang !</p>
            <div className="pt-10 md:space-x-20 md:justify-content-center md:items-center rajdhani text-center">
                <div className="text-center md:inline-block">
                    <StaticImage 
                        src="../images/features-bg.png"
                        width={300}
                    />   
                    <div className="transform -translate-y-32">
                        <p className="text-3xl text-white">Rute tercepat</p>
                        <br></br>
                        <p>Putar lagu dengan cepat</p>
                    </div>
                </div>
                <div className="text-center md:inline-block">
                    <StaticImage 
                        src="../images/features-bg.png"
                        width={300}
                    /> 
                    <div className="transform -translate-y-32">
                        <p className="text-3xl text-white">Bisa di-Download</p>
                        <br></br>
                        <p>Mendownload tanpa syarat</p> 
                    </div>
                </div>
                <div className="text-center md:inline-block">
                    <StaticImage 
                        src="../images/features-bg.png"
                        width={300}
                    /> 
                    <div className="transform -translate-y-32">
                        <p className="text-2xl text-white">Earning with your Sound</p>
                        <br></br>
                        <p>Dapatkan penghasilan dari Podcast-mu</p>  
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
)

export default Features