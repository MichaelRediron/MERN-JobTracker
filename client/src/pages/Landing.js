import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>application</span> tracking
          </h1>
          <p>
            Welcome to Job Tracker! Are you tired of losing track of your job
            applications and the results? Job Tracker is here to help. With this
            tool, you can easily input information about each job you apply for,
            including the company, position, and application status. You can
            also view statistical information about your job search, including
            the number of jobs applications pending, the number of job
            applications declined, and the number of interviews scheduled.
            Whether you're just starting your job search or have been looking
            for a while, Job Tracker is a valuable resource for organizing and
            managing your search. Register now to get started!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunting' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
