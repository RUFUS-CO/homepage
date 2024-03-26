import React from 'react';

export function Footer() {
  return (
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
  );
}
