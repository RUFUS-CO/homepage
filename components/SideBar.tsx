import React from 'react';
import Image from 'next/image';

export function SiderBar() {
  return (
    <div className="w-1/4 p-2">
      <Image
        src={'/assets/profile.png'}
        height={400}
        width={400}
        alt="profile image, very handsome."
        className="rounded-full border-4 border-white-500"
      />
    </div>
  );
}
