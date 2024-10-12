import React, { useEffect, useRef } from 'react';
import posts from '../data/LinkedInPosts.json'; // Importing mock LinkedIn posts data

const LinkedInPosts: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    };
    const interval = setInterval(scroll, 20); // Adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Recent LinkedIn Posts</h2>

      {/* Scrolling Posts for Small Screens */}
      <div className="lg:hidden relative overflow-hidden" ref={scrollRef}>
        <div className="flex space-x-8">
          {posts.map((post, index) => (
            <div key={index} className="min-w-[300px] bg-white p-4 rounded-lg shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="font-bold text-gray-900">{post.username}</h3>
              <p className="text-sm text-gray-500">{post.time}</p>
              <h4 className="font-semibold text-gray-800 mt-2">{post.title}</h4>
              <p className="text-gray-700 text-sm mt-1">{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 justify-items-center">
        {posts.map((post, index) => (
          <div key={index} className="w-[300px] bg-white p-4 rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="font-bold text-gray-900">{post.username}</h3>
            <p className="text-sm text-gray-500">{post.time}</p>
            <h4 className="font-semibold text-gray-800 mt-2">{post.title}</h4>
            <p className="text-gray-700 text-sm mt-1">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedInPosts;