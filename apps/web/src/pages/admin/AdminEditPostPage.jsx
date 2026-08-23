import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Save, Trash2, Eye, EyeOff } from 'lucide-react';

const AdminEditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('adminPosts') || '[]');
    const foundPost = storedPosts.find(p => p.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      setTitle(foundPost.title);
      setContent(foundPost.content);
      setPublished(foundPost.published || false);
    } else {
      navigate('/admin/posts');
    }
  }, [id, navigate]);

  const handleSave = (e) => {
    e.preventDefault();
    
    const storedPosts = JSON.parse(localStorage.getItem('adminPosts') || '[]');
    const updatedPosts = storedPosts.map(p => {
      if (p.id === id) {
        return { ...p, title, content, published };
      }
      return p;
    });
    
    localStorage.setItem('adminPosts', JSON.stringify(updatedPosts));
    navigate('/admin/posts');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const storedPosts = JSON.parse(localStorage.getItem('adminPosts') || '[]');
      const updatedPosts = storedPosts.filter(p => p.id !== id);
      localStorage.setItem('adminPosts', JSON.stringify(updatedPosts));
      navigate('/admin/posts');
    }
  };

  if (!post) return null;

  return (
    <div className="min-h-screen bg-[#0A0E27] pt-24 pb-16 px-6">
      <Helmet>
        <title>Edit Post | Admin</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Link to="/admin/posts" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-white">Edit Post</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPublished(!published)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors border ${
                published 
                  ? 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20' 
                  : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20'
              }`}
            >
              {published ? <><Eye className="w-4 h-4" /> Published</> : <><EyeOff className="w-4 h-4" /> Draft</>}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors border border-red-500/20"
              title="Delete Post"
            >
              <Trash2 className="w-5 h-5" />
            </button>
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
              <Save className="w-5 h-5" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditPostPage;