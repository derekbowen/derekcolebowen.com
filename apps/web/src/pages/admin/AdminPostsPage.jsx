import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Plus, Search, Edit, Trash2, LogOut } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext.jsx';

const AdminPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useAdminAuth();

  useEffect(() => {
    const loadPosts = () => {
      const storedPosts = localStorage.getItem('adminPosts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
      setIsLoading(false);
    };
    loadPosts();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem('adminPosts', JSON.stringify(updatedPosts));
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0E27] pt-24 pb-16 px-6">
      <Helmet>
        <title>Manage Posts | Admin</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-white">Manage Posts</h1>
          <div className="flex items-center gap-4">
            <Link
              to="/admin/new"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-bold hover:bg-[#00b8e6] transition-colors"
            >
              <Plus className="w-5 h-5" /> New Post
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="mb-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
            />
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-gray-400">Loading posts...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-400">No posts found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 text-sm">
                    <th className="pb-4 font-medium">Title</th>
                    <th className="pb-4 font-medium">Date</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map(post => (
                    <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 text-white font-medium">{post.title}</td>
                      <td className="py-4 text-gray-400 text-sm">{post.date}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.published ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/admin/edit/${post.id}`}
                            className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPostsPage;