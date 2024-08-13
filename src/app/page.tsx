import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-navy-800 via-blue-900 to-black text-white font-sans">
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-8xl font-bold leading-tight mb-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 architects-daughter-regular">
          WhisperChoice
        </h1>
        <p className="text-2xl font-light mb-8 tracking-wide">
          Chat with any site of your choice using just the URL. Your gateway to seamless online conversations.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-800 rounded-lg shadow-lg text-center transform transition hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 tracking-wide text-white">
            Step 1
          </h2>
          <p className="text-lg font-light tracking-wide">
            Select the link of the site you wish to chat with.
          </p>
        </div>
        <div className="p-6 bg-blue-800 rounded-lg shadow-lg text-center transform transition hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 tracking-wide text-white">
            Step 2
          </h2>
          <p className="text-lg font-light tracking-wide">
            Add the site link next to the URL with a <code>/</code> i.e., 
            <br />
            <span className="italic">domainname/your-site-link</span>
          </p>
        </div>
        <div className="p-6 bg-blue-800 rounded-lg shadow-lg text-center transform transition hover:scale-105">
          <h2 className="text-3xl font-semibold mb-4 tracking-wide text-white">
            Step 3
          </h2>
          <p className="text-lg font-light tracking-wide">
            You'll be redirected and ready to chat seamlessly with the site.
          </p>
        </div>
      </div>

      <footer className="mt-16 w-full text-center text-sm opacity-75">
        <p>&copy; {new Date().getFullYear()} Whisper Choice. All rights reserved.</p>
        <div className="mt-4 flex justify-center">
          <a
            href="https://github.com/karthiknadar1204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </footer>
    </main>
  );
}
