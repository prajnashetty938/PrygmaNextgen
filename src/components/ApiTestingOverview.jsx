import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCartShopping, FaCertificate, FaCheck, FaChevronDown, FaClipboardCheck,
  FaClock, FaDesktop, FaFileArrowDown, FaGlobe, FaLaptop, FaPlay,
  FaUser, FaUsers,
} from 'react-icons/fa6';
import './ManualTestingOverview.css';

const courseFacts = [
  { icon: FaClock, title: '18 hrs', label: 'Total Duration' },
  { icon: FaPlay, title: 'Self-paced', label: 'Delivery Type' },
  { icon: FaGlobe, title: 'English', label: 'Language' },
  { icon: FaCertificate, title: 'Certificate', label: 'Included' },
];

const audiences = [
  { title: 'Students', description: 'Build practical API testing skills for your QA journey.', color: 'students' },
  { title: 'Freshers', description: 'Get hands-on practice with requests and responses.', color: 'freshers' },
  { title: 'Manual Testers', description: 'Add API checks to your existing testing toolkit.', color: 'manual-testers' },
  { title: 'Career Switchers', description: 'Learn a practical skill used by modern QA teams.', color: 'career-switchers' },
  { title: 'QA Professionals', description: 'Build confidence testing services and integrations.', color: 'qa-professionals' },
];

const inclusions = [
  { title: 'Video lessons (on-demand)', detail: 'Learn Postman workflows at your own pace.' },
  { title: 'Downloadable resources and collections', detail: 'Keep practice requests and reference materials close by.' },
  { title: 'Quizzes and API exercises', detail: 'Apply each concept with hands-on practice.' },
  { title: 'Certificate of completion', detail: 'Receive a certificate after successfully finishing the course.' },
];

const curriculum = [
  { title: 'API Testing Foundations', summary: 'Learn what APIs do and where testing fits in a project.', lessons: ['What is an API?', 'How clients and servers communicate', 'API testing in the development lifecycle'] },
  { title: 'Getting Started with Postman', summary: 'Set up Postman and explore its key features.', lessons: ['Postman workspace tour', 'Create and organise requests', 'Send your first API request'] },
  { title: 'HTTP Methods and Status Codes', summary: 'Work with common methods and interpret API responses.', lessons: ['GET, POST, PUT, PATCH and DELETE', 'Status codes and response headers', 'Request and response body formats'] },
  { title: 'Parameters, Headers and Authentication', summary: 'Configure requests for realistic API scenarios.', lessons: ['Path and query parameters', 'Headers and content types', 'Authentication basics'] },
  { title: 'Environments and Variables', summary: 'Reuse requests across environments with variables.', lessons: ['Create an environment', 'Use variables in requests', 'Switch between environments'] },
  { title: 'Validating API Responses', summary: 'Check response data and write reusable assertions.', lessons: ['Inspect JSON responses', 'Write basic Postman tests', 'Validate status, fields and response time'] },
  { title: 'Collections and Automation', summary: 'Organise requests and run a sequence of checks.', lessons: ['Build a collection', 'Run a collection with the Collection Runner', 'Use data files for repeatable runs'] },
  { title: 'Practice Project and Next Steps', summary: 'Bring the skills together with a small API testing project.', lessons: ['Plan checks for a sample API', 'Run and review a test collection', 'Export and share your work'] },
];

