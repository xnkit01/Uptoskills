let currentIndex = 0;
const stories = document.querySelectorAll('.story');
const totalStories = stories.length;
function showNextStory() {
  currentIndex = (currentIndex + 1) % totalStories; 
  const carousel = document.querySelector('.carousel');
}
setInterval(showNextStory, 3000);
function share(platform) {
  const storyUrl = window.location.href; 

  let shareUrl = '';
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(storyUrl)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(storyUrl)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(storyUrl)}`;
      break;
    case 'whatsapp':
      shareUrl = `https://wa.me/?text=${encodeURIComponent(storyUrl)}`;
      break;
    default:
      alert("Unknown platform");
      return;
  }
  window.open(shareUrl, '_blank', 'width=600, height=400');
}
