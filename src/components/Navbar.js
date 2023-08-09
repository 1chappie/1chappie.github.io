import "../components/Navbar.css"
import {ReactComponent as Home} from "../assets/home.svg"
import {ReactComponent as HomeSelected} from "../assets/home_sel.svg"
import {ReactComponent as Projects} from "../assets/projects.svg"
import {ReactComponent as ProjectsSelected} from "../assets/projects_sel.svg"
import {ReactComponent as Resume} from "../assets/cv.svg"
import {ReactComponent as ResumeSelected} from "../assets/cv_sel.svg"
import {ReactComponent as Socials} from "../assets/socials.svg"
import {ReactComponent as SocialsSelected} from "../assets/socials_sel.svg"
import {useLocation, useNavigate} from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    function NavItem({page, Svg, SvgSel}) {
        const selected = location.pathname === `/${page}`;
        return (
            <div className="nav-item" onClick={() => navigate(`/${page}`)} id={page+"button"}>
                {selected ? <SvgSel/> : <Svg/>}
            </div>
        );
    }

    return (
        <div className={"navbar"}>
            <NavItem page="" Svg={Home} SvgSel={HomeSelected}/>
            <NavItem page="projects" Svg={Projects} SvgSel={ProjectsSelected}/>
            <NavItem page="resume" Svg={Resume} SvgSel={ResumeSelected}/>
            <NavItem page="socials" Svg={Socials} SvgSel={SocialsSelected}/>
        </div>
    );
}