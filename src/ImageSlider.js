
//
import React, {useState} from 'react';

const ImageSlider = () => {

let [currentSlide, setCurrentSlide] = useState(0);

const images = [
  'https://th.bing.com/th/id/R.b46ab657e8d8ac19a6febd2a800f75d1?rik=OHMRkhqyJqBFlg&riu=http%3a%2f%2fwww.ricoh-imaging.co.jp%2fenglish%2fproducts%2fxg-1%2fex%2fimg%2fex-pic07.jpg&ehk=j38QJyEs1kWfA%2bnQbxutVjeIh5dxS%2bxPVCJ%2brc2M3Zw%3d&risl=1&pid=ImgRaw&r=0',
  'https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg',
  'https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg',
  'https://i.imgur.com/hlUaX.jpg'];


return(

<div>
	

<button onClick={()=> ( currentSlide == 0? setCurrentSlide(images.length-1): setCurrentSlide(--currentSlide))}>Slide Left</button>

<img src={images[currentSlide]} height='100px' width='150'/>
<button onClick={()=>( currentSlide == images.length-1 ? setCurrentSlide(0): setCurrentSlide(++currentSlide))}>Slide Right</button>


</div>


);

}

export default ImageSlider;