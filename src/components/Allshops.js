// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from '../firebase'; // Adjust the path according to your structure

// const Allshops = () => {
//   const [shops, setShops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const shopCollection = collection(firestore, 'shops'); // Get the 'shops' collection
//         const shopSnapshot = await getDocs(shopCollection); // Fetch documents from the collection
//         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
//         setShops(shopsData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShops();
//   }, []);

//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   if (error) {
//     return <div style={styles.error}>Error: {error}</div>;
//   }

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>All Shops</h1>
//       <ul style={styles.shopList}>
//         {shops.map(shop => (
//           <li key={shop.id} style={styles.shopItem}>
//             <h2 style={styles.shopName}>{shop.shopName}</h2>
//             <div style={styles.shopDetails}>
//               <p><strong>Type:</strong> {shop.shopType}</p>
//               <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
//               <p><strong>Email:</strong> {shop.email}</p>
//               <p><strong>Location:</strong> {shop.location}</p>
//               <div>
//                 <strong>Images:</strong>
//                 <div style={styles.images}>
//                   {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
//                     <img key={index} src={url} alt={`Shop Image ${index + 1}`} style={styles.image} />
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
//   shopList: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   shopItem: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '20px',
//     marginBottom: '20px',
//     backgroundColor: '#ffffff', // White background for shop items
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//   },
//   shopItemHover: {
//     transform: 'scale(1.02)',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   },
//   shopName: {
//     fontSize: '24px',
//     color: '#007BFF', // Blue for shop names
//     margin: '0 0 10px',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//   },
//   shopDetails: {
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

// // Apply hover effect
// const handleMouseEnter = (event) => {
//   event.currentTarget.style.transform = styles.shopItemHover.transform;
//   event.currentTarget.style.boxShadow = styles.shopItemHover.boxShadow;
// };

// const handleMouseLeave = (event) => {
//   event.currentTarget.style.transform = 'scale(1)';
//   event.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
// };

// export default Allshops;


import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase'; // Adjust the path according to your structure
import { Link } from 'react-router-dom'; // Import Link for navigation

const Allshops = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const shopCollection = collection(firestore, 'shops'); // Get the 'shops' collection
        const shopSnapshot = await getDocs(shopCollection); // Fetch documents from the collection
        const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
        setShops(shopsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Shops</h1>
      <Link to="/IndividualList" style={styles.linkButton}>View Workers</Link>
      <ul style={styles.shopList}>
        {shops.map(shop => (
          <li key={shop.id} style={styles.shopItem}>
            <h2 style={styles.shopName}>{shop.shopName}</h2>
            <div style={styles.shopDetails}>
              <p><strong>Type:</strong> {shop.shopType}</p>
              <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
              <p><strong>Email:</strong> {shop.email}</p>
              <p><strong>Location:</strong> {shop.location}</p>
              <div>
                <strong>Images:</strong>
                <div style={styles.images}>
                  {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
                    <img key={index} src={url} alt={`Shop Image ${index + 1}`} style={styles.image} />
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

// Inline styling remains the same...
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f4f8',
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
  linkButton: {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '20px auto',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  },
  linkButtonHover: {
    backgroundColor: '#0056b3', // Darker shade on hover
  },
  shopList: {
    listStyleType: 'none',
    padding: 0,
  },
  shopItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  shopName: {
    fontSize: '24px',
    color: '#007BFF',
    margin: '0 0 10px',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  shopDetails: {
    marginBottom: '10px',
    color: '#555',
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
    border: '2px solid #007BFF',
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

export default Allshops;
