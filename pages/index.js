import Avatar from '../components/Home/Avatar';
import Skills from '../components/Home/Skills';
import Experiences from '../components/Home/Experiences';
import AboutMe from '../components/Home/AboutMe';
import TimeLine from '../components/Home/TimeLine';

function Home() {
  return (
    <>
      <Avatar />

      <div className="portfolio-resume grid-x">
        <div className="large-3 columns">
          <div className="portfolio-resume-wrapper">
            <Skills />
          </div>
        </div>

        <div className="large-6 columns">
          <Experiences />
        </div>

        <div className="large-3 columns">
          <AboutMe />
        </div>
      </div>
      <TimeLine />
    </>
  );
}

export default Home;
