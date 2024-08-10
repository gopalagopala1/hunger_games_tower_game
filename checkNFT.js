const checkNFT = async (address) => {
  try {
    const addresses =
      Array.isArray(address) && address.length > 1 ? address : [address];

    const url = `http://localhost:3000/api/checkNFT`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key":
          "bc21be10b042875430edf454b4f50604a19789c5ae4478ea68ef7eb973246a3b",
      },
      credentials: "include",
      body: JSON.stringify({
        addresses: addresses,
      }),
    };

    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
