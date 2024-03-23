import { Blockquote } from './components/BlockQuote';
import profileImage from './assets/profile.png';
import resumePDF from './assets/Cameron Strandberg - Software Engineer Resume copy.pdf';

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#150f1c] lato-regular p-5">
      <div className="mx-auto max-w-5xl flex-grow text-white ">
        <div className="flex">
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
                Hi! I'm Cam.
              </h1>
            </div>
            <div className="py-4">
              <p className="text-base">I build software.</p>
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
              <Blockquote
                href={resumePDF}
                hrefText={'former project manager'}
                linkText={
                  'Cameron is just awesome. His work has that attention to detail and craft that really shines.'
                }
              />
            </div>
            <div className="py-4">
              <Blockquote
                href={resumePDF}
                hrefText={'former lead engineer'}
                linkText={
                  'Camerons work on our text editor has been outstanding in making it performant, accessible, well tested and beautiful to use and look at.'
                }
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="text-white">
        <div className="mx-auto flex">
          <ul className="flex space-x-2">
            <li className="mr-4">
              <a
                href="https://github.com/eggsandbeer"
                className="hover:bg-yellow-400 hover:text-indigo-900 text-sm"
              >
                Github
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/cameron-strandberg-603a906/"
                className="hover:bg-yellow-400 hover:text-indigo-900 text-sm"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
