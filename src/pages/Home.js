import WidgetPanel from "../components/WidgetPanel";
import Widget from "../components/Widget";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ScrollToTop from "../components/ScrollToTop";
import {fetchFeaturedRepos} from "../api/api";

function calculateAge() {
    // yes, this is overkill, yes, I'm aware
    const currentDate = new Date();
    let age = currentDate.getFullYear() - 2002;
    if (currentDate.getMonth() < 8) age--; // September is 8 (0-based index)
    return age;
}

export default function Home() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetchFeaturedRepos().then(data => {
            setRepos(data);
        });
    }, []);

    let navigate = useNavigate();
    return (
        <>
            <ScrollToTop/>
            <h1>Hi, I'm Ștefan</h1>
            <p>
                <b>&gt;&gt;&gt;&nbsp;</b> I also go by Tase, or "chappie" online. I'm a {calculateAge()} year old
                romanian student, mentor, and software developer with a strong passion for all things tech and
                with a curious mind that often wanders off into all sorts of topics.
                While I enjoy working on a wide range of technologies, there could be the case that
                a jack of all trades is a senior of none - even so, I'm highly dynamic and always eager
                to learn and improve.
            </p>
            <p>
                <b>&gt;&gt;&gt;&nbsp;</b> On this site, you'll find some of my personal projects,
                my resume, and links to my business socials.
                If you're interested in collaborating or have any questions,
                don't hesitate to reach out. Thanks for stopping by! :)
            </p>

            <h3>Stuff you should check out:</h3>
            <WidgetPanel children={
                repos.map(repo => (
                    <Widget key={repo.name}
                            name={repo.name}
                            link={repo.link}
                            desc={repo.description}
                            tags={repo.topics}
                            last_comm={repo.lastCommitDate}
                    />
                ))
            }/>
            <div className={"see-more-link-container"} onClick={() => navigate("/projects")}>
                <p className={"see-more-link"}>see more</p>
            </div>
        </>
    )
        ;
}