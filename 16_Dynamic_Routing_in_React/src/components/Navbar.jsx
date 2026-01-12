import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-between bg-cyan-700 px-6 py-3 items-center rounded">
      <h1 className='text-3xl font-semibold'>BrandLogo</h1>
      <div className='flex text-xl gap-6'>
        <Link className='font-medium' to='/'>Home</Link>
        <Link className='font-medium' to='/about'>About</Link>
        <Link className='font-medium' to='/courses'>Courses</Link>
        <Link className='font-medium' to='/contact'>Contact</Link>
      </div>
    </div>
  );
}
