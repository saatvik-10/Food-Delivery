import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { SheetTrigger, SheetContent, Sheet } from './ui/sheet';
import logo from './images/cook.png';
import { LogIn, ShoppingBag } from 'lucide-react';

export default function Component() {
  return (
    <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
      <Link className='flex items-center gap-1' to='/'>
        <img src={logo} className='size-14' />
        <span className='text-lg font-semibold text-white'>FoodyZzz</span>
      </Link>
      <div className='hidden md:flex gap-4 text-white mr-5'>
        <Link
          className='text-lg font-medium hover:underline underline-offset-4'
          to='/'
        >
          Home
        </Link>
        <Link
          className='text-lg font-medium hover:underline underline-offset-4'
          to='/menu'
        >
          Menu
        </Link>
        <Link
          className='flex gap-2 text-lg items-center font-medium hover:underline underline-offset-4'
          to='/cart'
        >
          Cart
          <ShoppingBag size={17} />
        </Link>
      </div>
      <div className='hidden md:flex gap-4 text-white mr-5'>
        <Button className='gap-2 text-lg font-medium'>
          <LogIn />
          Login
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='lg:hidden' size='icon' variant='outline'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='grid gap-y-3 w-[200px] p-3'>
            <Link
              className='text-lg font-medium hover:underline underline-offset-4'
              to='/'
            >
              Home
            </Link>
            <Link
              className='text-lg font-medium hover:underline underline-offset-4'
              to='/menu'
            >
              Menu
            </Link>
            <Link
              className='text-lg font-medium hover:underline underline-offset-4'
              to='/cart'
            >
              Cart
            </Link>
          </div>
          <Button className='gap-2 text-lg font-medium bg-none'>
            <LogIn />
            Login
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}
