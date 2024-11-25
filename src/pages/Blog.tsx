import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Tag, Clock, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { blogPosts } from '../data/blogPosts';

export const Blog = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <Helmet>
        <title>Blog | Dipesh Thakur - Cybersecurity Specialist</title>
        <meta name="description" content="Deep dives into cybersecurity, penetration testing, and security research." />
        <meta name="keywords" content="cybersecurity, blog, penetration testing, security research, vulnerability analysis" />
      </Helmet>

      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            Security Research & Insights
          </h1>

          <div className="mb-8">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-white/5 focus:bg-white/10'
                    : 'bg-black/5 focus:bg-black/10'
                } outline-none transition-colors`}
              />
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm
                  ${selectedTag === tag
                    ? theme === 'dark'
                      ? 'bg-cyan-400/20 text-cyan-400'
                      : 'bg-cyan-600/20 text-cyan-600'
                    : theme === 'dark'
                      ? 'bg-white/5 hover:bg-white/10 text-gray-300'
                      : 'bg-black/5 hover:bg-black/10 text-gray-700'
                  } transition-colors`}
              >
                <Tag className="w-3 h-3" />
                {tag}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-black/5 hover:bg-black/10'
                } transition-colors group`}
              >
                <Link to={`/blog/${post.slug}`} className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.date}
                    </span>
                    <div className="flex items-center gap-2">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded-full text-xs
                            ${theme === 'dark'
                              ? 'bg-white/10 text-gray-300'
                              : 'bg-black/10 text-gray-700'
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  <div className={`flex items-center gap-2 text-sm font-medium
                    ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
                  >
                    Read more
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};