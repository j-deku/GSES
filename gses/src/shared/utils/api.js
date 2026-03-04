const api = () => {
  const url = "http://localhost:5000";
  if (!url) {
    console.error("API URL is not defined");
    return null;
  }
  return url;
};

export default api;
