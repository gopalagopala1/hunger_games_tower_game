const fetchLeaderBoard = async () => {
  try {
    const gameId = "2329dcdc-a26c-4abd-b7ad-8c3a36b9c502";

    const url = `http://localhost:3000/api/avgTeamScore?gameId=${gameId}`;
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
