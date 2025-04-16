import ButtonFeild from "./ButtonFeild"
import { Footer } from "./Footer"
import image1 from "../assets/images/classes/1.jpeg"

const ContentClassDetail = () => {
    return <>
        <main className="p-8 md:h-screen md:overflow-y-auto bg-black text-white">
            <div className="md:p-5 flex flex-col gap-10 ">
                <div className="flex flex-col gap-3">
                    <p className="text-text_muted text-base">Cooking Class</p>
                    <h1 className="font-medium text-5xl tracking-wide">Reserve your spot</h1>
                    <p className="text-text_muted text-lg/8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.</p>
                </div>

                <div className="flex flex-row gap-5 items-center ">
                    <ButtonFeild label="BOOK A SPOT" className="w-1/3" />
                    <span className="text-text_muted text-2xl pt-3">$ 99</span>
                </div>


                <div className="flex flex-col gap-5" >
                    <h2 className="font-medium text-2xl tracking-wide text-text_primary">Details</h2>
                    <div className="flex flex-row justify-between text-text_muted text-xl border-b pb-5 border-text_muted">
                        <h2>Date</h2>
                        <p>10/10/2023</p>
                    </div>

                    <div className="flex flex-row justify-between text-text_muted text-xl border-b pb-5 border-text_muted">
                        <h2>Time</h2>
                        <p>10/10/2023</p>
                    </div>

                    <div className="flex flex-row justify-between text-text_muted text-xl border-b pb-5 border-text_muted">
                        <h2>Teacher</h2>
                    <div className="flex flex-row gap-3 items-center">
                        <img src={image1} alt="teacher" className="w-10 h-10 rounded-full" />
                        <p >John Doe</p>
                    </div>
                    </div>

                    <div className="flex flex-row justify-between text-text_muted text-xl border-b pb-5 border-text_muted">
                        <h2>Location</h2>
                        <p>10/10/2023</p>
                    </div>

                    

                </div>
            </div>

            <div className="md:p-5">
                <h2 className="font-medium text-2xl tracking-wide text-text_primary">menu</h2>
                {/* crad here */}
            </div>

            <div className="md:p-5">
                <h2 className="font-medium text-2xl tracking-wide text-text_primary">Teacher</h2>
                <div className="flex flex-col md:flex-row gap-5 items-center pt-10 justify-around">
                    <div className="w-1/2 aspect-square"> 
                        <img
                            src={image1}
                            alt="teacher"
                            className="w-full h-full rounded-full object-cover aspect-square" 
                        />
                    </div>
                    <p className="text-text_muted text-lg/8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    </>
}

export default ContentClassDetail