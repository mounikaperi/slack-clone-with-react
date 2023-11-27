const extractStringBetweenTags = (inputString, tagName) => {
  const regex = new RegExp(`<${tagName}>(.*?)</${tagName}>`, 'g');
  return inputString.match(regex)?.map(match => match.replace(`<${tagName}>`, '').replace(`<\/${tagName}>`, '')) || [];
};

export { extractStringBetweenTags }