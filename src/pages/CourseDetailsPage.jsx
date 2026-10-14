import { FaCartShopping, FaClock } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManualTestingOverview from '../components/ManualTestingOverview';
import ApiTestingOverview from '../components/ApiTestingOverview';
import SeleniumAutomationOverview from '../components/SeleniumAutomationOverview';
import PlaywrightOverview from '../components/PlaywrightOverview';
import courses from '../data/courses';
import './CourseDetailsPage.css';

function CourseBreadcrumb({ course }) {
  return (
    <nav className="course-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li aria-current="page">{course.title}</li>
      </ol>
    </nav>
  );
}

export default function CourseDetailsPage() {
  const { courseSlug } = useParams();
  const course = courses.find((item) => item.slug === courseSlug?.toLowerCase());
  const isManualTesting = course?.slug === 'manual-testing-fundamentals';
  const isApiTesting = course?.slug === 'api-testing-with-postman';
  const isSeleniumAutomation = course?.slug === 'selenium-automation-with-java';
  const isPlaywright = course?.slug === 'playwright-with-typescript';

  if (isManualTesting) {
    return (
      <div className="manual-course-layout">
        <Header />
        <main className="manual-course-page">
          <CourseBreadcrumb course={course} />
          <ManualTestingOverview course={course} />
        </main>
        <Footer />
      </div>
    );
  }

  if (isApiTesting) {
    return (
      <div className="manual-course-layout">
        <Header />
        <main className="manual-course-page">
          <CourseBreadcrumb course={course} />
          <ApiTestingOverview course={course} />
        </main>
        <Footer />
      </div>
    );
  }

  if (isSeleniumAutomation) {
    return (
      <div className="manual-course-layout">
        <Header />
        <main className="manual-course-page">
          <CourseBreadcrumb course={course} />
          <SeleniumAutomationOverview course={course} />
        </main>
        <Footer />
      </div>
    );
  }

  if (isPlaywright) {
    return (
      <div className="manual-course-layout">
        <Header />
        <main className="manual-course-page">
          <CourseBreadcrumb course={course} />
          <PlaywrightOverview course={course} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="course-details-page">
      <Header />
      <main className={`course-details-main${isManualTesting ? ' manual-course-main' : ''}`}>
        <div className="course-details-container">
          {course ? (
            <>
            <CourseBreadcrumb course={course} />
            <article className="course-details-card">
              <div
                className="course-details-image"
                role="img"
                aria-label={`${course.title} course`}
                style={{ backgroundImage: `url(https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=1400&q=90)` }}
              />
              <div className="course-details-content">
                <p className="course-details-academy">{course.academy}</p>
                <h1>{course.title}</h1>
                <p className="course-details-description">{course.description}</p>
                <div className="course-details-meta">
                  <span><FaClock aria-hidden="true" /> {course.duration}</span>
                  <span className={`course-level-badge level-${course.level.toLowerCase()}`}>{course.level}</span>
                </div>
                <div className="course-details-purchase">
                  <div className="course-details-price">
                    <strong>{course.price}</strong>
                    <del>{course.oldPrice}</del>
                    <span>{course.discount}</span>
                  </div>
                  <p>One-time payment · Certificate included</p>
                  <Link className="course-details-enroll" to="/register"><FaCartShopping aria-hidden="true" /> Enroll Now</Link>
                </div>
              </div>
            </article>
            </>
          ) : (
            <div className="course-details-not-found">
              <h1>Course not found</h1>
              <p>That course may have moved. Browse the current courses to find what you need.</p>
              <Link to="/courses">Browse courses</Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
