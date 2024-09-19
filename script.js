const followButton = document.querySelector('.actionBtn button');

followButton.addEventListener('click', function(){
    this.innerText = this.innerText === "Follow" ? "Following" : "Follow";
    this.classList.toggle('following');
});