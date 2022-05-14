import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avator from "./Avator";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user} =useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
           <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
             <div className="relative h-28 w-28 mx-auto hidden lg:inline-grid">
                <Image layout="fill" objectFit="cover"
                     className="rounded-full" src="/meta3.jpg" 
                />
             </div>
             <div className="col-span-4 text-left lg:text-center">
                 <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full" >
                     {/*avator*/}
                     <Avator logoutOnPress />
                 </div>
                 {/*welcome message */}

                <h1 className="text-3xl"> Welcome to the Kelcho ChatVerse </h1>
                 {/*username */} 
                <h2 className="text-5xl font-bold truncate">{user.get("username")}</h2>
                 {/*change user component */}
                 <ChangeUsername />
             </div>
           </div>
        </div>
    )
}

export default Header

