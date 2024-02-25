import profileImage from '../assets/profile.png';
import resumePDF from '../assets/Cameron Strandberg - Software Engineer Resume copy.pdf';

export function App() {
  return (
    <div className="min-h-screen bg-[#150f1c] lato-regular p-5">
      <div className="mx-auto max-w-4xl min-h-screen flex text-white ">
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
          <div className="py-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
