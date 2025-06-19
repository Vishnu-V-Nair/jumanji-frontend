import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api';

export default function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    API.get(`/listings/${id}`)
      .then((res) => setListing(res.data))
      .catch(() => console.error('Listing not found'));
  }, [id]);

  const handleBooking = () => {
    alert(`Booking started for: ${listing.title}`);
  };

  if (!listing) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        {/* Left Column: Text */}
        <div className="col-md-6 mb-4">
          <h2 className="mb-3">{listing.title}</h2>
          <p><strong>Location:</strong> {listing.location}</p>
          <p><strong>Price:</strong> ₹{listing.pricePerNight} / night</p>
          <p><strong>Description:</strong></p>
          <p>{listing.description}</p>
          
          <button className="btn btn-success mt-3" onClick={handleBooking}>
            Book Now
          </button>
        </div>
        
        <div className="col-md-6">
          {listing.images && listing.images.length > 0 && (
            <div
              id="imageCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner rounded shadow-sm">
                {listing.images.map((url, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <img
                      src={url}
                      className="d-block w-100"
                      alt={`Slide ${index + 1}`}
                      style={{
                        maxHeight: '400px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                ))}
              </div>

              {listing.images.length > 1 && (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#imageCarousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#imageCarousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
