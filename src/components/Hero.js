import React from 'react';
import Boxes from '../props/Boxes';
import { useState } from 'react';
import SetQuestions from './SetQuestion';
import Popups from '../props/Popups';
import useFetch from '../useFetch';




function Hero() {


  const[ques,setques] = useState([
    {title:'Text 1', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',id:1,num:1,level:"-20%" },
    {title:'Text 2', body:'t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',id:2,num:2,level:"-50%" },
    {title:'Text 3', body:'Contrary to popular belief, Lorem Ipsum is not simply random text.',id:3,num:3,level:"-0%" },
    {title:'Text 4', body:'Lorem Ipsum is not simply random text.',id:4.,num:4,level:"-80%" },
    {title:'Text 5', body:'Contrary to popular belief',id:5.,num:5,level:"-40%"},
    {title:'Text 6', body:'Last Question Descriptoin',id:6,num:6,level:"-100%"}
  ]);

  // const {ques,text,setText,isPending, error} = useFetch('http://localhost:8000/questions');


  const[text,setText] = useState([]);

  const [buttonPopup, setButtonPopup] = useState(false);



  let display = (id) => { 
    const newDisplay = ques.filter(ques => ques.id===id);
    console.log(newDisplay);
    setText(newDisplay);
  }



  return (
    <>
    <style>
      {`
        @media only screen and (max-width: 468px) {
          .container {
            /* Your styles for small screens */
            width:100%;
            height:632px;
            overflow:hidden;
            display:flex;
            justify:center;
            items:center;
            background-color:red;
            

          }

          .cont-left {
            /* Your styles for .cont-left on small screens */
            display:flex;
            top:0%;
            background-color:black;
            width:100%;
            height:100%;
            justify:center;
            items:center;
            gap:10px;
            flex-wrap: wrap;
            overflow:hidden;
            padding: 50px 50px;
            
          }

          .cont-right {
            /* Your styles for .cont-right on small screens */
          }
      `}
    </style>
        <div className="container h-[86.5vh] w-full  flex justify-center items-center bg-transparent">
            <div className="cont-left bg-red-900 h-[100%] w-[70%] flex justify-center items-center flex-wrap gap-[100px] bg-transparent relative p-[80px]">
              {/* <Boxes dis={display} id={1} num={1} level={'-10%'}/>
              <Boxes dis={display} id={2} num={2} level={'-20%'}/>
              <Boxes dis={display} id={3} num={3} level={'-30%'}/>
              <Boxes dis={display} id={4} num={4} level={'-50%'}/>
              <Boxes dis={display} id={5} num={5} level={'-70%'}/>
              <Boxes dis={display} id={6} num={6} level={'-0%'}/> */}

              {ques.map((question) => {
                return(
                  <Boxes dis={display} id={question.id} num={question.num} level={question.level}/>
                );
              } )}
              
            </div>
            <div className="cont-right  w-[30%] h-[100%] flex justify-center items-center bg-transparent max-sm:w-[0%]">
                <div className="bigBox  text-white h-[500px] w-[80%] border-[2px] border-solid border-white rounded-[20px] flex flex-col justify-center items-center max-sm:hidden">
                    
                    <SetQuestions ques={text.filter((text) => text.id)} />
                </div>
            </div>
            <Popups trigger={buttonPopup} setTrigger={setButtonPopup}>
              <SetQuestions ques={text.filter((text) => text.id)} />
            </Popups>
        </div>
    </>
  )
}

export default Hero