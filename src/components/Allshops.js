// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import { collection, getDocs } from 'firebase/firestore';
// // // // // // // import { firestore } from '../firebase'; // Adjust the path according to your structure

// // // // // // // const Allshops = () => {
// // // // // // //   const [shops, setShops] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchShops = async () => {
// // // // // // //       try {
// // // // // // //         const shopCollection = collection(firestore, 'shops'); // Get the 'shops' collection
// // // // // // //         const shopSnapshot = await getDocs(shopCollection); // Fetch documents from the collection
// // // // // // //         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
// // // // // // //         setShops(shopsData);
// // // // // // //       } catch (err) {
// // // // // // //         setError(err.message);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchShops();
// // // // // // //   }, []);

// // // // // // //   if (loading) {
// // // // // // //     return <div style={styles.loading}>Loading...</div>;
// // // // // // //   }

// // // // // // //   if (error) {
// // // // // // //     return <div style={styles.error}>Error: {error}</div>;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div style={styles.container}>
// // // // // // //       <h1 style={styles.title}>All Shops</h1>
// // // // // // //       <ul style={styles.shopList}>
// // // // // // //         {shops.map(shop => (
// // // // // // //           <li key={shop.id} style={styles.shopItem}>
// // // // // // //             <h2 style={styles.shopName}>{shop.shopName}</h2>
// // // // // // //             <div style={styles.shopDetails}>
// // // // // // //               <p><strong>Type:</strong> {shop.shopType}</p>
// // // // // // //               <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
// // // // // // //               <p><strong>Email:</strong> {shop.email}</p>
// // // // // // //               <p><strong>Location:</strong> {shop.location}</p>
// // // // // // //               <div>
// // // // // // //                 <strong>Images:</strong>
// // // // // // //                 <div style={styles.images}>
// // // // // // //                   {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
// // // // // // //                     <img key={index} src={url} alt={`Shop Image ${index + 1}`} style={styles.image} />
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </li>
// // // // // // //         ))}
// // // // // // //       </ul>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // // Enhanced inline styling
// // // // // // // const styles = {
// // // // // // //   container: {
// // // // // // //     maxWidth: '1200px',
// // // // // // //     margin: '0 auto',
// // // // // // //     padding: '20px',
// // // // // // //     backgroundColor: '#f0f4f8', // Light background for contrast
// // // // // // //     borderRadius: '10px',
// // // // // // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: '20px',
// // // // // // //     color: '#333',
// // // // // // //     fontSize: '32px',
// // // // // // //     fontWeight: '600',
// // // // // // //   },
// // // // // // //   shopList: {
// // // // // // //     listStyleType: 'none',
// // // // // // //     padding: 0,
// // // // // // //   },
// // // // // // //   shopItem: {
// // // // // // //     border: '1px solid #ccc',
// // // // // // //     borderRadius: '8px',
// // // // // // //     padding: '20px',
// // // // // // //     marginBottom: '20px',
// // // // // // //     backgroundColor: '#ffffff', // White background for shop items
// // // // // // //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// // // // // // //     transition: 'transform 0.2s, box-shadow 0.2s',
// // // // // // //   },
// // // // // // //   shopItemHover: {
// // // // // // //     transform: 'scale(1.02)',
// // // // // // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// // // // // // //   },
// // // // // // //   shopName: {
// // // // // // //     fontSize: '24px',
// // // // // // //     color: '#007BFF', // Blue for shop names
// // // // // // //     margin: '0 0 10px',
// // // // // // //     cursor: 'pointer',
// // // // // // //     textDecoration: 'underline',
// // // // // // //   },
// // // // // // //   shopDetails: {
// // // // // // //     marginBottom: '10px',
// // // // // // //     color: '#555', // Darker color for details
// // // // // // //   },
// // // // // // //   images: {
// // // // // // //     display: 'flex',
// // // // // // //     gap: '10px',
// // // // // // //     marginTop: '10px',
// // // // // // //   },
// // // // // // //   image: {
// // // // // // //     width: '100px',
// // // // // // //     height: '100px',
// // // // // // //     objectFit: 'cover',
// // // // // // //     borderRadius: '4px',
// // // // // // //     border: '2px solid #007BFF', // Blue border for images
// // // // // // //   },
// // // // // // //   loading: {
// // // // // // //     textAlign: 'center',
// // // // // // //     fontSize: '18px',
// // // // // // //     color: '#555',
// // // // // // //   },
// // // // // // //   error: {
// // // // // // //     textAlign: 'center',
// // // // // // //     color: 'red',
// // // // // // //   },
// // // // // // // };

// // // // // // // // Apply hover effect
// // // // // // // const handleMouseEnter = (event) => {
// // // // // // //   event.currentTarget.style.transform = styles.shopItemHover.transform;
// // // // // // //   event.currentTarget.style.boxShadow = styles.shopItemHover.boxShadow;
// // // // // // // };

// // // // // // // const handleMouseLeave = (event) => {
// // // // // // //   event.currentTarget.style.transform = 'scale(1)';
// // // // // // //   event.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
// // // // // // // };

// // // // // // // export default Allshops;


// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { collection, getDocs } from 'firebase/firestore';
// // // // // // import { firestore } from '../firebase'; // Adjust the path according to your structure
// // // // // // import { Link } from 'react-router-dom'; // Import Link for navigation

// // // // // // const Allshops = () => {
// // // // // //   const [shops, setShops] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     const fetchShops = async () => {
// // // // // //       try {
// // // // // //         const shopCollection = collection(firestore, 'shops'); // Get the 'shops' collection
// // // // // //         const shopSnapshot = await getDocs(shopCollection); // Fetch documents from the collection
// // // // // //         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
// // // // // //         setShops(shopsData);
// // // // // //       } catch (err) {
// // // // // //         setError(err.message);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchShops();
// // // // // //   }, []);

// // // // // //   if (loading) {
// // // // // //     return <div style={styles.loading}>Loading...</div>;
// // // // // //   }

// // // // // //   if (error) {
// // // // // //     return <div style={styles.error}>Error: {error}</div>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <h1 style={styles.title}>All Shops</h1>
// // // // // //       <Link to="/IndividualList" style={styles.linkButton}>View Workers</Link>
// // // // // //       <ul style={styles.shopList}>
// // // // // //         {shops.map(shop => (
// // // // // //           <li key={shop.id} style={styles.shopItem}>
// // // // // //             <h2 style={styles.shopName}>{shop.shopName}</h2>
// // // // // //             <div style={styles.shopDetails}>
// // // // // //               <p><strong>Type:</strong> {shop.shopType}</p>
// // // // // //               <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
// // // // // //               <p><strong>Email:</strong> {shop.email}</p>
// // // // // //               <p><strong>Location:</strong> {shop.location}</p>
// // // // // //               <div>
// // // // // //                 <strong>Images:</strong>
// // // // // //                 <div style={styles.images}>
// // // // // //                   {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
// // // // // //                     <img key={index} src={url} alt={`Shop Image ${index + 1}`} style={styles.image} />
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // // Inline styling remains the same...
// // // // // // const styles = {
// // // // // //   container: {
// // // // // //     maxWidth: '1200px',
// // // // // //     margin: '0 auto',
// // // // // //     padding: '20px',
// // // // // //     backgroundColor: '#f0f4f8',
// // // // // //     borderRadius: '10px',
// // // // // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // // // // //   },
// // // // // //   title: {
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: '20px',
// // // // // //     color: '#333',
// // // // // //     fontSize: '32px',
// // // // // //     fontWeight: '600',
// // // // // //   },
// // // // // //   linkButton: {
// // // // // //     display: 'inline-block',
// // // // // //     padding: '10px 20px',
// // // // // //     margin: '20px auto',
// // // // // //     textAlign: 'center',
// // // // // //     color: '#fff',
// // // // // //     backgroundColor: '#007BFF',
// // // // // //     borderRadius: '5px',
// // // // // //     textDecoration: 'none',
// // // // // //     transition: 'background-color 0.3s',
// // // // // //   },
// // // // // //   linkButtonHover: {
// // // // // //     backgroundColor: '#0056b3', // Darker shade on hover
// // // // // //   },
// // // // // //   shopList: {
// // // // // //     listStyleType: 'none',
// // // // // //     padding: 0,
// // // // // //   },
// // // // // //   shopItem: {
// // // // // //     border: '1px solid #ccc',
// // // // // //     borderRadius: '8px',
// // // // // //     padding: '20px',
// // // // // //     marginBottom: '20px',
// // // // // //     backgroundColor: '#ffffff',
// // // // // //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// // // // // //   },
// // // // // //   shopName: {
// // // // // //     fontSize: '24px',
// // // // // //     color: '#007BFF',
// // // // // //     margin: '0 0 10px',
// // // // // //     cursor: 'pointer',
// // // // // //     textDecoration: 'underline',
// // // // // //   },
// // // // // //   shopDetails: {
// // // // // //     marginBottom: '10px',
// // // // // //     color: '#555',
// // // // // //   },
// // // // // //   images: {
// // // // // //     display: 'flex',
// // // // // //     gap: '10px',
// // // // // //     marginTop: '10px',
// // // // // //   },
// // // // // //   image: {
// // // // // //     width: '100px',
// // // // // //     height: '100px',
// // // // // //     objectFit: 'cover',
// // // // // //     borderRadius: '4px',
// // // // // //     border: '2px solid #007BFF',
// // // // // //   },
// // // // // //   loading: {
// // // // // //     textAlign: 'center',
// // // // // //     fontSize: '18px',
// // // // // //     color: '#555',
// // // // // //   },
// // // // // //   error: {
// // // // // //     textAlign: 'center',
// // // // // //     color: 'red',
// // // // // //   },
// // // // // // };

// // // // // // export default Allshops;



// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { collection, getDocs } from 'firebase/firestore';
// // // // // import { firestore } from '../firebase'; // Adjust the path according to your structure

// // // // // const Allshops = () => {
// // // // //   const [shops, setShops] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const fetchShops = async () => {
// // // // //       try {
// // // // //         const shopCollection = collection(firestore, 'shops'); // Get the 'shops' collection
// // // // //         const shopSnapshot = await getDocs(shopCollection); // Fetch documents from the collection
// // // // //         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map over documents
// // // // //         setShops(shopsData.slice(0, 5)); // Show only the first 5 shops
// // // // //       } catch (err) {
// // // // //         setError(err.message);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchShops();
// // // // //   }, []);

