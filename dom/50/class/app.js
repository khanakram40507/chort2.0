const reels = [
  {
    username: "Akram Khan",
    likeCount: 15400,
    isLiked: false,
    commentCount: 210,
    caption: "Cricket is an emotion 🏏🔥 #gullycricket",
    video: "./video/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    shareCount: 320,
    isFollowed: false
  },
  {
    username: "Riya Sharma",
    likeCount: 50500,
    isLiked: true,
    commentCount: 840,
    caption: "Sunset vibes hit different 🌅✨",
     video: "./video/2.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 1032,
    isFollowed: true
  },
  {
    username: "Kunal Tech",
    likeCount: 9850,
    isLiked: false,
    commentCount: 132,
    caption: "JavaScript magic in 30 seconds ⚡💻",
     video: "./video/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    shareCount: 255,
    isFollowed: false
  },
  {
    username: "FitLife",
    likeCount: 20300,
    isLiked: true,
    commentCount: 415,
    caption: "No excuses. Just grind 💪🔥",
     video: "./video/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 670,
    isFollowed: true
  },
  {
    username: "TravelWithMe",
    likeCount: 74200,
    isLiked: true,
    commentCount: 1503,
    caption: "Kashmir is heaven on earth ❄💙",
    video: "./video/2.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-94d1e9d529d0",
    shareCount: 1990,
    isFollowed: true
  },
  {
    username: "ComedyAdda",
    likeCount: 110500,
    isLiked: true,
    commentCount: 3200,
    caption: "Try not to laugh challenge😂🔥",
    video: "./video/5.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 2450,
    isFollowed: false
  },
  {
    username: "FoodLover",
    likeCount: 44560,
    isLiked: false,
    commentCount: 780,
    caption: "Chole Bhature hits different 😋",
     video: "./video/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 400,
    isFollowed: false
  },
  {
    username: "NatureView",
    likeCount: 65000,
    isLiked: true,
    commentCount: 1430,
    caption: "Foggy mountains 🏔🌫 feels unreal",
     video: "./video/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1463453091185-61582044d556",
    shareCount: 1530,
    isFollowed: true
  },
  {
    username: "PetStory",
    likeCount: 120300,
    isLiked: true,
    commentCount: 5000,
    caption: "Cutest puppy ever 🐶❤️",
    video: "./video/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    shareCount: 4800,
    isFollowed: true
  },
  {
    username: "DanceFreak",
    likeCount: 91500,
    isLiked: false,
    commentCount: 2600,
    caption: "Hip-hop freestyle 🔥💥",
    video: "./video/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 2100,
    isFollowed: false
  }
];

let sum='';
reels.forEach(function(reel) {
    sum= sum +`  <div class="reel">
                    <video autoplay loop muted src="${reel.video}"></video>

                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1764158156848-0a021ded1fb0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            <h1>${reel.username}</h1>
                            <button>${reel.isFollowed?'unfollow' :'follow'}</button>
                        </div>
                        <p>${reel.caption}</p>
                        
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon">
                            ${reel.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-3-line"></i>'}
                            </h4>
                            <h6>${reel.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${reel.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${reel.shareCount}</h6>
                        </div>

                        <div class="manu">
                            <h4 class="manu-icon"><i class="ri-list-unordered"></i></i></h4>
                        </div>
                        

                    </div>
                </div> `;
});
document.querySelector(".all-reels").innerHTML=sum;