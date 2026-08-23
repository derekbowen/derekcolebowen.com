import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Save } from 'lucide-react';

const AdminNewPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      published: false
    };

    const existingPosts = JSON.parse(localStorage.getItem('adminPosts') || '[]');
    localStorage.setItem('adminPosts', JSON.stringify([newPost, ...existingPosts]));
    
    navigate('/admin/posts');
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] pt-24 pb-16 px-6">
      <Helmet>
        <title>New Post | Admin</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin/posts" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Create New Post</h1>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                placeholder="Post title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="15"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D9FF] transition-colors font-mono text-sm"
                placeholder="Write your post content here..."
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              to="/admin/posts"
              className="px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-bold hover:bg-[#00b8e6] transition-colors"
            >
              <Save className="w-5 h-5" /> Save Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminNewPostPage;