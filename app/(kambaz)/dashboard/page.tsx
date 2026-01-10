import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4530" className="wd-dashboard-course-link">
            <Image
              src="/images/softwareengineering.jpg"
              width={200}
              height={150}
              alt="softwareengineering"
            />
            <div>
              <h5> CS4530 Fundamentals of Software Engineering </h5>
              <p className="wd-dashboard-course-title">Join an agile team</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3000" className="wd-dashboard-course-link">
            <Image
              src="/images/algorithms.jpg"
              width={200}
              height={150}
              alt="algorithms"
            />
            <div>
              <h5> CS3000 Algorithms & Data </h5>
              <p className="wd-dashboard-course-title">
                Learn computer algorithms and data structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3200" className="wd-dashboard-course-link">
            <Image
              src="/images/databasedesign.jpg"
              width={200}
              height={150}
              alt="databasedesign"
            />
            <div>
              <h5> CS3000 Database Design </h5>
              <p className="wd-dashboard-course-title">
                Learn SQL and database design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4700" className="wd-dashboard-course-link">
            <Image
              src="/images/networks.jpg"
              width={200}
              height={150}
              alt="networks"
            />
            <div>
              <h5> CS4700 Networks </h5>
              <p className="wd-dashboard-course-title">
                Learn network fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/4550" className="wd-dashboard-course-link">
            <Image
              src="/images/webdev.jpg"
              width={200}
              height={150}
              alt="webdev"
            />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">Learn web development</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3500" className="wd-dashboard-course-link">
            <Image src="/images/ood.jpg" width={200} height={150} alt="ood" />
            <div>
              <h5> CS3500 Object Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Learn object oriented programming and design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
