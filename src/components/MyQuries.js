import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase'; // Ensure this path matches where firebase.js is located
import { collection, query, where, getDocs } from 'firebase/firestore';

const MyQueries = () => {
  const [email, setEmail] = useState('');
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve email from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    // Query Firestore if email is available
    const fetchUserQueries = async () => {
      if (email) {
        try {
          const userQueriesQuery = query(
            collection(firestore, 'UserQueries'), 
            where('email', '==', email)
          );

          const querySnapshot = await getDocs(userQueriesQuery);
          const userQueries = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setQueries(userQueries);
        } catch (error) {
          console.error('Error fetching user queries: ', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserQueries();
  }, [email]);

  return (
    <div className="my-queries-container">
      <h1>My Queries</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : queries.length > 0 ? (
        <div className="queries-list">
          {queries.map((query) => (
            <div key={query.id} className="query-card">
              <h3 className="query-id">Query ID: {query.id}</h3>
              <p><strong>Name:</strong> {query.name}</p>
              <p><strong>Email:</strong> {query.email}</p>
              <p><strong>Contact Number:</strong> {query.contactNumber}</p>
              <p><strong>Location:</strong> {query.location}</p>
              <p><strong>Query:</strong> {query.query}</p>
              <p><strong>Worker Type:</strong> {query.workerType}</p>
              
              {query.image && query.image.length > 0 && (
                <div className="images-container">
                  <h4>Images:</h4>
                  <div className="image-gallery">
                    {query.image.map((img, index) => (
                      <img key={index} src={img} alt={`Query Image ${index + 1}`} className="query-image" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-queries">No queries found for this email.</p>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .my-queries-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7fa;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
          font-size: 2.5em;
        }

        .loading {
          text-align: center;
          color: #555;
        }

        .queries-list {
          margin-top: 20px;
        }

        .query-card {
          background-color: #ffffff;
          border: 1px solid #e3e3e3;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .query-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          border-color: #007bff;
        }

        .query-id {
          font-size: 1.5em;
          color: #007bff;
          margin-bottom: 10px;
        }

        .images-container {
          margin-top: 10px;
        }

        .image-gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .query-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
          border: 2px solid #e3e3e3;
          transition: transform 0.2s;
        }

        .query-image:hover {
          transform: scale(1.05);
        }

        strong {
          color: #555;
        }

        .no-queries {
          text-align: center;
          color: #777;
          font-size: 1.2em;
        }
      `}</style>
    </div>
  );
};

export default MyQueries;
