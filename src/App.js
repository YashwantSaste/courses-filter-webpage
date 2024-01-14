import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { apiUrl, filterData } from './data';
import { Cards } from './components/Cards';
import { toast } from 'react-toastify';
import { Spinner } from './components/Spinner';


function App() {
  //the previous error of mapping the response of API to a null object is due to because we mapped
  //courses variable intial to null
  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)
  const fetchData= async ()=>{
    setLoading(true)
    try{
      const response= await fetch(apiUrl);
      const output= await response.json();
      //save data into a variable
      setCourses(output.data)

    }
    catch(error){
      console.log("Internal Error");
      console.log(error);
      toast.error("Something went wrong")
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
          <Navbar/>
        </div>
        <div className='bg-bgDark2'>
        <div>
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
        </div>
        </div>
        
    </div>
  );
}

export default App;
