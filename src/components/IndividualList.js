// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from '../firebase'; // Adjust the path according to your structure

// const IndividualList = () => {
//   const [workers, setWorkers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const workerCollection = collection(firestore, 'workers'); // Get the 'workers' collection
//         const workerSnapshot = await getDocs(workerCollection); // Fetch documents from the collection
//         const workersData = workerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
//         setWorkers(workersData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorkers();
//   }, []);

//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   if (error) {
//     return <div style={styles.error}>Error: {error}</div>;
//   }

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Workers List</h1>
//       <ul style={styles.workerList}>
//         {workers.map(worker => (
//           <li key={worker.id} style={styles.workerItem}>
//             <h2 style={styles.workerName}>{worker.name}</h2>
//             <div style={styles.workerDetails}>
//               <p><strong>Type:</strong> {worker.workerType}</p>
//               <p><strong>Contact Number:</strong> {worker.contactNumber}</p>
//               <p><strong>Email:</strong> {worker.email}</p>
//               <p><strong>Location:</strong> {worker.location}</p>
//               <div>
//                 <strong>Images:</strong>
//                 <div style={styles.images}>
//                   {worker.profileImageUrl && worker.profileImageUrl.map((url, index) => (
//                     <img key={index} src={url} alt={`Worker Image ${index + 1}`} style={styles.image} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Enhanced inline styling
// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//     backgroundColor: '#f0f4f8', // Light background for contrast
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#333',
//     fontSize: '32px',
//     fontWeight: '600',
//   },
//   workerList: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   workerItem: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '20px',
//     marginBottom: '20px',
//     backgroundColor: '#ffffff', // White background for worker items
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//   },
//   workerName: {
//     fontSize: '24px',
//     color: '#007BFF', // Blue for worker names
//     margin: '0 0 10px',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//   },
//   workerDetails: {
//     marginBottom: '10px',
//     color: '#555', // Darker color for details
//   },
//   images: {
//     display: 'flex',
//     gap: '10px',
//     marginTop: '10px',
//   },
//   image: {
//     width: '100px',
//     height: '100px',
//     objectFit: 'cover',
//     borderRadius: '4px',
//     border: '2px solid #007BFF', // Blue border for images
//   },
//   loading: {
//     textAlign: 'center',
//     fontSize: '18px',
//     color: '#555',
//   },
//   error: {
//     textAlign: 'center',
//     color: 'red',
//   },
// };

// export default IndividualList;

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase'; // Adjust the path according to your structure
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path if necessary
import { useNavigate } from 'react-router-dom'; // For navigation

const IndividualList = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const workerCollection = collection(firestore, 'workers'); // Get the 'workers' collection
        const workerSnapshot = await getDocs(workerCollection); // Fetch documents from the collection
        const workersData = workerSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
        setWorkers(workersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userToken');
      localStorage.removeItem('userEmail');
      navigate('/login'); // Redirect to login page after logout
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Workers List</h1>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
      <ul style={styles.workerList}>
        {workers.map(worker => (
          <li key={worker.id} style={styles.workerItem}>
            <h2 style={styles.workerName}>{worker.name}</h2>
            <div style={styles.workerDetails}>
              <p><strong>Type:</strong> {worker.workerType}</p>
              <p><strong>Contact Number:</strong> {worker.contactNumber}</p>
              <p><strong>Email:</strong> {worker.email}</p>
              <p><strong>Location:</strong> {worker.location}</p>
              <div>
                <strong>Images:</strong>
                <div style={styles.images}>
                  {worker.profileImageUrl && worker.profileImageUrl.map((url, index) => (
                    <img key={index} src={url} alt={`Worker Image ${index + 1}`} style={styles.image} />
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Enhanced inline styling
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f4f8', // Light background for contrast
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '32px',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#dc3545', // Bootstrap red
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  workerList: {
    listStyleType: 'none',
    padding: 0,
  },
  workerItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff', // White background for worker items
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  workerName: {
    fontSize: '24px',
    color: '#007BFF', // Blue for worker names
    margin: '0 0 10px',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  workerDetails: {
    marginBottom: '10px',
    color: '#555', // Darker color for details
  },
  images: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '4px',
    border: '2px solid #007BFF', // Blue border for images
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#555',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
};

export default IndividualList;
