import React from 'react';
import getPostMetadata from '@/utils/getPostMetaData';
import { Blockquote } from '@/components/BlockQuote';
import Link from 'next/link';

export default function Home() {
  const postMetadata = getPostMetadata('posts');

  console.log(postMetadata);

  return (
    <>
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
          or email me at <strong>cameron.strandberg[at]gmail[dot]com</strong>
        </p>
      </div>

      <div className="py-4">
        <p className="text-base">
          Here is my{' '}
          <Link
            href={
              '/assets/Cameron Strandberg - Software Engineer Resume copy.pdf'
            }
            className="underline text-yellow-300 font-bold hover:text-indigo-900 hover:bg-yellow-400"
            download
          >
            resume
          </Link>
          .
        </p>
      </div>
      <div className="py-4">
        <Blockquote
          href={
            '/assets/Cameron Strandberg - Software Engineer Resume copy.pdf'
          }
          hrefText={'former project manager'}
          linkText={
            'Cameron is just awesome. His work has that attention to detail and craft that really shines.'
          }
        />
      </div>
      <div className="py-4">
        <Blockquote
          href={
            '@/assets/Cameron Strandberg - Software Engineer Resume copy.pdf'
          }
          hrefText={'former lead engineer'}
          linkText={
            'Camerons work on our text editor has been outstanding in making it performant, accessible, well tested and beautiful to use and look at.'
          }
        />
      </div>
    </>
  );
}
