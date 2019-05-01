import Avatar from '../components/Home/Avatar';
import Skills from '../components/Home/Skills';
import Experiences from '../components/Home/Experiences';
import AboutMe from '../components/Home/AboutMe';
import TimeLine from '../components/Home/TimeLine';

function Home() {
  return (
    <>
      <div className="portfolio-resume grid-x">
        <div className="large-4 columns">
          <div className="portfolio-resume-wrapper">
            <Avatar />
            <Skills />
          </div>
        </div>

        <div className="large-4 columns">
          <Experiences />
        </div>

        <div className="large-4 columns">
          <AboutMe />
        </div>
      </div>
      <TimeLine />
    </>
  );
}

export default Home;
