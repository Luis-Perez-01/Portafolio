import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex relative justify-center items-center py-6 mt-10 border-t border-gray-100 dark:bg-gray-900/50 dark:border-t dark:border-gray-800">
      <div className="text-center">
        <p>&lt;Luis Dev/&gt;</p>
        <p>
          Contáctame en{" "}
          <a
            className="text-blue-700 hover:underline"
            href="mailto:LuisM1P3@hotmail.com"
          >
            LuisM1P3@hotmail.com
          </a>
        </p>
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="absolute right-10"
      >
        <ChevronUp />
      </button>
    </footer>
  );
}
