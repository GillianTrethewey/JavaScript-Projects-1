const [isLoading, setIsLoading] = useState(false);

const doFetch = async () => {
  setIsLoading = true;
  const response = await fetch("url");
  const data = await response.json();
  setStarWars(data);
  setIsLoading(false);
};

const doFetch1 = () => {
  fetch("url")
    .then((response) => {
      if (Response.ok) {
        (response) => response.json();
      }
    })
    .then((data) => console.log(data));
};
