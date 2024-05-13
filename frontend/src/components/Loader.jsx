import { LoaderCircle } from 'lucide-react';
import React from 'react';

export default function Loader() {
  return (
    <div>
      <LoaderCircle className='animate-spin' />
    </div>
  );
}
