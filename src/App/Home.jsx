import { useState } from "react";
import Footer from "./Footer";
import LinkButton from "./LinkButton";
import ProfileDetails from "./ProfileDetails";
import { uiData, userDetails } from "../appData";
import slack from "../img/slack.svg";
import gitHub from "../img/Social icon.svg";


export default function Home() {
        const [linkData] = useState(uiData)
        const [{ name }] = useState(userDetails)
        return (
                <>
                        <ProfileDetails user={name} />
                        <ul className="link-wrapper">
                                {linkData.map((link, index) => {
                                        const { url, text, id, title } = link;
                                        return <LinkButton
                                                url={url}
                                                text={text}
                                                id={id}
                                                key={index}
                                                title={title} />
                                })}
                        </ul>
                        <div className="social">
                                <a href="https://slack.com/"><img src={slack} alt="slack Link" /></a>
                                <a href="https://github.com/dev-bazz/link_tree"><img src={gitHub} alt="github" /></a>
                        </div>
                </>
        )
}
