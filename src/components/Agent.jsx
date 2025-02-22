import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "雨が降ってるね",
  "近くにコンビニあるよ。傘買ったら？",
  "風が強くなってきたね",
  "今日は寒いね"
];

const Agent = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
      setTimeout(() => setMessage(null), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative">
        <AnimatePresence>
          {message && (
            <motion.div
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-200 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
          👁️
        </div>
      </div>
    </div>
  );
};

export default Agent;