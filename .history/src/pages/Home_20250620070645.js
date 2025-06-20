import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function Home() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/listings')
      .then((res) => {
        setListings(res.data);
        setFilteredListings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching listings:', err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(term) ||
        listing.location.toLowerCase().includes(term)
    );

    setFilteredListings(filtered);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Available Hotel Listings</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Loading listings...</p>
        </div>
      ) : filteredListings.length === 0 ? (
        <p className="text-muted">No listings match your search.</p>
      ) : (
        <div className="row">
          {filteredListings.map((listing) => (
            <div className="col-md-4 mb-4" key={listing._id}>
              <Link to={`/listing/${listing._id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <img
                    src={listing.images?.[0]}
                    alt={listing.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{listing.title}</h5>
                    <p className="card-text">{listing.location}</p>
                    <p className="text-muted">₹{listing.pricePerNight} / night</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
