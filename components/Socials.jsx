import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social=[
    {icon: <FaGithub/>, path: "https://github.com/muhammadalaa20"},
    {icon: <FaFacebook/>, path: "https://www.facebook.com/MuhammadAlaa20"},
    {icon: <FaXTwitter/>, path: "https://x.com/Muhammadalaa20"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/muhammadalaa84/"},
]

export default function Socials ({containerStyles, iconStyles}) {
    return(
        <div className={containerStyles}>
        {social.map(({icon, path}, index) => (
            <Link key={index} href={path} target="_blank" rel="noreferrer" className={iconStyles}> 
                    {icon}
            </Link>
        ))}
        </div>
    )
}