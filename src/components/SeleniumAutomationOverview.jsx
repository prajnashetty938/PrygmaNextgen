import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCartShopping, FaCertificate, FaCheck, FaChevronDown, FaClipboardCheck,
  FaClock, FaDesktop, FaFileArrowDown, FaGlobe, FaLaptop, FaPlay, FaUsers,
} from 'react-icons/fa6';
import './ManualTestingOverview.css';

const facts = [
  { icon: FaClock, title: '32 hrs', label: 'Total Duration' },
  { icon: FaPlay, title: 'Self-paced', label: 'Delivery Type' },
  { icon: FaGlobe, title: 'English', label: 'Language' },
  { icon: FaCertificate, title: 'Certificate', label: 'Included' },
];

const audiences = [
  { title: 'Students', description: 'Build a foundation in browser automation with Java.', color: 'students' },
  { title: 'Freshers', description: 'Practise writing automated checks for web applications.', color: 'freshers' },
  { title: 'Manual Testers', description: 'Take your testing skills into test automation.', color: 'manual-testers' },
  { title: 'Career Switchers', description: 'Follow a structured path into QA automation.', color: 'career-switchers' },
  { title: 'QA Professionals', description: 'Build maintainable Selenium tests for project work.', color: 'qa-professionals' },
];

const inclusions = [
  { title: 'Video lessons (on-demand)', detail: 'Learn Selenium and Java concepts at your own pace.' },
  { title: 'Downloadable code and resources', detail: 'Keep examples and practice materials for reference.' },
  { title: 'Quizzes and coding exercises', detail: 'Practise automation skills as you progress.' },
  { title: 'Certificate of completion', detail: 'Receive a certificate after successfully finishing the course.' },
];

const curriculum = [
  { title: 'Automation Testing Foundations', summary: 'Understand where automation fits into software testing.', lessons: ['Why automate tests?', 'Good candidates for automation', 'Overview of Selenium WebDriver'] },
  { title: 'Java Essentials for Test Automation', summary: 'Review the Java concepts used in test code.', lessons: ['Variables, data types and operators', 'Conditionals and loops', 'Methods, classes and objects'] },
  { title: 'Selenium WebDriver Setup', summary: 'Prepare a Java project and run your first browser test.', lessons: ['Project setup and dependencies', 'WebDriver and browser drivers', 'Launch and close a browser'] },
  { title: 'Locators and Web Elements', summary: 'Find and interact with elements on a page.', lessons: ['ID, name, CSS and XPath locators', 'Click, type and read values', 'Work with forms and links'] },
  { title: 'Waits, Alerts and Browser Controls', summary: 'Handle common browser behaviour reliably.', lessons: ['Implicit and explicit waits', 'Alerts, frames and windows', 'Navigation and browser options'] },
  { title: 'TestNG and Test Structure', summary: 'Organise browser checks into readable test cases.', lessons: ['TestNG annotations and assertions', 'Set up and tear down', 'Run tests and review results'] },
  { title: 'Page Object Model', summary: 'Separate page interactions from test steps.', lessons: ['Create page classes', 'Build reusable methods', 'Keep tests maintainable'] },
  { title: 'Practice Project and Next Steps', summary: 'Bring the tools together in a small automation project.', lessons: ['Automate a sample user journey', 'Run a test suite and review failures', 'Ideas for extending your project'] },
];

