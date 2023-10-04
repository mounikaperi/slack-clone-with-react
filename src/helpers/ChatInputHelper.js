const extractStringBetweenTags = (inputString, tagName) => {
  console.log(`inputString: ${inputString}`)
  const regex = new RegExp(`<${tagName}>(.*?)</${tagName}>`, 'g');
  return inputString.match(regex)?.map(match => match.replace(`<${tagName}>`, '').replace(`<\/${tagName}>`, '')) || [];
};

export { extractStringBetweenTags }