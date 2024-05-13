import { Link } from 'react-router-dom';
import logo from './images/cook.png';

export default function Footer() {
  return (
    <footer className='absolute w-full bottom-0 bg-gray-900 text-gray-400 py-4 md:py-4'>
      <div className='container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center'>
          <img src={logo} className='size-14' />
        </div>
        <nav className='flex items-center gap-4 md:gap-6'>
          <Link className='hover:text-gray-50 transition-colors' to='/privacy&policy'>
            Privacy & Policy
          </Link>
          <Link className='hover:text-gray-50 transition-colors' to='about'>
            About
          </Link>
          <Link className='hover:text-gray-50 transition-colors' to='/contact'>
            Contact
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <Link className='hover:text-gray-50 transition-colors' to='#'>
            <TwitterIcon className='w-5 h-5' />
          </Link>
          <Link className='hover:text-gray-50 transition-colors' to='#'>
            <FacebookIcon className='w-5 h-5' />
          </Link>
          <Link className='hover:text-gray-50 transition-colors' to='#'>
            <InstagramIcon className='w-5 h-5' />
          </Link>
          <Link className='hover:text-gray-50 transition-colors' to='#'>
            <LinkedinIcon className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect width='4' height='12' x='2' y='9' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
  );
}
