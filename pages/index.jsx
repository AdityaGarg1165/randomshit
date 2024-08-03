import Image from "next/image";
import { Inter } from "next/font/google";
import {collection, getFirestore} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {app} from './db'
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const db = getFirestore(app)
  const [l,setL] = useState(["df","dfdf"])
  const list = ["sadfsdf"]
  const doubtcollection = collection(db,"users")
  const [data] = useCollectionData(doubtcollection)
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
   <div>
    <div className="w-140 card rounded-2xl " style={{backgroundColor:"#0e0f0f"}}>
      <div>
     
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/all-possible-numbers-are-formed-using-the-digits-1-1-2-2-jee-main-mathematics-trigonometric-functions-and-equations-idenj0dvd6o0qgmh">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
  

      </div>
      {/* })} */}

    </div>

   </div>
  );
}
