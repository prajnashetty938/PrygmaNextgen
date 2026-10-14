import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCartShopping, FaCertificate, FaCheck, FaChevronDown, FaClipboardCheck,
  FaClock, FaDesktop, FaFileArrowDown, FaGlobe, FaLaptop, FaPlay, FaUsers,
} from 'react-icons/fa6';
import './ManualTestingOverview.css';

const facts = [
  { icon: FaClock, title: '26 hrs', label: 'Total Duration' },
  { icon: FaPlay, title: 'Self-paced', label: 'Delivery Type' },
  { icon: FaGlobe, title: 'English', label: 'Language' },
  { icon: FaCertificate, title: 'Certificate', label: 'Included' },
];

const audiences = [
  { title: 'Students', description: 'Build modern browser automation skills with TypeScript.', color: 'students' },
  { title: 'Freshers', description: 'Practise creating reliable end-to-end browser tests.', color: 'freshers' },
  { title: 'Manual Testers', description: 'Extend your testing skills with browser automation.', color: 'manual-testers' },
  { title: 'Career Switchers', description: 'Follow a guided path into test automation.', color: 'career-switchers' },
  { title: 'QA Professionals', description: 'Create maintainable Playwright tests for web apps.', color: 'qa-professionals' },
];

const inclusions = [
  { title: 'Video lessons (on-demand)', detail: 'Learn Playwright and TypeScript at your own pace.' },
  { title: 'Downloadable code and resources', detail: 'Keep examples and practice materials for reference.' },
  { title: 'Quizzes and coding exercises', detail: 'Apply each concept with hands-on practice.' },
  { title: 'Certificate of completion', detail: 'Receive a certificate after successfully finishing the course.' },
];

const curriculum = [
  { title: 'Browser Automation Foundations', summary: 'Understand end-to-end testing and Playwright’s approach.', lessons: ['What is browser automation?', 'When to use end-to-end tests', 'Playwright overview'] },
  { title: 'TypeScript Essentials', summary: 'Review the TypeScript needed to write clear tests.', lessons: ['Types, variables and functions', 'Objects, arrays and interfaces', 'Async and await'] },
  { title: 'Playwright Project Setup', summary: 'Create a test project and run your first browser check.', lessons: ['Install Playwright', 'Project and configuration files', 'Run tests in a browser'] },
  { title: 'Locators and Page Interactions', summary: 'Find page elements and interact with them reliably.', lessons: ['Role and text locators', 'Fill forms and click controls', 'Assertions for page content'] },
  { title: 'Navigation and Browser Contexts', summary: 'Work with pages, browser contexts, and common workflows.', lessons: ['Navigate between pages', 'Isolated browser contexts', 'Tabs, dialogs and downloads'] },
  { title: 'Fixtures and Test Organisation', summary: 'Structure test files and share setup cleanly.', lessons: ['Test and expect APIs', 'Fixtures and hooks', 'Organise suites and tags'] },
  { title: 'Debugging and Reports', summary: 'Investigate failures and understand test results.', lessons: ['Debug with the Playwright Inspector', 'Screenshots and traces', 'Review HTML test reports'] },
  { title: 'Practice Project and Next Steps', summary: 'Bring the skills together in a small web testing project.', lessons: ['Plan a user journey to test', 'Write and run an end-to-end suite', 'Extend and maintain the project'] },
];

