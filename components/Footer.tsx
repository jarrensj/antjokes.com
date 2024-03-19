import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full py-4 border-gray-200 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          made by&nbsp;
          <Link href="https://kwaji.com/" className="text-blue-500 hover:text-blue-600 hover:underline transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
              kwaji
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
