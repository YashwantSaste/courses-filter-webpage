import React, { useState } from 'react'
import { Card } from './Card';

export const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const[likedCourses,setLikedCourses]=useState([]);

    //returns you a list of all cou
    const getCourses=()=>{
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((couseCategory)=>{
                couseCategory.forEach((courseData)=>{
                    allCourses.push(courseData)
                })
            })
        return allCourses;
        }
        else{
            //specific category courses
            return props.courses[category];
        }
        
    }
    return (

        <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {!courses ? (
            <div>
                <p>No Data Found</p>
            </div>
        ):
        (getCourses()?.map((course)=>{
           return <Card key={course.id} course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}

           />
        }))}
        
        </div>
      )
}
