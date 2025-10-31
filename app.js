document.addEventListener('DOMcontentLoaded', function () {
//Initialize the add to home screen
  window.AddToHomeScreenInstance = window.AddToHomeScreen({
      appName: 'Nft-Demo',
      appNameDisplay: 'standalone',
      appIconUrl: 'apple-touch-icon.png',
      assetUrl: 'https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.91/dist/assets/img/',
      maxModalDisplayCount: 3,
      displayOptions: { showMobile: true, showDesktop: true }
  });

      window.AddToHomeScreenInstance.show('en');

      window.resetInstallPrompt = function () {
      window.AddToHomeScreenInstance.clearModalDisplayCount();
      alert('Install prompt reset. Reload the page to test again.');
      };
});
