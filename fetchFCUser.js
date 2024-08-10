const fetchFCUser = async (address) => {
  try {
    const addressParam =
      Array.isArray(address) && address.length > 1
        ? address.join("%2")
        : address;

    const url = `http://localhost:3000/api/getFCuser?address=${addressParam}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key":
          "bc21be10b042875430edf454b4f50604a19789c5ae4478ea68ef7eb973246a3b",
      },
      credentials: "include",
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
