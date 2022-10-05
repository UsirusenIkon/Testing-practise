const capitalized = string => {
  const stringA = string.charAt(0).toUpperCase() + string.slice(1);
  return stringA;
}

module.exports = capitalized;