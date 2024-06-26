import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-10 text-white text-center bottom-4'>
      <div className='bg-black py-2'>
        <a href='https://artisanthemes.io' className='text-white hover:underline' target='_blank' rel='noopener noreferrer'>artisanthemes.io</a>
      </div>
      <div>
       
          <a className='text-white hover:underline'>artisanthemes.io</a>
       
      </div>
      <div>
        <span className="footer-span">artisanthemes.io</span>
        <div className='flex justify-center items-center space-x-6'>
          <img className='h-8' src='/path/to/quartz-logo.png' alt='Quartz' />
          <img className='h-8' src='/path/to/fast-company-logo.png' alt='Fast Company' />
          <img className='h-8' src='/path/to/entrepreneur-logo.png' alt='Entrepreneur' />
          <img className='h-8' src='/path/to/techcrunch-logo.png' alt='TechCrunch' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
