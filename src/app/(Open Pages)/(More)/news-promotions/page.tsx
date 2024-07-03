"use client"
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import "./news.css";
import useFetchNews from "@/app/hooks/more/useNewsConference";
import { DNA } from "react-loader-spinner";

export default function Home() {

  const {loading,news} = useFetchNews()

  return (
    <>
    {breadcrum("More", "Recent Partners")}
    <div className="container mt-3 mb-3">
    <div className="row">
      {news.length ? news.map((val: any,index:number) => (<div key={index} className="col-md-4 mt-3">
       <div className="card text-center mrmine changeColor2">
         <div className="card-header changeColor">
             Conference
         </div>
         
         <div className="card-body">
             <h5 className="card-title">{val.conf}</h5>
             <p className="card-text">{val.conf}</p>
         </div>
         <div className="card-footer text-muted">
             December 2018-06-21
         </div>
     </div>
      </div>)) : (
       <div className="dnaCenter"><DNA /></div> 
      )}
    </div>
    </div>
  
    </>
  );
}
