// import { useEffect, useState } from 'react';


// const usePricing = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://www.secure.manuscriptedit.com/api/price_table.php'); 
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
// console.log(data)

//         setServices(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { services, loading, error };
// };

// export default usePricing;
