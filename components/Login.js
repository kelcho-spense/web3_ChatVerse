import Image from "next/image";
import {useMoralis} from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative">
          <h1>i am login screen</h1> 
          <div className="flex flex-col absolute z-50 h-4/6  w-full items-center justify-center space-y-4">        
            <Image className="object-cover rounded-full" src="/meta2.jpg" height={200} width={200}/>  
            <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
              Login to the Metaverse</button>
          </div> 
          <div className="w-full h-screen"> 
          {/*background cover*/}
             <Image src="/meta1.jpg" layout="fill" objectfit="cover" />
          </div>
         
        </div>
    )
}

export default Login
