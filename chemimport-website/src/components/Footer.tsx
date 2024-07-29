import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E5C9B] text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 ChemImport. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}