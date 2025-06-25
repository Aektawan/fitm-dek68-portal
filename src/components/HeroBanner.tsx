
import React from 'react';

const HeroBanner = () => {
  return (
    <section className="pt-16 bg-gradient-to-r from-blue-500 via-yellow-400 to-orange-500 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              รับสมัครนักศึกษาใหม่
              <br />
              <span className="text-yellow-200">DEK68</span>
            </h1>
            
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <p className="text-white font-semibold text-lg">
                ม.6 ปวช. ปวส. เรียนต่อ ป.ตรี
              </p>
            </div>

            {/* Social Icons & Hashtag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium">#fitm</span>
                <div className="w-4 h-4 bg-white rounded-full cursor-pointer"></div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">G</span>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">L</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">F</span>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">25</span>
                </div>
              </div>
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              สมัครเรียนตอนนี้
            </button>
          </div>

          {/* Student Illustrations */}
          <div className="relative">
            <div className="flex justify-center items-end space-x-8">
              {/* Male Student */}
              <div className="relative">
                <div className="w-32 h-40 bg-blue-600 rounded-t-full relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-200 rounded-full"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white rounded-lg"></div>
                  <div className="absolute -right-4 top-20 w-8 h-12 bg-yellow-200 rounded-full transform rotate-45"></div>
                </div>
                <div className="w-8 h-16 bg-blue-800 mx-auto"></div>
                <div className="flex justify-center space-x-2">
                  <div className="w-6 h-8 bg-black rounded-t-lg"></div>
                  <div className="w-6 h-8 bg-black rounded-t-lg"></div>
                </div>
              </div>

              {/* Female Student */}
              <div className="relative">
                <div className="w-32 h-40 bg-pink-400 rounded-t-full relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-200 rounded-full"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white rounded-lg"></div>
                  <div className="absolute -left-4 top-20 w-8 h-12 bg-yellow-200 rounded-full transform -rotate-45"></div>
                </div>
                <div className="w-12 h-16 bg-pink-600 mx-auto rounded-b-full"></div>
                <div className="flex justify-center space-x-2">
                  <div className="w-6 h-8 bg-black rounded-t-lg"></div>
                  <div className="w-6 h-8 bg-black rounded-t-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Pointing arrows */}
            <div className="absolute -top-8 left-1/4 text-white text-2xl animate-bounce">👆</div>
            <div className="absolute -top-8 right-1/4 text-white text-2xl animate-bounce">👆</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
