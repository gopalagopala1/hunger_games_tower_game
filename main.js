const startGame = () => {
  if (gameStart) return;
  if (!walletConnected) {
    nftModalButton.onclick = (e) => {
      e.preventDefault();
    };

    const walletConnectModalContainer =
      document.getElementById("walletConnectModal");
    const walletConnectModal = document.getElementById("walletModal");

    if (walletConnectModalContainer) {
      walletConnectModalContainer.style.display = "flex";
      setTimeout(() => {
        walletConnectModal.style.top = "50%";
      }, 200);
      walletConnectModalContainer.onclick = () => {
        walletConnectModal.style.top = "250%";
        setTimeout(() => {
          walletConnectModalContainer.style.display = "none";
        }, 200);
      };
      walletConnectModal.onclick = (e) => {
        e.preventDefault();
      };

      walletConnectModal.onclick = (e) => {
        e.preventDefault();
      };
    }

    return;
  }
  console.log("is nft present: ", isNFTPresent);
  if (!isNFTPresent) {
    const nftModal = document.getElementById("nftNotFoundContainer");
    const notFoundModal = document.getElementById("notFoundModal");

    if (nftModal) {
      nftModal.style.display = "flex";
      setTimeout(() => {
        notFoundModal.style.top = "50%";
      }, 200);
      nftModal.onclick = () => {
        notFoundModal.style.top = "250%";
        setTimeout(() => {
          nftModal.style.display = "none";
        }, 200);
      };

      notFoundModal.onclick = (e) => {
        e.preventDefault();
      };
      const connect = document.getElementById("connect-again");
      if (connect) {
        connect.onclick = () => {
          notFoundModal.style.top = "250%";
          setTimeout(() => {
            nftModal.style.display = "none";
          }, 200);
          toggleWalletSelectionModal(true);
        };
      }
    }

    return;
  }

  if (isPlayerDead) {
    const deadModalContainer = document.getElementById("deadmodalcontainer");
    const playerdeadmodal = document.getElementById("deadmodal");

    if (deadModalContainer) {
      deadModalContainer.style.display = "flex";
      setTimeout(() => {
        playerdeadmodal.style.top = "50%";
      }, 200);
      deadModalContainer.onclick = () => {
        playerdeadmodal.style.top = "250%";
        setTimeout(() => {
          deadModalContainer.style.display = "none";
        }, 200);
      };

      playerdeadmodal.onclick = (e) => {
        e.preventDefault();
      };
      const connect = document.getElementById("connect-again-dead");
      if (connect) {
        connect.onclick = (e) => {
          e.preventDefault();
          playerdeadmodal.style.top = "250%";
          setTimeout(() => {
            deadModalContainer.style.display = "none";
          }, 200);
          toggleWalletSelectionModal(true);
        };
      }
    }

    return;
  }

  gameStart = true;
  setTimeout(function () {
    game.playBgm();
  });
  indexHide();
  setTimeout(game.start, 400);
};

document.addEventListener("DOMContentLoaded", async function () {
  // open nft not found modal handling
  const nftModalButton = document.getElementById("nftModalButton");
  if (nftModalButton) {
    document
      .getElementById("nftModalButton")
      .addEventListener("click", onButtonClick);
  }

  //  handling hero text and button text change
  const textContainer = document.getElementsByClassName("side-panel-header");
  const playButtonElement = document.getElementById("start-game");

  if (!walletConnected && textContainer && playButtonElement) {
    textContainer[0].innerHTML = `
      Get as <br />
      Higher↑ <br />
      as you can!
      `;

    playButtonElement.textContent = "Connect Wallet to play";
  }

  const walletBtn = document.getElementById("walletButton");
  const walletBtnText = document.getElementById("walletAddress");

  if (playButtonElement) {
    console.log("signignign");

    playButtonElement.addEventListener("click", startGame);
  }

  if (selectedAccount) {
    walletBtnText.innerText =
      selectedAccount.slice(0, 5) + "..." + selectedAccount.slice(-4);

    const textContainer = document.getElementsByClassName("side-panel-header");

    if (textContainer && playButtonElement) {
      textContainer[0].innerHTML = `
        Your score is
        <span id="top-score" class="font-Kangmas font-bold">${0}</span>! Can be
        Higher↑`;

      playButtonElement.textContent = "Play game";
      walletConnected = true;
    }
  } else {
    const logout = document.getElementsByClassName("log-out")[0];
    walletBtnText.innerText = "Connect Wallet";
    logout.style.display = "none";
    walletBtn.onclick = () => {
      toggleWalletSelectionModal(true);
    };

    const leaderboardTeam = document.getElementById("leaderboard-team-id");
    const leaderboardTeamBody = document.getElementById("leaderboard-body");
    leaderboardTeam.classList.add("hide");
    leaderboardTeamBody.style.height = "calc(100vh - 550px)";
    leaderboardTeamBody.style.maxHeight = "calc(100vh - 550px)";
    const teamTab = document.getElementById("team-tab");
    teamTab.style.display = "none";
  }

  if (window.location.href.includes("playagain")) {
    setTimeout(() => {
      indexHide();
      startGame();
      const actionImg = document.getElementsByClassName("landing")[0];
      actionImg.style.display = "none";
    }, 200);
  }
});
