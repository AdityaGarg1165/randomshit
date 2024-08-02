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
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/ptwo-cars-are-travelling-towards-each-other-at-speed-of--jee-main-physics-motion-lpksftxel2yuc0qu">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/an-insect-is-at-the-bottom-of-a-hemispherical-ditch-of-radiu-jee-main-physics-laws-of-motion-6ufis0nzc5ez34ba">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/pif-the-letters-of-the-word-maths-are-permuted-and-all-pos-jee-main-mathematics-trigonometric-functions-and-equations-wcmltozgf8hibyju">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/pthe-number-of-triangles-whose-vertices-are-at-the-vertice-jee-main-mathematics-trigonometric-functions-and-equations-4chjxri7toh4rg0z">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/pthe-value-of-frac11--50-frac13--48-fra-jee-main-mathematics-trigonometric-functions-and-equations-39b0ktbwjkzlsr74">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/the-sum-of-all-the-4-digit-distinct-numbers-that-can-be-form-jee-main-mathematics-trigonometric-functions-and-equations-7viycynegvwqwj7o">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://questions.examside.com/past-years/jee/question/a-natural-number-has-prime-factorization-given-by-n--2sup-jee-main-mathematics-trigonometric-functions-and-equations-xunywr2vy9hxlb58">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
      <a target="_blank" href="https://www.neetprep.com/questions/721-Physics/7975-Mathematical-Tools?courseId=8&testId=2327232-Mini-Q-Bank--Mathematical-Tools&pageNo=3">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"#151717"}}>
        <div className="flex">
            <img className="w-8 rounded-3xl h-8 left-12 absolute" src="https://learner-users.s3.ap-south-1.amazonaws.com/logo-orig.png" alt="" />
            <h1 className="text-white">https://www.neetprep.com/questions/721-Physics/7975</h1>
        </div>
      </div>
      </a> 
      </div>
      {/* })} */}

    </div>

   </div>
  );
}
