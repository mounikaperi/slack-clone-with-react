exports.signInWithMagicalCode = async () => {
  const magicalCodeResponse = await fetch(`https://localhost:3000`);
  const magicalCodeResponseData = await magicalCodeResponse.json();
  return magicalCodeResponseData;
};

// const handleApiRequest = async () => {
//   try {
//     // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your Postman API
//     const response = await fetch('YOUR_API_ENDPOINT', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any other headers required by your API
//       },
//       body: JSON.stringify({ code }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       // Assuming the API response is an object with some data
//       setApiResponse(data);
//     } else {
//       // Handle error cases
//       console.error('API request failed:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error during API request:', error);
//   }
// };