export default function PlaywrightOverview({ course }) {
  const [openModules, setOpenModules] = useState([0]);
  const allModulesOpen = openModules.length === curriculum.length;
  const toggleModule = (index) => setOpenModules((current) => current.includes(index)
    ? current.filter((item) => item !== index)
    : [...current, index]);

  return (
    <div className="manual-detail-layout">
      <section className="manual-detail-overview" aria-labelledby="playwright-course-title">
        <div className="manual-detail-grid container-fluid row g-4 align-items-start">
          <div className="manual-detail-main col-12 col-md-7">
            <span className="manual-detail-level">{course.level}</span>
            <h1 id="playwright-course-title">{course.title}</h1>
            <p className="manual-detail-description">{course.description} Learn to build browser tests with Playwright and TypeScript, from your first test to a maintainable end-to-end suite.</p>
            <div className="manual-detail-social-proof"><span>Hands-on practice <small>with browser tests</small></span><span><FaUsers aria-hidden="true" /> Learn at your own pace</span></div>
            <div className="manual-detail-facts row g-3">{facts.map(({ icon: Icon, title, label }) => <div className="manual-detail-fact col-6 col-sm-3" key={label}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{label}</small></span></div>)}</div>
            <div className="manual-detail-people row align-items-center gy-3"><div className="manual-detail-instructor col-12 col-sm-7"><span className="manual-course-audience-icon"><FaUsers aria-hidden="true" /></span><div><strong>Course Instructor</strong><span>Playwright Automation Trainer</span><Link to="/instructor-profile">View Profile <span aria-hidden="true">→</span></Link></div></div><div className="manual-detail-updated col-12 col-sm-5"><FaCertificate aria-hidden="true" /><span><small>Course format</small><strong>On-demand</strong></span></div></div>
          </div>
          <aside className="manual-detail-purchase col-12 col-md-5" aria-label={`Enroll in ${course.title}`}>
            <div className="manual-detail-preview" role="img" aria-label="Course preview: Playwright with TypeScript" style={{ backgroundImage: `url(https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=900&q=85)` }}><span className="manual-detail-play"><FaPlay aria-hidden="true" /></span><span className="manual-detail-preview-caption">Preview this course</span></div>
            <div className="manual-detail-price-row"><del>{course.oldPrice}</del><strong>{course.price}</strong><span>{course.discount}</span></div><p className="manual-detail-offer">Save 50% on the course</p>
            <div className="manual-detail-actions"><Link className="manual-detail-enroll" to="/register"><FaCartShopping aria-hidden="true" /> Enroll Now</Link><Link className="manual-detail-add-cart" to="/register"><FaCartShopping aria-hidden="true" /> Add to Cart</Link></div>
          </aside>
        </div>
      </section>
      <section className="manual-course-about-section">
        <div className="manual-course-about-container container-fluid"><div className="row g-4"><div className="manual-course-about col-12 col-md-7">
          <h2>About this course</h2><p>Learn to create end-to-end browser tests with Playwright and TypeScript. Set up a project, interact with web pages, organise your test suite, and practise debugging failures with useful reports and traces.</p>
          <div className="manual-course-about-learn"><h3>What you’ll learn</h3><ul><li><FaCheck aria-hidden="true" /> Use TypeScript to write clear test code</li><li><FaCheck aria-hidden="true" /> Locate and interact with page elements</li><li><FaCheck aria-hidden="true" /> Organise tests with Playwright fixtures</li><li><FaCheck aria-hidden="true" /> Debug failures with traces and reports</li><li><FaCheck aria-hidden="true" /> Build a maintainable end-to-end test suite</li></ul></div>
        </div></div></div>
        <div className="manual-course-audience-container container-fluid"><h2>Who is this course for?</h2><p>This course is for learners ready to build practical browser automation skills with Playwright and TypeScript.</p><div className="row g-3">{audiences.map(({ title, description, color }) => <div className="col-6 col-md-4 col-lg" key={title}><article className={`manual-course-audience-card audience-${color}`}><span className="manual-course-audience-icon"><FaUsers aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article></div>)}</div></div>
        <div className="manual-course-included-container container-fluid"><h2>What’s included</h2><div className="manual-course-included-panel"><ul className="manual-course-included-list">{inclusions.map(({ title, detail }) => <li key={title}><span className="manual-course-included-check"><FaCheck aria-hidden="true" /></span><span className="manual-course-included-copy"><strong>{title}</strong><small>{detail}</small></span></li>)}</ul><div className="manual-course-included-art" aria-hidden="true"><span className="manual-included-orb" /><div className="manual-included-screen"><FaDesktop /><span><FaPlay /></span></div><div className="manual-included-certificate"><FaFileArrowDown /><FaCertificate /></div><FaLaptop className="manual-included-laptop" /><FaClipboardCheck className="manual-included-clipboard" /></div></div></div>
        <section className="manual-course-curriculum-container container-fluid" aria-labelledby="playwright-course-curriculum-title"><div className="manual-course-curriculum-heading"><div><h2 id="playwright-course-curriculum-title">Course Curriculum</h2><p>Explore the complete syllabus of this course</p></div><button type="button" onClick={() => setOpenModules(allModulesOpen ? [] : curriculum.map((_, index) => index))} aria-expanded={allModulesOpen}>{allModulesOpen ? 'Collapse All' : 'Expand All'}</button></div>
          <ol className="manual-course-curriculum-list">{curriculum.map(({ title, summary, lessons }, index) => { const isOpen = openModules.includes(index); const moduleId = `playwright-course-module-${index + 1}`; return <li className={`manual-course-module${isOpen ? ' is-open' : ''}`} key={title}><span className="manual-course-module-number" aria-hidden="true">{index + 1}</span><div className="manual-course-module-card"><button type="button" className="manual-course-module-toggle" aria-expanded={isOpen} aria-controls={moduleId} onClick={() => toggleModule(index)}><span><strong>{title}</strong><small>{summary}</small></span><FaChevronDown aria-hidden="true" /></button>{isOpen && <ol className="manual-course-module-lessons" id={moduleId}>{lessons.map((lesson, lessonIndex) => <li key={lesson}><span>{index + 1}.{lessonIndex + 1}</span><span>{lesson}</span></li>)}</ol>}</div></li>; })}</ol>
        </section>
      </section>
    </div>
  );
}
