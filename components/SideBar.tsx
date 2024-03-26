import React from 'react';
import Image from 'next/image';

export function SiderBar() {
  return (
    <div className="w-1/4 p-2">
      <Image
        unoptimized
        src={'/assets/profile.png'}
        height="200"
        width="200"
        alt="profile image, very handsome."
        className="rounded-full border-4 border-white-500"
      />
    </div>
  );
}
