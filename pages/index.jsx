import Image from "next/image";
import { Inter } from "next/font/google";
import {collection, getFirestore} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {app} from './db'
import Script from "next/script";
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
    <>
    <Script src="script.js"></Script>
     <div className="preloader z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto mt-44"  xmlnsXlink="http://www.w3.org/1999/xlink" width="375" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="375" preserveAspectRatio="xMidYMid meet" version="1.0"><path stroke-linecap="butt" transform="matrix(0.318295, -0.679108, 0.679108, 0.318295, 100.775431, 219.964908)" fill="none" stroke-linejoin="miter" d="M -0.000549764 1.999028 L 138.507859 1.998075 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-1"></path><path stroke-linecap="butt" transform="matrix(-0.484121, -0.572823, 0.572823, -0.484121, 162.297649, 149.339316)" fill="none" stroke-linejoin="miter" d="M 0.00160502 1.998058 L 35.596031 2.000767 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-2"></path><path stroke-linecap="butt" transform="matrix(0.318295, -0.679108, 0.679108, 0.318295, 117.718972, 241.670564)" fill="none" stroke-linejoin="miter" d="M -0.00120719 2.001945 L 138.507202 2.000993 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-3"></path><path stroke-linecap="butt" transform="matrix(-0.428483, -0.615551, 0.615551, -0.428483, 118.199783, 242.805438)" fill="none" stroke-linejoin="miter" d="M 0.0000951132 1.998122 L 37.224507 1.99941 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-4"></path><path stroke-linecap="butt" transform="matrix(-0.272196, -0.698863, 0.698863, -0.272196, 172.550398, 241.953279)" fill="none" stroke-linejoin="miter" d="M -0.00210631 2.000747 L 138.505255 1.997907 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-5"></path><path stroke-linecap="butt" transform="matrix(-0.272196, -0.698863, 0.698863, -0.272196, 197.25112, 242.31476)" fill="none" stroke-linejoin="miter" d="M 0.00123718 1.999898 L 138.506708 2.001912 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-6"></path><path stroke-linecap="butt" transform="matrix(-0.748655, -0.0449024, 0.0449024, -0.748655, 198.560588, 242.908635)" fill="none" stroke-linejoin="miter" d="M -0.00250282 2.001713 L 32.895004 2.000891 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-7"></path><path stroke-linecap="butt" transform="matrix(0.7487, -0.0441458, 0.0441458, 0.7487, 136.162421, 202.422673)" fill="none" stroke-linejoin="miter" d="M -0.0010901 2.002344 L 32.852968 1.998661 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-8"></path><path stroke-linecap="butt" transform="matrix(0.7487, -0.0441458, 0.0441458, 0.7487, 138.673061, 147.598951)" fill="none" stroke-linejoin="miter" d="M 0.00038495 2.001767 L 32.849244 1.997778 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-9"></path><path stroke-linecap="butt" transform="matrix(0, -0.75, 0.75, 0, 209.922178, 197.952335)" fill="none" stroke-linejoin="miter" d="M -0.00105333 1.999596 L 65.030201 1.999596 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-10"></path><path stroke-linecap="butt" transform="matrix(0.471264, -0.583447, 0.583447, 0.471264, 209.573676, 150.363653)" fill="none" stroke-linejoin="miter" d="M 0.00290209 2.000427 L 45.046508 1.998978 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-11"></path><path stroke-linecap="butt" transform="matrix(0.461908, 0.590881, -0.590881, 0.461908, 211.838969, 194.730294)" fill="none" stroke-linejoin="miter" d="M -0.00264139 1.999553 L 46.139883 2.00143 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-12"></path><path stroke-linecap="butt" transform="matrix(-0.749804, -0.0171405, 0.0171405, -0.749804, 271.962642, 224.412055)" fill="none" stroke-linejoin="miter" d="M 0.00105606 1.997821 L 53.561919 1.997696 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-13"></path><path stroke-linecap="butt" transform="matrix(-0.75, 0, 0, -0.75, 266.075406, 127.219825)" fill="none" stroke-linejoin="miter" d="M 0.0015833 2.001434 L 47.626586 2.001434 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-14"></path><path stroke-linecap="butt" transform="matrix(0.75, 0.000000000000003112, -0.000000000000003112, 0.75, 211.422384, 196.452556)" fill="none" stroke-linejoin="miter" d="M -0.000678956 2.000759 L 27.400365 2.000759 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-15"></path><path stroke-linecap="butt" transform="matrix(0.75, 0, 0, 0.75, 211.422384, 148.523765)" fill="none" stroke-linejoin="miter" d="M -0.000678956 1.999564 L 27.400365 1.999564 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-16"></path><path stroke-linecap="butt" transform="matrix(-0.0145471, -0.749859, 0.749859, -0.0145471, 229.327753, 221.722221)" fill="none" stroke-linejoin="miter" d="M 0.00227744 2.000916 L 35.925727 1.999773 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-17"></path><path stroke-linecap="butt" transform="matrix(0.0206773, -0.749715, 0.749715, 0.0206773, 228.496132, 155.136333)" fill="none" stroke-linejoin="miter" d="M 0.00256052 2.000639 L 40.226197 2.001057 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-18"></path><path stroke-linecap="butt" transform="matrix(-0.650188, -0.373838, 0.373838, -0.650188, 271.130288, 224.422221)" fill="none" stroke-linejoin="miter" d="M -0.000589703 2.001494 L 66.079801 2.001122 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-19"></path><path stroke-linecap="butt" transform="matrix(0.601079, -0.448557, 0.448557, 0.601079, 229.100219, 150.104097)" fill="none" stroke-linejoin="miter" d="M -0.0000734529 1.997335 L 58.595944 2.001338 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-20"></path><path stroke-linecap="butt" transform="matrix(0, -0.75, 0.75, 0, 228.159246, 197.952335)" fill="none" stroke-linejoin="miter" d="M -0.00105333 2.001213 L 65.030201 2.001213 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-21"></path><path stroke-linecap="butt" transform="matrix(0, -0.75, 0.75, 0, 270.3761, 242.30679)" fill="none" stroke-linejoin="miter" d="M -0.00240542 1.998533 L 75.992391 1.998533 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-22"></path><path stroke-linecap="butt" transform="matrix(0, -0.75, 0.75, 0, 254.343415, 242.30679)" fill="none" stroke-linejoin="miter" d="M -0.00240542 2.000447 L 75.992391 2.000447 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-23"></path><path stroke-linecap="butt" transform="matrix(-0.749796, -0.0174863, 0.0174863, -0.749796, 271.86488, 187.847947)" fill="none" stroke-linejoin="miter" d="M 0.0019082 2.000887 L 21.466068 2.00045 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-24"></path><path stroke-linecap="butt" transform="matrix(-0.749796, -0.0174863, 0.0174863, -0.749796, 273.220739, 242.330595)" fill="none" stroke-linejoin="miter" d="M 0.0023738 1.998573 L 21.466533 1.998136 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-25"></path><path stroke-linecap="butt" transform="matrix(-0.577785, -0.478189, 0.478189, -0.577785, 272.310133, 208.325259)" fill="none" stroke-linejoin="miter" d="M 0.00237204 2.001014 L 28.889532 1.99926 " stroke="#737373" stroke-width="4" stroke-opacity="1" stroke-miterlimit="4" class="svg-elem-26"></path></svg>
      </div>
    <div>
    <div className="w-140 card rounded-2xl " style={{backgroundColor:"#0e0f0f"}}>
      <div>
     
     
     
      <a id="a" className={"a"} target="_blank" href="https://questions.examside.com/past-years/jee/question/pthe-number-of-ways-to-distribute-30-identical-candies-amo-jee-main-mathematics-trigonometric-functions-and-equations-4uclvinxrm2f1ocw">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl" style={{backgroundColor:"red"}}>
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question/</h1>
        </div>
      </div>
      </a>
   
      <a id="a" className={"a"} target="_blank" href="https://questions.examside.com/past-years/jee/question/pmatch-list-i-with-list-iip-pstyle-typetextcss-jee-main-chemistry-some-basic-concepts-of-chemistry-xhd5rjdlpjdf9tfw">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl">
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question</h1>
        </div>
      </div>
      </a>
      <a id="a" className={"a"} target="_blank" href="https://questions.examside.com/past-years/jee/question/pthree-blocks-mathrmm1-m2-m3-having-masses-4-jee-main-physics-motion-s5inhklf6lkhqvkn">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl">
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question</h1>
        </div>
      </div>
      </a>
      <a id="a" className={"a"} target="_blank" href="https://questions.examside.com/past-years/medical/question/pin-the-diagram-shown-the-normal-reaction-force-between-2-neet-physics-motion-in-a-straight-line-mxclt4uzi4waauki">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl">
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question</h1>
        </div>
      </div>
      </a>
      <a id="a" className={"a"} target="_blank" href="https://questions.examside.com/past-years/jee/question/pa-particle-of-mass-m-moves-on-a-straight-line-with-it-jee-main-physics-motion-wd1uieomyapehhsu">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl">
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question</h1>
        </div>
      </div>
      </a>
      <a id="a" className={"a"} target="_blank" href="https://questions.examside.com/past-years/jee/question/pfour-particles-a-b-c-d-of-mass-fracm2-m-2-jee-main-physics-motion-6syzfqjh02r5pqla">
      <div className="w-120 pl-14 pt-2 mt-9 h-12 rounded-3xl">
        <div className="flex">
            <img className="w-8 h-8 left-12 absolute" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEw8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8Y+s8ZOs9ZOs0Xut4j/CNoPJxiu8qWOrN1fn///+crPNgfe7c4vu9x/f0X2FWAAAAC3RSTlMAN4PD4vxf7P8WFjaXv00AAACxSURBVHgBfJHFAcAgEMBwq7ew/6g1XPODwCkIQIQJpQQjCEoYFwHOMiWJyCAqiSgqYN9Fq+xpCtiz/CWxbl4cq7Xkc8w+3PbDsW/25quZB3muP5fvKFbzynmLKW1NKJHh3oIA7ksMSJTr9pKEJYBGadGblzSVu/k4pyjLsFsSdljQuBWYymII6fiWyxLHVw9eJ4P39c6nY0lWBmR72eoZvmRCKIFBkxF60uQknKjxZgcATS0Xn51y6MIAAAAASUVORK5CYII=" alt="" />
            <h1 className="text-white">https://questions.examside.com/past-years/jee/question</h1>
        </div>
      </div>
      </a>
   
      
      <button  className="openAll mt-4 px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors" onClick={()=>{
        const elements = document.getElementsByClassName("a")
        for (let key of elements){
          key.click()
          console.log(key)
        }
        console.log(elements)
      }}>Open Links</button>
      </div>
      {/* })} */}

    </div>

   </div>
      </>
  );
}