export default function SeleniumAutomationOverview({ course }) {
  const [openModules, setOpenModules] = useState([0]);
  const allModulesOpen = openModules.length === curriculum.length;
  const toggleModule = (index) => setOpenModules((current) => current.includes(index)
    ? current.filter((item) => item !== index)
    : [...current, index]);

  return (
    <div className="manual-detail-layout">
      <section className="manual-detail-overview" aria-labelledby="selenium-course-title">
        <div className="manual-detail-grid container-fluid row g-4 align-items-start">
          <div className="manual-detail-main col-12 col-md-7">
            <span className="manual-detail-level">{course.level}</span>
            <h1 id="selenium-course-title">{course.title}</h1>
            <p className="manual-detail-description">{course.description} Learn to build browser tests with Selenium WebDriver and Java, from your first automated check to a small maintainable test suite.</p>
            <div className="manual-detail-social-proof"><span>Hands-on practice <small>with browser tests</small></span><span><FaUsers aria-hidden="true" /> Learn at your own pace</span></div>
            <div className="manual-detail-facts row g-3">{facts.map(({ icon: Icon, title, label }) => <div className="manual-detail-fact col-6 col-sm-3" key={label}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{label}</small></span></div>)}</div>
            <div className="manual-detail-people row align-items-center gy-3"><div className="manual-detail-instructor col-12 col-sm-7"><span className="manual-course-audience-icon"><FaUsers aria-hidden="true" /></span><div><strong>Course Instructor</strong><span>Selenium Automation Trainer</span><Link to="/instructor-profile">View Profile <span aria-hidden="true">→</span></Link></div></div><div className="manual-detail-updated col-12 col-sm-5"><FaCertificate aria-hidden="true" /><span><small>Course format</small><strong>On-demand</strong></span></div></div>
          </div>
          <aside className="manual-detail-purchase col-12 col-md-5" aria-label={`Enroll in ${course.title}`}>
            <div className="manual-detail-preview" role="img" aria-label="Course preview: Selenium automation with Java" style={{ backgroundImage: `url(https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=900&q=85)` }}><span className="manual-detail-play"><FaPlay aria-hidden="true" /></span><span className="manual-detail-preview-caption">Preview this course</span></div>
            <div className="manual-detail-price-row"><del>{course.oldPrice}</del><strong>{course.price}</strong><span>{course.discount}</span></div><p className="manual-detail-offer">Save 50% on the course</p>
            <div className="manual-detail-actions"><Link className="manual-detail-enroll" to="/register"><FaCartShopping aria-hidden="true" /> Enroll Now</Link><Link className="manual-detail-add-cart" to="/register"><FaCartShopping aria-hidden="true" /> Add to Cart</Link></div>
          </aside>
        </div>
      </section>
      <section className="manual-course-about-section">
        <div className="manual-course-about-container container-fluid"><div className="row g-4"><div className="manual-course-about col-12 col-md-7">
          <h2>About this course</h2><p>Learn a practical workflow for automating browser checks with Selenium WebDriver and Java. Set up a project, interact with web pages, organise test cases, and practise patterns that help keep a test suite clear and maintainable.</p>
          <div className="manual-course-about-learn"><h3>What you’ll learn</h3><ul><li><FaCheck aria-hidden="true" /> Use core Java concepts in test code</li><li><FaCheck aria-hidden="true" /> Locate and interact with page elements</li><li><FaCheck aria-hidden="true" /> Handle waits and common browser states</li><li><FaCheck aria-hidden="true" /> Structure test cases with TestNG</li><li><FaCheck aria-hidden="true" /> Apply the Page Object Model to a practice project</li></ul></div>
        </div></div></div>
        <div className="manual-course-audience-container container-fluid"><h2>Who is this course for?</h2><p>This course is for learners ready to build practical browser automation skills using Java and Selenium.</p><div className="row g-3">{audiences.map(({ title, description, color }) => <div className="col-6 col-md-4 col-lg" key={title}><article className={`manual-course-audience-card audience-${color}`}><span className="manual-course-audience-icon"><FaUsers aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article></div>)}</div></div>
        <div className="manual-course-included-container container-fluid"><h2>What’s included</h2><div className="manual-course-included-panel"><ul className="manual-course-included-list">{inclusions.map(({ title, detail }) => <li key={title}><span className="manual-course-included-check"><FaCheck aria-hidden="true" /></span><span className="manual-course-included-copy"><strong>{title}</strong><small>{detail}</small></span></li>)}</ul><div className="manual-course-included-art" aria-hidden="true"><span className="manual-included-orb" /><div className="manual-included-screen"><FaDesktop /><span><FaPlay /></span></div><div className="manual-included-certificate"><FaFileArrowDown /><FaCertificate /></div><FaLaptop className="manual-included-laptop" /><FaClipboardCheck className="manual-included-clipboard" /></div></div></div>
        <section className="manual-course-curriculum-container container-fluid" aria-labelledby="selenium-course-curriculum-title"><div className="manual-course-curriculum-heading"><div><h2 id="selenium-course-curriculum-title">Course Curriculum</h2><p>Explore the complete syllabus of this course</p></div><button type="button" onClick={() => setOpenModules(allModulesOpen ? [] : curriculum.map((_, index) => index))} aria-expanded={allModulesOpen}>{allModulesOpen ? 'Collapse All' : 'Expand All'}</button></div>
          <ol className="manual-course-curriculum-list">{curriculum.map(({ title, summary, lessons }, index) => { const isOpen = openModules.includes(index); const moduleId = `selenium-course-module-${index + 1}`; return <li className={`manual-course-module${isOpen ? ' is-open' : ''}`} key={title}><span className="manual-course-module-number" aria-hidden="true">{index + 1}</span><div className="manual-course-module-card"><button type="button" className="manual-course-module-toggle" aria-expanded={isOpen} aria-controls={moduleId} onClick={() => toggleModule(index)}><span><strong>{title}</strong><small>{summary}</small></span><FaChevronDown aria-hidden="true" /></button>{isOpen && <ol className="manual-course-module-lessons" id={moduleId}>{lessons.map((lesson, lessonIndex) => <li key={lesson}><span>{index + 1}.{lessonIndex + 1}</span><span>{lesson}</span></li>)}</ol>}</div></li>; })}</ol>
        </section>
      </section>
    </div>
  );
}