// // // // //   if (loading) {
// // // // //     return <div style={styles.loading}>Loading...</div>;
// // // // //   }

// // // // //   if (error) {
// // // // //     return <div style={styles.error}>Error: {error}</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h1 style={styles.title}>Shops Available on MechFinder</h1>
// // // // //       <ul style={styles.shopList}>
// // // // //         {shops.map(shop => (
// // // // //           <li key={shop.id} style={styles.shopItem}>
// // // // //             <h2 style={styles.shopName}>{shop.shopName}</h2>
// // // // //             <div style={styles.shopDetails}>
// // // // //               <p><strong>Type:</strong> {shop.shopType}</p>
// // // // //               <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
// // // // //               <p><strong>Email:</strong> {shop.email}</p>
// // // // //               <p><strong>Location:</strong> {shop.location}</p>
// // // // //               <div>
// // // // //                 <strong>Images:</strong>
// // // // //                 <div style={styles.images}>
// // // // //                   {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
// // // // //                     <img key={index} src={url} alt={`Shop Image ${index + 1}`} style={styles.image} />
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Responsive and full-screen styling
// // // // // const styles = {
// // // // //   container: {
// // // // //     maxWidth: '100%',
// // // // //     margin: '0 auto',
// // // // //     padding: '20px',
// // // // //     backgroundColor: '#f0f4f8',
// // // // //     borderRadius: '10px',
// // // // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // // // //   },
// // // // //   title: {
// // // // //     textAlign: 'center',
// // // // //     marginBottom: '20px',
// // // // //     color: '#333',
// // // // //     fontSize: '32px',
// // // // //     fontWeight: '600',
// // // // //   },
// // // // //   shopList: {
// // // // //     listStyleType: 'none',
// // // // //     padding: 0,
// // // // //     display: 'flex',
// // // // //     flexWrap: 'wrap',
// // // // //     gap: '20px',
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // //   shopItem: {
// // // // //     flex: '1 1 calc(33% - 40px)', // Responsive for 3 columns
// // // // //     minWidth: '300px',
// // // // //     border: '1px solid #ccc',
// // // // //     borderRadius: '8px',
// // // // //     padding: '20px',
// // // // //     backgroundColor: '#ffffff',
// // // // //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// // // // //   },
// // // // //   shopName: {
// // // // //     fontSize: '24px',
// // // // //     color: '#007BFF',
// // // // //     margin: '0 0 10px',
// // // // //     cursor: 'pointer',
// // // // //     textDecoration: 'underline',
// // // // //   },
// // // // //   shopDetails: {
// // // // //     marginBottom: '10px',
// // // // //     color: '#555',
// // // // //   },
// // // // //   images: {
// // // // //     display: 'flex',
// // // // //     gap: '10px',
// // // // //     marginTop: '10px',
// // // // //     flexWrap: 'wrap',
// // // // //   },
// // // // //   image: {
// // // // //     width: '100px',
// // // // //     height: '100px',
// // // // //     objectFit: 'cover',
// // // // //     borderRadius: '4px',
// // // // //     border: '2px solid #007BFF',
// // // // //   },
// // // // //   loading: {
// // // // //     textAlign: 'center',
// // // // //     fontSize: '18px',
// // // // //     color: '#555',
// // // // //   },
// // // // //   error: {
// // // // //     textAlign: 'center',
// // // // //     color: 'red',
// // // // //   },
// // // // // };

// // // // // export default Allshops;


// // // // import React, { useEffect, useState } from 'react';
// // // // import { collection, getDocs } from 'firebase/firestore';
// // // // import { firestore } from '../firebase'; // Adjust the path according to your structure

// // // // const Allshops = () => {
// // // //   const [shops, setShops] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [hoveredShop, setHoveredShop] = useState(null); // State for tracking hovered shop

// // // //   useEffect(() => {
// // // //     const fetchShops = async () => {
// // // //       try {
// // // //         const shopCollection = collection(firestore, 'shops');
// // // //         const shopSnapshot = await getDocs(shopCollection);
// // // //         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //         setShops(shopsData.slice(0, 5)); // Show only the first 5 shops
// // // //       } catch (err) {
// // // //         setError(err.message);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchShops();
// // // //   }, []);

// // // //   if (loading) {
// // // //     return <div style={styles.loading}>Loading...</div>;
// // // //   }

