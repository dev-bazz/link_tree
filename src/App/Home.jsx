import { useState } from "react";
import LinkButton from "./LinkButton";
import ProfileDetails from "./ProfileDetails";
import { uiData, userDetails } from "../appData";
import slack from "../img/slack.svg";
import gitHub from "../img/Social icon.svg";
import { Link } from "react-router-dom";


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
                                <li>
                                        <Link to="/contact-me" className="btn-link__a">Contact Me</Link>
                                </li>
                        </ul>
                        <div className="social">
                                <a href="https://slack.com/"><img src={slack} alt="slack Link" /></a>
                                <a href="https://github.com/dev-bazz/link_tree"><img src={gitHub} alt="github" /></a>
                        </div>
                </>
        )
}
