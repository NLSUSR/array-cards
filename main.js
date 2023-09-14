const data = await (async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      return res.data.slice(0, 100);
    });
})();
