import { useState } from "react";
import Footer from "./Footer";
import LinkButton from "./LinkButton";
import ProfileDetails from "./ProfileDetails";
import {uiData, userDetails} from "../appData"

export default function App() {

const [linkData] = useState(uiData)
const [{name}] = useState(userDetails)

  return (
    <div>App
      <ProfileDetails user={name}/>
      {/* Links Components */}
      <ul className="link-wrapper">
      {linkData.map((link, index)=>{
        const {url, text,id} = link;
        return <LinkButton 
        url={url}
        text={text}
        id={id}
         key={index} />
      })}
      </ul>
      <Footer />
    </div>
  )
}