// // // //   if (error) {
// // // //     return <div style={styles.error}>Error: {error}</div>;
// // // //   }

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h1 style={styles.title}>Shops Available on MechFinder</h1>
// // // //       <p style={styles.infoText}>
// // // //         Explore various types of shops registered on MechFinder. These are just some examples of the types of shops you can find. Whether you're looking for electricians, mechanics, or other services, we've got you covered!
// // // //       </p>
// // // //       <ul style={styles.shopList}>
// // // //         {shops.map(shop => (
// // // //           <li
// // // //             key={shop.id}
// // // //             style={hoveredShop === shop.id ? { ...styles.shopItem, ...styles.shopItemHover } : styles.shopItem}
// // // //             onMouseEnter={() => setHoveredShop(shop.id)}
// // // //             onMouseLeave={() => setHoveredShop(null)}
// // // //           >
// // // //             <h2
// // // //               style={hoveredShop === shop.id ? { ...styles.shopName, ...styles.shopNameHover } : styles.shopName}
// // // //             >
// // // //               {shop.shopName}
// // // //             </h2>
// // // //             <div style={hoveredShop === shop.id ? { ...styles.shopDetails, ...styles.shopDetailsHover } : styles.shopDetails}>
// // // //               <p><strong>Type:</strong> {shop.shopType}</p>
// // // //               <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
// // // //               <p><strong>Email:</strong> {shop.email}</p>
// // // //               <p><strong>Location:</strong> {shop.location}</p>
// // // //               <div>
// // // //                 <strong>Images:</strong>
// // // //                 <div style={styles.images}>
// // // //                   {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
// // // //                     <img
// // // //                       key={index}
// // // //                       src={url}
// // // //                       alt={`Shop Image ${index + 1}`}
// // // //                       style={hoveredShop === shop.id ? { ...styles.image, ...styles.imageHover } : styles.image}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Enhanced styling with additional hover effects
// // // // const styles = {
// // // //   container: {
// // // //     maxWidth: '100%',
// // // //     margin: '0 auto',
// // // //     padding: '20px',
// // // //     background: 'linear-gradient(135deg, #f0f4f8, #c4d7e1)',
// // // //     borderRadius: '10px',
// // // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
// // // //     color: '#333',
// // // //   },
// // // //   title: {
// // // //     textAlign: 'center',
// // // //     marginBottom: '20px',
// // // //     color: '#1d3557',
// // // //     fontSize: '36px',
// // // //     fontWeight: '700',
// // // //     textTransform: 'uppercase',
// // // //   },
// // // //   infoText: {
// // // //     textAlign: 'center',
// // // //     fontSize: '18px',
// // // //     marginBottom: '30px',
// // // //     color: '#6c757d',
// // // //     lineHeight: '1.8',
// // // //   },
// // // //   shopList: {
// // // //     listStyleType: 'none',
// // // //     padding: 0,
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap',
// // // //     gap: '20px',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   shopItem: {
// // // //     flex: '1 1 calc(33% - 40px)',
// // // //     minWidth: '300px',
// // // //     borderRadius: '12px',
// // // //     padding: '20px',
// // // //     margin: '0 10px',
// // // //     backgroundColor: '#fff',
// // // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // // //     transition: 'all 0.4s ease', // Transition for hover effects
// // // //   },
// // // //   shopItemHover: {
// // // //     transform: 'scale(1.08)',
// // // //     backgroundColor: '#1d3557',
// // // //     color: '#fff',
// // // //     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
// // // //     border: '2px solid #F4A261', // Adding border on hover
// // // //   },
// // // //   shopName: {
// // // //     fontSize: '26px',
// // // //     color: '#007BFF',
// // // //     margin: '0 0 15px',
// // // //     cursor: 'pointer',
// // // //     transition: 'color 0.3s, text-shadow 0.3s',
// // // //   },
// // // //   shopNameHover: {
// // // //     color: '#F4A261', // Change color on hover
// // // //     textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)', // Add text shadow on hover
// // // //   },
// // // //   shopDetails: {
// // // //     marginBottom: '10px',
// // // //     color: '#555',
// // // //     transition: 'opacity 0.4s ease, transform 0.4s ease', // Smooth transition for details
// // // //   },
// // // //   shopDetailsHover: {
// // // //     opacity: 1,
// // // //     transform: 'translateY(-10px)', // Move up on hover
// // // //   },
// // // //   images: {
// // // //     display: 'flex',
// // // //     gap: '10px',
// // // //     marginTop: '10px',
// // // //     flexWrap: 'wrap',
// // // //   },
// // // //   image: {
// // // //     width: '100px',
// // // //     height: '100px',
// // // //     objectFit: 'cover',
// // // //     borderRadius: '10px',
// // // //     border: '3px solid #1d3557',
// // // //     transition: 'transform 0.5s ease, border-color 0.5s ease',
// // // //   },
// // // //   imageHover: {
// // // //     transform: 'rotate(10deg) scale(1.1)', // Add more rotation and scale
// // // //     borderColor: '#F4A261',
// // // //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', // Add shadow to images on hover
// // // //   },
// // // //   loading: {
// // // //     textAlign: 'center',
// // // //     fontSize: '18px',
// // // //     color: '#333',
// // // //   },
// // // //   error: {
// // // //     textAlign: 'center',
// // // //     color: 'red',
// // // //   },
// // // // };

// // // // export default Allshops;

// // // import React, { useEffect, useState } from 'react';
// // // import { collection, getDocs } from 'firebase/firestore';
// // // import { firestore } from '../firebase'; // Adjust the path according to your structure

// // // const Allshops = () => {
// // //   const [shops, setShops] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [hoveredShop, setHoveredShop] = useState(null); // State for tracking hovered shop

// // //   useEffect(() => {
// // //     const fetchShops = async () => {
// // //       try {
// // //         const shopCollection = collection(firestore, 'shops');
// // //         const shopSnapshot = await getDocs(shopCollection);
// // //         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //         setShops(shopsData.slice(0, 5)); // Show only the first 5 shops
// // //       } catch (err) {
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchShops();
// // //   }, []);

