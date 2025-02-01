function checkIfWalletIsConnected() {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    ethereum.request({ method: 'eth_accounts' })
      .then(accounts => {
        if (accounts.length > 0) {
          console.log('Wallet is connected!');
        } else {
          console.log('Wallet is not connected.');
        }
      })
      .catch(error => {
        console.error('Error checking for accounts:', error);
      });
  } else {
    console.log('MetaMask is not installed!');
  }
}
