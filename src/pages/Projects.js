import WidgetPanel from "../components/WidgetPanel";
import Widget from "../components/Widget";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as Hyperlink} from "../assets/hyperlink.svg"
import {useEffect, useState} from "react";
import ScrollToTop from "../components/ScrollToTop";
import {fetchCombinedRepos} from "../api/api";
import Loading from "../components/Loading";

export default function Projects() {
    const [reposHome, setReposHome] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCombinedRepos().then(data => {
            setReposHome(data);
            setLoading(false);
        });
    }, []);

    const navigate = useNavigate();
    return (<>
        <ScrollToTop/>
        <h1>Some of my personal projects</h1>
        {loading ? <Loading/> :
            <WidgetPanel children={reposHome.map(repo => (<Widget name={repo.name}
                                                                  link={repo.link}
                                                                  desc={repo.description}
                                                                  tags={repo.topics}
                                                                  last_comm={repo.lastCommitDate}
            />))}/>}
        <div className={"see-more-link-container"}>
            <a href={"https://github.com/1chappie"} target="_blank" rel="noopener noreferrer"
               className={"see-more-link"}>see more on my GitHub <Hyperlink/></a>
            or
            <p className={"see-more-link"} onClick={() => navigate("/resume")}>see my resume</p>
        </div>
    </>);
}