// // //   if (loading) {
// // //     return <div style={styles.loading}>Loading...</div>;
// // //   }

// // //   if (error) {
// // //     return <div style={styles.error}>Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.title}>Shops Available on MechFinder</h1>
// // //       <p style={styles.infoText}>
// // //         Explore various types of shops registered on MechFinder. These are just some examples of the types of shops you can find. Whether you're looking for electricians, mechanics, or other services, we've got you covered!
// // //       </p>
// // //       <ul style={styles.shopList}>
// // //         {shops.map(shop => (
// // //           <li
// // //             key={shop.id}
// // //             style={hoveredShop === shop.id ? { ...styles.shopItem, ...styles.shopItemHover } : styles.shopItem}
// // //             onMouseEnter={() => setHoveredShop(shop.id)}
// // //             onMouseLeave={() => setHoveredShop(null)}
// // //           >
// // //             <div
// // //               style={{
// // //                 ...styles.backgroundImage,
// // //                 backgroundImage: `url(${shop.profileImageUrl && shop.profileImageUrl[0]})`,
// // //               }}
// // //             />
// // //             <div style={hoveredShop === shop.id ? { ...styles.overlay, ...styles.overlayHover } : styles.overlay}>
// // //               <h2 style={hoveredShop === shop.id ? { ...styles.shopName, ...styles.shopNameHover } : styles.shopName}>
// // //                 {shop.shopName}
// // //               </h2>
// // //               <div style={hoveredShop === shop.id ? { ...styles.shopDetails, ...styles.shopDetailsHover } : styles.shopDetails}>
// // //                 <p><strong>Type:</strong> {shop.shopType}</p>
// // //                 <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
// // //                 <p><strong>Email:</strong> {shop.email}</p>
// // //                 <p><strong>Location:</strong> {shop.location}</p>
// // //               </div>
// // //             </div>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // // Updated styles with blur background, text overlay, and hover effect
// // // const styles = {
// // //   container: {
// // //     maxWidth: '100%',
// // //     margin: '0 auto',
// // //     padding: '20px',
// // //     background: 'linear-gradient(135deg, #f0f4f8, #c4d7e1)',
// // //     borderRadius: '10px',
// // //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
// // //     color: '#333',
// // //   },
// // //   title: {
// // //     textAlign: 'center',
// // //     marginBottom: '20px',
// // //     color: '#1d3557',
// // //     fontSize: '36px',
// // //     fontWeight: '700',
// // //     textTransform: 'uppercase',
// // //   },
// // //   infoText: {
// // //     textAlign: 'center',
// // //     fontSize: '18px',
// // //     marginBottom: '30px',
// // //     color: '#6c757d',
// // //     lineHeight: '1.8',
// // //   },
// // //   shopList: {
// // //     listStyleType: 'none',
// // //     padding: 0,
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '20px',
// // //     justifyContent: 'center',
// // //   },
// // //   shopItem: {
// // //     flex: '1 1 calc(33% - 40px)',
// // //     minWidth: '300px',
// // //     borderRadius: '12px',
// // //     padding: '20px',
// // //     margin: '0 10px',
// // //     height: '300px',
// // //     position: 'relative',
// // //     overflow: 'hidden',
// // //     backgroundSize: 'cover',
// // //     backgroundPosition: 'center',
// // //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // //     transition: 'all 0.4s ease',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // //   backgroundImage: {
// // //     position: 'absolute',
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     zIndex: 1,
// // //     backgroundSize: 'cover',
// // //     backgroundPosition: 'center',
// // //     filter: 'blur(3px)', // Blur effect
// // //     transform: 'scale(1.1)', // Slightly larger background to avoid edges showing
// // //   },
// // //   overlay: {
// // //     position: 'relative',
// // //     zIndex: 2,
// // //     color: '#fff',
// // //     textAlign: 'center',
// // //     padding: '20px',
// // //     background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
// // //     opacity: 0.8,
// // //     transition: 'opacity 0.5s ease',
// // //   },
// // //   overlayHover: {
// // //     opacity: 1,
// // //     background: 'rgba(0, 0, 0, 0.6)', // Darker on hover
// // //   },
// // //   shopName: {
// // //     fontSize: '26px',
// // //     color: '#fff',
// // //     marginBottom: '15px',
// // //     cursor: 'pointer',
// // //     transition: 'color 0.3s, text-shadow 0.3s',
// // //   },
// // //   shopNameHover: {
// // //     color: '#F4A261',
// // //     textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)', // Add text shadow on hover
// // //   },
// // //   shopDetails: {
// // //     marginBottom: '10px',
// // //     transition: 'opacity 0.4s ease, transform 0.4s ease', // Smooth transition for details
// // //     opacity: 0,
// // //     transform: 'translateY(10px)', // Move up slightly on hover
// // //   },
// // //   shopDetailsHover: {
// // //     opacity: 1,
// // //     transform: 'translateY(0)', // Reset position
// // //   },
// // //   loading: {
// // //     textAlign: 'center',
// // //     fontSize: '18px',
// // //     color: '#333',
// // //   },
// // //   error: {
// // //     textAlign: 'center',
// // //     color: 'red',
// // //   },
// // // };

