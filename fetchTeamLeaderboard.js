const fetchTeamLeaderboard = async () => {
  const toast = document.getElementById("toast-success");
  const playBtn = document.getElementById("start-game");
  playBtn.disabled = true;
  playBtn.style.cursor = "not-allowed";
  playBtn.style.opacity = "0.5";
  toast.classList.remove("hidden");
  toast.style.top = "40px";
  setTimeout(() => {
    toast.style.top = "-3000px";
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 200);
  }, 2000);
  try {
    console.log("token ID", tokenId);
    const gameId = "2329dcdc-a26c-4abd-b7ad-8c3a36b9c502";
    const url = `http://localhost:3000/api/getTeamData?gameId=${gameId}&tokenId=${tokenId}`;
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
    playBtn.disabled = false;
    playBtn.style.cursor = "pointer";
    playBtn.style.opacity = "1";
    console.log("team data", data);

    return data;
  } catch (err) {
    console.log(err);
    playBtn.disabled = false;
    playBtn.style.cursor = "pointer";
    playBtn.style.opacity = "1";
  }
};
