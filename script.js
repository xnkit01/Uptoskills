function selectMode(mode) {
  const onlineOption = document.getElementById('online');
  const offlineOption = document.getElementById('offline');

  if (mode === 'online') {
      onlineOption.classList.add('active');
      offlineOption.classList.remove('active');
  } else {
      offlineOption.classList.add('active');
      onlineOption.classList.remove('active');
  }
}
