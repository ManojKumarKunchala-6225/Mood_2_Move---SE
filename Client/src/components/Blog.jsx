// src/components/Blog.jsx
import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Top 10 Places to Visit in India",
    date: "Oct 10, 2025",
    excerpt: "Discover the most amazing destinations across India for every mood.",
    image: "/images/india_travel.jpg",
  },
  {
    title: "How to Travel India on a Budget",
    date: "Oct 5, 2025",
    excerpt: "Tips and tricks to explore India without breaking the bank.",
    image: "/images/budget.jpg",
  },
  {
    title: "Best Indian Street Foods to Try",
    date: "Sep 30, 2025",
    excerpt: "Experience India through its delicious and diverse street foods.",
    image: "/images/food.jpg",
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Mood2Move Blog
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
