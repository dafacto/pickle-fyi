import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='container narrow'>
        <h2>Ready to take the plunge with Pickle?</h2>
        <a href='https://pickle.finance' className='button'>
          Connect to the Pickle App
        </a>
      </div>
      <ul>
        <li>
          <Link href='/about'>
            <a>About this site</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
