export interface BlockquoteProps {
  href: string;
  hrefText: string;
  linkText: string;
}

export function Blockquote({ href, hrefText, linkText }: BlockquoteProps) {
  return (
    <blockquote className="px-8 border-gray-300 relative before:absolute before:block before:content-['“'] before:text-4xl before:left-[-6px] before:top-[-14px]">
      <p className="text-base italic leading-relaxed ">
        {linkText}
        <br />
        <a
          href={href}
          className="underline text-white font-medium hover:text-indigo-900 hover:bg-yellow-400 mt-2 inline-block"
          download
        >
          - {hrefText}
        </a>
      </p>
    </blockquote>
  );
}

export default Blockquote;
