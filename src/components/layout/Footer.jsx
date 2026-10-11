import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 space-y-2 sm:space-y-0">
        {/* Left Footer Text */}
        <div className="text-center sm:text-left font-medium">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </div>

        {/* Right Footer Text / Disclaimer */}
        <div className="text-center sm:text-right font-normal text-gray-400">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
