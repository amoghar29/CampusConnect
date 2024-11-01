'use client';
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default function EventPosting() {
  return (
    <div className="bg-white">
      <Header />

      <div className="relative isolate px-[10%] pt-14">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Post Your Event
        </h1>
        <form className="mx-auto max-w-2xl bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="eventName">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter event name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="eventDate">
              Date
            </label>
            <input
              type="date"
              id="eventDate"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="eventDescription">
              Description
            </label>
            <textarea
              id="eventDescription"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="4"
              placeholder="Enter event description"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition duration-300 transform hover:scale-105"
            >
              Submit Event
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm font-semibold text-gray-900">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 