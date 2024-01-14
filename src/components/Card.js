import React from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

export const Card = (props) => {

  let likedCourses= props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(props.course.id)){
      ////if liked from the beginning
      setLikedCourses((prev)=>prev.filter((cid)=>(cid !== props.course.id)));
      toast.warning("Like Removed");
    }
    else{
      //if not liked from the beginning then we have to add it to the likedCourse Array
      if(likedCourses.length ===0){
        setLikedCourses([props.course.id])
      }
      else{
        //non-empty condition
        setLikedCourses((prev)=>[...prev,props.course.id])
      }
      toast.success("Liked Successfully")
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-sm overflow-hidden'>
        <div className='relative'>
        <img src={props.course.image.url}></img>
       <div className='w-[40px] h-[40px] rounded-full absolute bg-white right-3 bottom-[-12px] grid place-items-center'>
       <button onClick={clickHandler}>
            {
              !likedCourses.includes(props.course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) :(<FcLike fontSize="1.75rem"/>)
            }
            
        </button>
       </div>
       </div>
       <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{props.course.title}</p>
          <p className='text-white mt-2'>
          {
            props.course.description.length>100 ? (props.course.description.substr(0,100)+ "..."):(props.course.description)
          }
          </p>
       </div>
    </div>
  )
}
