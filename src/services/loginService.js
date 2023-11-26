exports.signInWithMagicalCode = async () => {
  const magicalCodeResponse = await fetch(`https://localhost:3000`);
  const magicalCodeResponseData = await magicalCodeResponse.json();
  return magicalCodeResponseData;
};