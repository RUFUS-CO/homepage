import profileImage from '../assets/profile.png';
import resumePDF from '../assets/Cameron Strandberg - Software Engineer Resume copy.pdf';

export function App() {
  return (
    <div className="min-h-screen bg-[#150f1c] lato-regular p-5">
      <div className="mx-auto max-w-5xl min-h-screen flex text-white ">
        <div className="w-1/4 p-2">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-full border-4 border-white-500"
          />
        </div>
        {/* w-1/4 sets the width to 25% of the parent */}
        <div className="w-3/4 p-4">
          <div className="py-4">
            <h1 className="text-xl">
              <span role="img" aria-label="hand-wave emoji">
                👋
              </span>{' '}
              Hi! I'm Cameron.
            </h1>
          </div>
          <div className="py-4">
            <p className="text-base">I build awesome software.</p>
          </div>
          <div className="py-4">
            <p className="text-base">
              For enquires,{' '}
              <a
                href="https://calendly.com/cameron-strandberg"
                className="underline text-yellow-300 font-bold hover:text-indigo-900 hover:bg-yellow-400"
              >
                please book something on my calendar.
              </a>
              <br />
              or email me at{' '}
              <strong>cameron.strandberg[at]gmail[dot]com</strong>
            </p>
          </div>

          <div className="py-4">
            <p className="text-base">
              Here is my{' '}
              <a
                href={resumePDF}
                className="underline text-yellow-300 font-bold hover:text-indigo-900 hover:bg-yellow-400"
                download
              >
                resume
              </a>
              .
            </p>
          </div>
          <div className="py-4">
            <blockquote className="px-8 border-gray-300 relative before:absolute before:block before:content-['“'] before:text-4xl before:left-[-6px] before:top-[-14px]">
              <p className="text-base italic font-medium leading-relaxed ">
                Cameron is just awesome. His work has that attention to detail
                and craft that really shines.
                <br />
                <a
                  href={resumePDF}
                  className="underline text-white font-bold hover:text-indigo-900 hover:bg-yellow-400 mt-4 inline-block"
                  download
                >
                  - former project manager
                </a>
              </p>
            </blockquote>
          </div>
          <div className="py-4">
            <blockquote className="px-8 border-gray-300 relative before:absolute before:block before:content-['“'] before:text-4xl before:left-[-6px] before:top-[-14px]">
              <p className="text-base italic font-medium leading-relaxed ">
                Cameron's work on our text editor has been outstanding in making
                it performant, accessible, well tested and beautiful to use.
                <br />
                <a
                  href={resumePDF}
                  className="underline text-white font-bold hover:text-indigo-900 hover:bg-yellow-400 mt-4 inline-block"
                  download
                >
                  - former lead engineer
                </a>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
