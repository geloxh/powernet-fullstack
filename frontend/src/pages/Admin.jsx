import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const Admin = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('partners');
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'users' ? '/api/admin/users' : `/api/${activeTab}`;
      const token = localStorage.getItem('token');
      const headers = activeTab === 'users' ? { Authorization: `Bearer ${token}` } : {};
      
      const res = await fetch(`${API_URL}${endpoint}`, { headers });
      const result = await res.json();
      
      if (activeTab === 'users') {
        setUsers(result);
      } else {
        setData(result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_URL}/api/admin/${activeTab}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleSave = async (formData) => {
    try {
      const token = localStorage.getItem('token');
      const method = editItem ? 'PUT' : 'POST';
      const url = editItem 
        ? `${API_URL}/api/admin/${activeTab}/${editItem._id}`
        : `${API_URL}/api/admin/${activeTab}`;

      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      setShowModal(false);
      setEditItem(null);
      fetchData();
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  const openModal = (item = null) => {
    setEditItem(item);
    setShowModal(true);
  };

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <i className="fas fa-shield-alt"></i>
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          {['partners', 'news', 'careers', 'solutions', 'users'].map(tab => (
            <button
              key={tab}
              className={`nav-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <i className={`fas fa-${getIcon(tab)}`}></i>
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="admin-content">
        <header className="content-header">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h1>
          {activeTab !== 'users' && (
            <button className="btn-primary" onClick={() => openModal()}>
              <i className="fas fa-plus"></i> Add New
            </button>
          )}
        </header>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : activeTab === 'users' ? (
          <UsersTable users={users} />
        ) : (
          <DataTable 
            data={data} 
            type={activeTab} 
            onEdit={openModal} 
            onDelete={handleDelete} 
          />
        )}

        {showModal && (
          <Modal
            type={activeTab}
            item={editItem}
            onClose={() => { setShowModal(false); setEditItem(null); }}
            onSave={handleSave}
          />
        )}
      </main>
    </div>
  );
};

const getIcon = (tab) => {
  const icons = {
    partners: 'handshake',
    news: 'newspaper',
    careers: 'briefcase',
    solutions: 'cogs',
    users: 'users'
  };
  return icons[tab];
};

const DataTable = ({ data, type, onEdit, onDelete }) => (
  <div className="data-table">
    <table>
      <thead>
        <tr>
          {getColumns(type).map(col => <th key={col}>{col}</th>)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {getColumns(type).map(col => (
              <td key={col}>{renderCell(item, col, type)}</td>
            ))}
            <td className="actions">
              <button className="btn-edit" onClick={() => onEdit(item)}>
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn-delete" onClick={() => onDelete(item._id)}>
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const UsersTable = ({ users }) => (
  <div className="data-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><span className={`badge ${user.role}`}>{user.role}</span></td>
            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const getColumns = (type) => {
  const columns = {
    partners: ['Name', 'Category', 'Description'],
    news: ['Title', 'Category', 'Author', 'Published'],
    careers: ['Title', 'Department', 'Location', 'Type'],
    solutions: ['Title', 'Category', 'Description']
  };
  return columns[type] || [];
};

const renderCell = (item, col, type) => {
  const mapping = {
    partners: { Name: 'name', Category: 'category', Description: 'desc' },
    news: { Title: 'title', Category: 'category', Author: 'author', Published: 'publishedAt' },
    careers: { Title: 'title', Department: 'department', Location: 'location', Type: 'type' },
    solutions: { Title: 'title', Category: 'category', Description: 'description' }
  };
  
  const field = mapping[type][col];
  const value = item[field];
  
  if (field === 'publishedAt') {
    return new Date(value).toLocaleDateString();
  }
  return value?.length > 50 ? value.substring(0, 50) + '...' : value;
};

const Modal = ({ type, item, onClose, onSave }) => {
  const [formData, setFormData] = useState(item || getEmptyForm(type));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value
    }));
  };

  const handleArrayChange = (e, field) => {
    const value = e.target.value.split(',').map(v => v.trim());
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{item ? 'Edit' : 'Add'} {type.slice(0, -1)}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          {renderFormFields(type, formData, handleChange, handleArrayChange)}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const getEmptyForm = (type) => {
  const forms = {
    partners: { name: '', category: '', desc: '', img: '', specialties: [], url: '' },
    news: { title: '', content: '', excerpt: '', image: '', category: 'General', author: 'PowerNet Team', featured: false },
    careers: { title: '', department: '', location: '', type: 'Full-time', description: '', requirements: [], isActive: true },
    solutions: { category: '', title: '', description: '', image: '', icon: '', features: [] }
  };
  return forms[type];
};

const renderFormFields = (type, formData, handleChange, handleArrayChange) => {
  const fields = {
    partners: [
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'category', label: 'Category', type: 'text' },
      { name: 'desc', label: 'Description', type: 'textarea' },
      { name: 'img', label: 'Image', type: 'text' },
      { name: 'specialties', label: 'Specialties (comma-separated)', type: 'array' },
      { name: 'url', label: 'URL', type: 'text' }
    ],
    news: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'excerpt', label: 'Excerpt', type: 'textarea' },
      { name: 'content', label: 'Content', type: 'textarea' },
      { name: 'image', label: 'Image URL', type: 'text' },
      { name: 'category', label: 'Category', type: 'text' },
      { name: 'author', label: 'Author', type: 'text' },
      { name: 'featured', label: 'Featured', type: 'checkbox' }
    ],
    careers: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'location', label: 'Location', type: 'text' },
      { name: 'type', label: 'Type', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'requirements', label: 'Requirements (comma-separated)', type: 'array' },
      { name: 'isActive', label: 'Active', type: 'checkbox' }
    ],
    solutions: [
      { name: 'category', label: 'Category', type: 'text' },
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'image', label: 'Image URL', type: 'text' },
      { name: 'icon', label: 'Icon Class', type: 'text' },
      { name: 'features', label: 'Features (comma-separated)', type: 'array' }
    ]
  };

  return fields[type].map(field => (
    <div key={field.name} className="form-group">
      <label>{field.label}</label>
      {field.type === 'textarea' ? (
        <textarea
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          required
        />
      ) : field.type === 'checkbox' ? (
        <input
          type="checkbox"
          name={field.name}
          checked={formData[field.name] || false}
          onChange={handleChange}
        />
      ) : field.type === 'array' ? (
        <input
          type="text"
          value={formData[field.name]?.join(', ') || ''}
          onChange={(e) => handleArrayChange(e, field.name)}
        />
      ) : (
        <input
          type={field.type}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={handleChange}
          required
        />
      )}
    </div>
  ));
};

export default Admin;