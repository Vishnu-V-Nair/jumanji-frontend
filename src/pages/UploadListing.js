import { useState } from 'react';
import API from '../api';

export default function UploadListing() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    pricePerNight: ''
  });
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    images.forEach((file) => formData.append('images', file));

    try {
      const res = await API.post('/listings', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Listing uploaded');
      setForm({ title: '', description: '', location: '', pricePerNight: '' });
      setImages([]);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3>Upload New Listing</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Price per Night"
          value={form.pricePerNight}
          onChange={(e) => setForm({ ...form, pricePerNight: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <input
          type="file"
          className="form-control mb-3"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
          accept="image/*"
          required
        />
        <button className="btn btn-success w-100">Upload</button>
      </form>
    </div>
  );
}
