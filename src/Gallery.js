import  React,{ useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";

import './App.css'

import img1 from './assets/images/img1.jpg';
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from './assets/images/img4.jpg';
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";


 const Gallery = () => {
  let data=[
    {
        id:1,
        imgSrc:img1.jpg,
    },
    {
        id:2,
        imgSrc: img2,
    },
    {
        id:3,
        imgSrc: img3,
    },
        {
        id:1,
        imgSrc:img4,
    },
    {
        id:2,
        imgSrc: img5,
    },
    {
        id:3,
        imgSrc: img6,
    }
  ];

  const [model,setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');


  const getImg = (imgSrc)=>{
      setTempImgSrc(imgSrc);
      setModel(true);
  }

  return (
    <>
    <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt=""/>
        <CloseIcon onClick={()=>setModel(false)}/>
    </div>
    <div className='gallery-style'>
        {data.map((item,index)=>{
            return(
              <div className="pics" key={index} onClick={()=>{getImg(item.imgSrc)}}>
                <img src={item.imgSrc} alt=""/>
              </div>
          );
        })}

    </div>
    </>
  )
}

export default Gallery;