// // // export default Allshops;


// // import React, { useEffect, useState } from 'react';
// // import { collection, getDocs } from 'firebase/firestore';
// // import { firestore } from '../firebase'; // Adjust the path according to your structure

// // const Allshops = () => {
// //   const [shops, setShops] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [hoveredShop, setHoveredShop] = useState(null); // State for tracking hovered shop

// //   useEffect(() => {
// //     const fetchShops = async () => {
// //       try {
// //         const shopCollection = collection(firestore, 'shops');
// //         const shopSnapshot = await getDocs(shopCollection);
// //         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setShops(shopsData.slice(0, 5)); // Show only the first 5 shops
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchShops();
// //   }, []);

// //   if (loading) {
// //     return <div style={styles.loading}>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div style={styles.error}>Error: {error}</div>;
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.title}>Shops Available on MechFinder</h1>
// //       <p style={styles.infoText}>
// //         Explore various types of shops registered on MechFinder. These are just some examples of the types of shops you can find. Whether you're looking for electricians, mechanics, or other services, we've got you covered!
// //       </p>
// //       <ul style={styles.shopList}>
// //         {shops.map(shop => (
// //           <li
// //             key={shop.id}
// //             style={hoveredShop === shop.id ? { ...styles.shopItem, ...styles.shopItemHover } : styles.shopItem}
// //             onMouseEnter={() => setHoveredShop(shop.id)}
// //             onMouseLeave={() => setHoveredShop(null)}
// //           >
// //             <div
// //               style={{
// //                 ...styles.backgroundImage,
// //                 backgroundImage: `url(${shop.profileImageUrl && shop.profileImageUrl[0]})`,
// //               }}
// //             />
// //             <div style={hoveredShop === shop.id ? { ...styles.overlay, ...styles.overlayHover } : styles.overlay}>
// //               <h2 style={hoveredShop === shop.id ? { ...styles.shopName, ...styles.shopNameHover } : styles.shopName}>
// //                 {shop.shopName}


// //               </h2>

// //               <div style={styles.imageGallery}>
// //               {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
// //                 <img key={index} src={url} alt={`Shop Image ${index + 1}`} style={styles.galleryImage} />
// //               ))}
// //             </div>



// //               <div style={hoveredShop === shop.id ? { ...styles.shopDetails, ...styles.shopDetailsHover } : styles.shopDetails}>

// //                 <p><strong>Type:</strong> {shop.shopType}</p>
// //                 <p><strong>Contact Number:</strong> {shop.contactNumber}</p>
// //                 <p><strong>Email:</strong> {shop.email}</p>
// //                 <p><strong>Location:</strong> {shop.location}</p>
// //               </div>

// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // // Updated styles with blur background, text overlay, and hover effect
// // const styles = {
// //   container: {
// //     maxWidth: '100%',
// //     margin: '0 auto',
// //     padding: '20px',
// //     background: 'linear-gradient(135deg, #f0f4f8, #c4d7e1)',
// //     borderRadius: '10px',
// //     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
// //     color: '#333',
// //   },
// //   title: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //     color: '#1d3557',
// //     fontSize: '36px',
// //     fontWeight: '700',
// //     textTransform: 'uppercase',
// //   },
// //   infoText: {
// //     textAlign: 'center',
// //     fontSize: '18px',
// //     marginBottom: '30px',
// //     color: '#6c757d',
// //     lineHeight: '1.8',
// //   },
// //   imageGallery: {
// //     display: 'flex',
// //     gap: '30px',
// //     marginTop: '10px',
// //     justifyContent: 'center',
// //     zIndex: 2,
// //   },
// //   galleryImage: {
// //     width: '100px',
// //     height: '100px',
// //     borderRadius: '8px',
// //     objectFit: 'cover',
// //     border: '2px solid #007BFF',
// //   },
// //   shopList: {
// //     listStyleType: 'none',
// //     padding: 0,
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '20px',
// //     justifyContent: 'center',
// //   },
// //   shopItem: {
// //     flex: '1 1 calc(33% - 40px)',
// //     minWidth: '300px',
// //     borderRadius: '12px',
// //     padding: '20px',
// //     margin: '0 10px',
// //     height: '300px',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //     transition: 'all 0.4s ease',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   backgroundImage: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     zIndex: 1,
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     filter: 'blur(3px)', // Blur effect
// //     transform: 'scale(1.1)', // Slightly larger background to avoid edges showing
// //   },
// //   overlay: {
// //     position: 'relative',
// //     zIndex: 2,
// //     color: '#fff',
// //     textAlign: 'center',
// //     padding: '20px',
// //     background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
// //     opacity: 0.8,
// //     transition: 'opacity 0.5s ease',
// //   },
// //   overlayHover: {
// //     opacity: 1,
// //     background: 'rgba(0, 0, 0, 0.6)', // Darker on hover
// //   },
// //   shopName: {
// //     fontSize: '26px',
// //     color: '#fff',
// //     marginBottom: '15px',
// //     cursor: 'pointer',
// //     transition: 'color 0.3s, text-shadow 0.3s',
// //   },
// //   shopNameHover: {
// //     color: '#F4A261',
// //     textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)', // Add text shadow on hover
// //   },
// //   shopDetails: {
// //     marginBottom: '10px',
// //     transition: 'opacity 0.4s ease, transform 0.4s ease', // Smooth transition for details
// //     opacity: 0,
// //     transform: 'translateY(10px)', // Move up slightly on hover
// //   },
// //   shopDetailsHover: {
// //     opacity: 1,
// //     transform: 'translateY(0)', // Reset position
// //   },
// //   loading: {
// //     textAlign: 'center',
// //     fontSize: '18px',
// //     color: '#333',
// //   },
// //   error: {
// //     textAlign: 'center',
// //     color: 'red',
// //   },
// // };

