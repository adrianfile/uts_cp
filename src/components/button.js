import React,{ useState, useEffect} from 'react'


const ButtonTop = () => {

    const [button, setButton] = useState(false)

    const visibility = () => {
        if(window.pageYOffset > 200) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", visibility)
    })

    return (
        <div className={button ? 'opacity-100 transition ease-in duration-300' : 'opacity-0 transition ease-out duration-300'}>
            <a href="#top"
               className="fixed bottom-10 right-5 w-16 h-16 rounded-full bg-blue-500 z-50">
                   <p className="text-center rajdhani mt-5 text-white">KEATAS</p>
            </a>
        </div>
    )
}

export default ButtonTop