export default function ApiTestingOverview({ course }) {
  const [openModules, setOpenModules] = useState([0]);
  const allModulesOpen = openModules.length === curriculum.length;
  const toggleModule = (index) => setOpenModules((current) => current.includes(index)
    ? current.filter((item) => item !== index)
    : [...current, index]);

  return (
    <div className="manual-detail-layout">
      <section className="manual-detail-overview" aria-labelledby="api-course-title">
        <div className="manual-detail-grid container-fluid row g-4 align-items-start">
          <div className="manual-detail-main col-12 col-md-7">
            <span className="manual-detail-level">{course.level}</span>
            <h1 id="api-course-title">{course.title}</h1>
            <p className="manual-detail-description">{course.description} Learn to build requests, inspect responses, and create repeatable API checks in Postman.</p>
            <div className="manual-detail-social-proof">
              <span>Hands-on practice <small>with sample APIs</small></span>
              <span><FaUsers aria-hidden="true" /> Learn at your own pace</span>
            </div>
            <div className="manual-detail-facts row g-3">
              {courseFacts.map(({ icon: Icon, title, label }) => <div className="manual-detail-fact col-6 col-sm-3" key={label}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{label}</small></span></div>)}
            </div>
            <div className="manual-detail-people row align-items-center gy-3">
              <div className="manual-detail-instructor col-12 col-sm-7">
                <div className="manual-course-audience-icon"><FaUser aria-hidden="true" /></div>
                <div><strong>Course Instructor</strong><span>API Testing Trainer</span><Link to="/instructor-profile">View Profile <span aria-hidden="true">→</span></Link></div>
              </div>
              <div className="manual-detail-updated col-12 col-sm-5"><FaCertificate aria-hidden="true" /><span><small>Course format</small><strong>On-demand</strong></span></div>
            </div>
          </div>
          <aside className="manual-detail-purchase col-12 col-md-5" aria-label={`Enroll in ${course.title}`}>
            <div className="manual-detail-preview" role="img" aria-label="Course preview: API testing with Postman" style={{ backgroundImage: `url(https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=900&q=85)` }}><span className="manual-detail-play"><FaPlay aria-hidden="true" /></span><span className="manual-detail-preview-caption">Preview this course</span></div>
            <div className="manual-detail-price-row"><del>{course.oldPrice}</del><strong>{course.price}</strong><span>{course.discount}</span></div>
            <p className="manual-detail-offer">Save 50% on the course</p>
            <div className="manual-detail-actions"><Link className="manual-detail-enroll" to="/register"><FaCartShopping aria-hidden="true" /> Enroll Now</Link><Link className="manual-detail-add-cart" to="/register"><FaCartShopping aria-hidden="true" /> Add to Cart</Link></div>
          </aside>
        </div>
      </section>
      <section className="manual-course-about-section">
        <div className="manual-course-about-container container-fluid"><div className="row g-4"><div className="manual-course-about col-12 col-md-7">
          <h2>About this course</h2>
          <p>Explore API testing from the ground up using Postman. Work through requests and responses, organise your checks into collections, and practise validating API behaviour with clear, repeatable tests.</p>
          <div className="manual-course-about-learn"><h3>What you’ll learn</h3><ul>
            <li><FaCheck aria-hidden="true" /> Send requests using common HTTP methods</li><li><FaCheck aria-hidden="true" /> Work with headers, parameters, and authentication</li><li><FaCheck aria-hidden="true" /> Use environments and variables in Postman</li><li><FaCheck aria-hidden="true" /> Validate response data with Postman tests</li><li><FaCheck aria-hidden="true" /> Organise and run reusable API collections</li>
          </ul></div>
        </div></div></div>
        <div className="manual-course-audience-container container-fluid"><h2>Who is this course for?</h2><p>A practical starting point for learners who want to understand APIs and use Postman to test them.</p><div className="row g-3">{audiences.map(({ title, description, color }) => <div className="col-6 col-md-4 col-lg" key={title}><article className={`manual-course-audience-card audience-${color}`}><span className="manual-course-audience-icon"><FaUsers aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article></div>)}</div></div>
        <div className="manual-course-included-container container-fluid"><h2>What’s included</h2><div className="manual-course-included-panel"><ul className="manual-course-included-list">{inclusions.map(({ title, detail }) => <li key={title}><span className="manual-course-included-check"><FaCheck aria-hidden="true" /></span><span className="manual-course-included-copy"><strong>{title}</strong><small>{detail}</small></span></li>)}</ul><div className="manual-course-included-art" aria-hidden="true"><span className="manual-included-orb" /><div className="manual-included-screen"><FaDesktop /><span><FaPlay /></span></div><div className="manual-included-certificate"><FaFileArrowDown /><FaCertificate /></div><FaLaptop className="manual-included-laptop" /><FaClipboardCheck className="manual-included-clipboard" /></div></div></div>
        <section className="manual-course-curriculum-container container-fluid" aria-labelledby="api-course-curriculum-title"><div className="manual-course-curriculum-heading"><div><h2 id="api-course-curriculum-title">Course Curriculum</h2><p>Explore the complete syllabus of this course</p></div><button type="button" onClick={() => setOpenModules(allModulesOpen ? [] : curriculum.map((_, index) => index))} aria-expanded={allModulesOpen}>{allModulesOpen ? 'Collapse All' : 'Expand All'}</button></div>
          <ol className="manual-course-curriculum-list">{curriculum.map(({ title, summary, lessons }, index) => { const isOpen = openModules.includes(index); const moduleId = `api-course-module-${index + 1}`; return <li className={`manual-course-module${isOpen ? ' is-open' : ''}`} key={title}><span className="manual-course-module-number" aria-hidden="true">{index + 1}</span><div className="manual-course-module-card"><button type="button" className="manual-course-module-toggle" aria-expanded={isOpen} aria-controls={moduleId} onClick={() => toggleModule(index)}><span><strong>{title}</strong><small>{summary}</small></span><FaChevronDown aria-hidden="true" /></button>{isOpen && <ol className="manual-course-module-lessons" id={moduleId}>{lessons.map((lesson, lessonIndex) => <li key={lesson}><span>{index + 1}.{lessonIndex + 1}</span><span>{lesson}</span></li>)}</ol>}</div></li>; })}</ol>
        </section>
      </section>
    </div>
  );
}