// // export default Allshops;



// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from '../firebase'; // Adjust the path according to your structure

// const Allshops = () => {
//   const [shops, setShops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hoveredShop, setHoveredShop] = useState(null); // Track hovered shop
//   const [selectedImage, setSelectedImage] = useState(null); // Track selected image for modal

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const shopCollection = collection(firestore, 'shops');
//         const shopSnapshot = await getDocs(shopCollection);
//         const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setShops(shopsData); // Show all shops
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShops();
//   }, []);

//   const handleImageClick = (url) => {
//     setSelectedImage(url); // Set the clicked image URL
//   };

//   const closeModal = () => {
//     setSelectedImage(null); // Clear the selected image
//   };

//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   if (error) {
//     return <div style={styles.error}>Error: {error}</div>;
//   }

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Shops Available on MechFinder</h1>
//       <p style={styles.infoText}>
//         Explore various types of shops registered on MechFinder. These are just some examples of the types of shops you can find. Whether you're looking for electricians, mechanics, or other services, we've got you covered!
//       </p>
//       <ul style={styles.shopList}>
//         {shops.map(shop => (
//           <li
//             key={shop.id}
//             style={styles.shopItem}
//             onMouseEnter={() => setHoveredShop(shop.id)} // Set hovered shop on enter
//             onMouseLeave={() => setHoveredShop(null)} // Clear hovered shop on leave
//           >
//             <div
//               style={{
//                 ...styles.backgroundImage,
//                 backgroundImage: `url(${shop.profileImageUrl && shop.profileImageUrl[0]})`,
//               }}
//             />
//             <div style={styles.overlay}>
//               <h2 style={styles.shopName}>{shop.shopName}</h2>
//               <p style={styles.shopType}><strong>Type:</strong> {shop.shopType}</p>
//               <p style={styles.shopContact}><strong>Contact Number:</strong> {shop.contactNumber}</p>
//               <p style={styles.shopEmail}><strong>Email:</strong> {shop.email}</p>
//               <p style={styles.shopLocation}><strong>Location:</strong> {shop.location}</p>
//               <div>
//                 <strong>Images:</strong>
//                 <div style={styles.images}>
//                   {shop.profileImageUrl && shop.profileImageUrl.map((url, index) => (
//                     <img
//                       key={index}
//                       src={url}
//                       alt={`Shop Image ${index + 1}`}
//                       style={hoveredShop === shop.id ? { ...styles.image, ...styles.imageHover } : styles.image}
//                       onClick={() => handleImageClick(url)} // Show modal on image click
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {selectedImage && ( // Modal for displaying the enlarged image
//         <div style={styles.modalOverlay} onClick={closeModal}>
//           <div style={styles.modalContent}>
//             <img src={selectedImage} alt="Enlarged" style={styles.enlargedImage} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Styles for the Allshops component
// const styles = {
//   container: {
//     maxWidth: '100%',
//     margin: '0 auto',
//     padding: '20px',
//     background: 'linear-gradient(135deg, #f0f4f8, #c4d7e1)',
//     borderRadius: '10px',
//     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
//     color: '#333',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#1d3557',
//     fontSize: '36px',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
//   infoText: {
//     textAlign: 'center',
//     fontSize: '18px',
//     marginBottom: '30px',
//     color: '#6c757d',
//     lineHeight: '1.8',
//   },
//   shopList: {
//     listStyleType: 'none',
//     padding: 0,
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
//   shopItem: {
//     flex: '1 1 calc(25% - 40px)', // Adjust width to fit 4 cards per row
//     minWidth: '250px', // Set a minimum width for cards
//     borderRadius: '12px',
//     padding: '20px',
//     margin: '0 10px',
//     position: 'relative',
//     overflow: 'hidden',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for smooth hover effect
//   },
//   backgroundImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 1,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     filter: 'blur(8px)',
//     transform: 'scale(1.1)',
//   },
//   overlay: {
//     position: 'relative',
//     zIndex: 2,
//     color: '#fff',
//     textAlign: 'left',
//     padding: '20px',
//     background: 'rgba(0, 0, 0, 0.4)',
//   },
//   shopName: {
//     fontSize: '26px',
//     marginBottom: '10px',
//   },
//   shopType: {
//     fontSize: '18px',
//   },
//   shopContact: {
//     fontSize: '16px',
//   },
//   shopEmail: {
//     fontSize: '16px',
//   },
//   shopLocation: {
//     fontSize: '16px',
//   },
//   images: {
//     display: 'flex',
//     gap: '10px',
//     marginTop: '10px',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '8px',
//     objectFit: 'cover',
//     border: '2px solid #007BFF',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     cursor: 'pointer', // Change cursor to pointer on hover
//   },
//   imageHover: {
//     transform: 'scale(1.1)', // Scale image on hover
//     boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)', // Add hover shadow effect
//   },
//   loading: {
//     textAlign: 'center',
//     fontSize: '18px',
//     color: '#333',
//   },
//   error: {
//     textAlign: 'center',
//     color: 'red',
//   },
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//   },
//   modalContent: {
//     position: 'relative',
//   },
//   enlargedImage: {
//     maxWidth: '90%',
//     maxHeight: '90%',
//     borderRadius: '8px',
//   },
// };

// // Apply hover effects directly in the JSX
// export default Allshops;


import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase'; // Adjust the path according to your structure

const Allshops = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null); // Track selected shop for modal

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const shopCollection = collection(firestore, 'shops');
        const shopSnapshot = await getDocs(shopCollection);
        const shopsData = shopSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setShops(shopsData); // Show all shops
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
    const email = localStorage.getItem('userEmail');
    if (email) {
      console.log(`The email stored in localStorage is: ${email}`);
    } else {
      console.log('No email found in localStorage.');
    }
  }, []);
  // Get the email from localStorage and log it to the console



  const handleCardClick = (shop) => {
    setSelectedShop(shop); // Set the clicked shop for modal
  };

  const closeModal = () => {
    setSelectedShop(null); // Clear the selected shop
  };

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shops Available on MechFinder</h1>
      <p style={styles.infoText}>
        Explore various types of shops registered on MechFinder. These are just some examples of the types of shops you can find. Whether you're looking for electricians, mechanics, or other services, we've got you covered!
      </p>
      <ul style={styles.shopList}>
        {shops.map(shop => (
          <li
            key={shop.id}
            style={styles.shopItem}
            onClick={() => handleCardClick(shop)} // Show modal on card click
          >
            <div
              style={{
                ...styles.backgroundImage,
                backgroundImage: `url(${shop.profileImageUrl && shop.profileImageUrl[0]})`,
              }}
            />
            <div style={styles.overlay}>
              <h2 style={styles.shopName}>{shop.shopName}</h2>
              <p style={styles.shopType}><strong>Type:</strong> {shop.shopType}</p>
              <div style={styles.images}>
                {shop.profileImageUrl && shop.profileImageUrl.slice(0, 2).map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Shop Image ${index + 1}`}
                    style={styles.image}
                  />
                ))}

              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedShop && ( // Modal for displaying the detailed information of the selected shop
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent}>
            <h2>{selectedShop.shopName}</h2>
            <p><strong>Type:</strong> {selectedShop.shopType}</p>
            <p><strong>Contact Number:</strong> {selectedShop.contactNumber}</p>
            <p><strong>Email:</strong> {selectedShop.email}</p>
            <p><strong>Location:</strong> {selectedShop.location}</p>
            <div>
              <strong>Images:</strong>
              <div style={styles.images}>
                {selectedShop.profileImageUrl && selectedShop.profileImageUrl.slice(0, 2).map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Shop Image ${index + 1}`}
                    style={styles.modalImage} // Use smaller size for modal images
                  />
                ))}
              </div>
            </div>
            <button style={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the Allshops component
const styles = {
  container: {

    maxWidth: '100%',
    margin: '0 auto',
    padding: '30px',
    // backgroundColor: '#4787bc4b', // Light blue background for the whole container
    background: 'linear-gradient(to bottom, #4b97ce3a, #13286731)',
    color: '#1d3557', // Dark blue text
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1d3557', // Dark blue title
    fontSize: '36px',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  infoText: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '30px',
    color: '#6c757d', // Gray text
    lineHeight: '1.8',
  },
  shopList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
  },
  shopItem: {
    flex: '1 1 calc(25% - 40px)', // Adjust width to fit 4 cards per row
    minWidth: '300px', // Set a minimum width for cards
    borderRadius: '12px',
    padding: '20px',
    margin: '0 10px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer', // Change cursor to pointer on hover
    backgroundColor: '#ffffff', // White background for cards
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(3px)',
    transform: 'scale(1.1)',
  },
  overlay: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'left',
    padding: '20px',
    background: 'rgba(30, 91, 156, 0.7)', // Dark blue with transparency for overlay
  },
  shopName: {
    fontSize: '26px',
    marginBottom: '10px',
  },
  shopType: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  images: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
    justifyContent: 'center',
  },
  image: {
    width: '100px', // Smaller size for card images
    height: '100px',
    borderRadius: '5px',
    objectFit: 'cover',
    border: '2px solid #007BFF', // Blue border for images
    transition: 'transform 0.3s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#333',
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    color: '#fff',
    padding: '20px',
    background: '#1d3557', // Dark blue background for modal
    borderRadius: '8px',
    maxWidth: '600px',
    width: '90%',
  },
  modalImage: {
    width: '120px', // Smaller size for card images
    height: '170px',
    borderRadius: '5px',
    objectFit: 'cover',
    margin: '5px',
  },
  closeButton: {
    marginTop: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF', // Blue button
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Allshops;
