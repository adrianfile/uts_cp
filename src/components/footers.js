import * as React from "react"

const Footers = () => (
    <section className="bg-blue-300">
        <div className="w-full mx-auto xl:text-center md:w-160 md:px-10 xl:h-80  pt-10">
            <p className="rajdhani text-center text-2xl py-10 text-white">BERLANGGANAN NEWSLETTER</p>
            <p className="text-justify italic px-3">Kamu akan mendapatkan Informasi terbaru dari Moosik dari pengembangan maupun update blog, maupun kamu berkesempatan mendapatkan voucher langganan Mooosik hanya untuk kamu</p>
            <form>
                <input type="text" 
                       placeholder="Nama" 
                       className="block xl:inline-block mx-auto px-5 mt-5 focus:ring-4 outline-none transition ease-in rounded-xl py-4 rajdhani xl:mr-2"
                />
                <button className="block xl:inline-block mx-auto mt-2 py-4 w-56 rounded-xl bg-red-400 text-white rajdhani">
                    BERLANGGANAN
                </button>
            </form>
        </div>
    </section>
)

export default Footers