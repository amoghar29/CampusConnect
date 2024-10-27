import React from 'react';
import Header from '../components/Header';

export default function PostEvent() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <div className="relative isolate flex-grow flex items-center justify-center px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        {/* Main content area */}
        <div className="text-center">
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 animate-pulse">
            Post Events Coming Soon...
          </h1>
        </div>

        {/* Bottom background decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
}