import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, Tag } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../contexts/ThemeContext';
import { blogPosts } from '../data/blogPosts';

export const BlogPost = () => {
  const { slug } = useParams();
  const { theme } = useTheme();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Dipesh Thakur - Cybersecurity Specialist</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
      </Helmet>

      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className="flex items-center gap-1 text-gray-400">
                <Clock className="w-4 h-4" />
                {post.date}
              </span>
              <div className="flex items-center gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs
                      ${theme === 'dark'
                        ? 'bg-white/10 text-gray-300'
                        : 'bg-black/10 text-gray-700'
                      }`}
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
              {post.title}
            </h1>

            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {post.excerpt}
            </p>
          </div>

          <div className={`prose max-w-none ${
            theme === 'dark' ? 'prose-invert' : ''
          } prose-pre:p-0`}>
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className={
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }>
                    {block.content}
                  </p>
                );
              }
              if (block.type === 'code') {
                return (
                  <div key={index} className="my-6 rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                      language={block.language}
                      style={atomDark}
                      showLineNumbers
                    >
                      {block.content}
                    </SyntaxHighlighter>
                  </div>
                );
              }
              if (block.type === 'heading') {
                const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag key={index} className="text-2xl font-bold mt-8 mb-4">
                    {block.content}
                  </HeadingTag>
                );
              }
              return null;
            })}
          </div>
        </motion.article>
      </div>
    </>
  );
};