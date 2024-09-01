import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Your Healthcare Portal. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link> | 
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white ml-2">Privacy Policy</Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;