import React from "react";
import { motion } from "framer-motion";

const reviewsData = {
  "Mumbai": [
    { name: "Anita Sharma", rating: 5, comment: "Mumbai is vibrant! Loved Marine Drive and street food." },
    { name: "Rajesh Kumar", rating: 4, comment: "Gateway of India was amazing, very crowded but worth it." },
  ],
  "Jaipur": [
    { name: "Priya Singh", rating: 5, comment: "Hawa Mahal and City Palace are breathtaking!" },
    { name: "Amit Verma", rating: 4, comment: "Loved the Rajasthani cuisine, very flavorful." },
  ],
  "Goa": [
    { name: "Neha Reddy", rating: 5, comment: "Baga Beach is gorgeous and the nightlife is awesome!" },
    { name: "Vikram Das", rating: 4, comment: "Fort Aguada and beach walks were amazing." },
  ],
};

const DestinationReviews = ({ destinationName }) => {
  const reviews = reviewsData[destinationName] || [];

  if (reviews.length === 0) {
    return <p className="text-gray-500 text-center mt-8">No reviews available for this destination.</p>;
  }

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">User Reviews for {destinationName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {reviews.map((review, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-lg text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{review.name}</h3>
              <div className="text-yellow-500 font-bold">{'★'.repeat(review.rating)}</div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DestinationReviews;
