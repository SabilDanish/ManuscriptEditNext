"use client"
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import "./style.css";
import VerticalTab from "./components/VerticalTab";
import resumeData from "./resumeData.js";
import useFetchClientList from "@/app/hooks/more/useClientList";
import { DNA } from "react-loader-spinner";

export default function Home() {
  const {loading,clientList}  = useFetchClientList()
  
  return (
    <>
    {breadcrum("More / Client List", "Client List")}
    <div className="App">
      {loading ? <DNA /> : clientList.length ? <VerticalTab data={clientList}/> : ""}
    </div>
    </>
  );
}
