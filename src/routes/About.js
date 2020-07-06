import React from "react";
import "./About.css";

function About(props){
   console.log(props)
   return (
      <div className="about__container">
         <span>
            "빛은 위와 아래에서 글자들의 내부 공간과 그들 사이의 공간으로 흘러들어 간다."
         </span>
         <span>요스트 호훌리(김형진 옮김), 『마이크로 타이포그래피』</span>
      </div>
   )
}

export default About;