
let ArrOfStories = [
    {
        storyFile: "https://picsum.photos/300/500?random=1",
        profilePic: "https://i.pravatar.cc/150?img=1",
        UserName: "Ali",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=2",
        profilePic: "https://i.pravatar.cc/150?img=2",
        UserName: "Ahmed",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=3",
        profilePic: "https://i.pravatar.cc/150?img=3",
        UserName: "Usman",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=4",
        profilePic: "https://i.pravatar.cc/150?img=4",
        UserName: "Hamza",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=5",
        profilePic: "https://i.pravatar.cc/150?img=5",
        UserName: "Bilal",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=6",
        profilePic: "https://i.pravatar.cc/150?img=6",
        UserName: "Zain",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=7",
        profilePic: "https://i.pravatar.cc/150?img=7",
        UserName: "Ayan",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=8",
        profilePic: "https://i.pravatar.cc/150?img=8",
        UserName: "Hassan",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=9",
        profilePic: "https://i.pravatar.cc/150?img=9",
        UserName: "Daniyal",
    },
    {
        storyFile: "https://picsum.photos/300/500?random=10",
        profilePic: "https://i.pravatar.cc/150?img=10",
        UserName: "Saad",
    },
];
// const postVideos = [
//     {
//         profilePic: "https://i.pravatar.cc/150?img=1",
//         userName: "Ali",
//         uploadTime: "2h",
//         description: "Aaj ka vlog 💙",
//         uploadVideo: "https://picsum.photos/400/600?random=1",
//         reaction: 120,
//         comment: 35,
//         share: 10,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=2",
//         userName: "Ahmed",
//         uploadTime: "4h",
//         description: "Coding grind 🔥",
//         uploadVideo: "https://picsum.photos/400/600?random=2",
//         reaction: 89,
//         comment: 22,
//         share: 6,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=3",
//         userName: "Usman",
//         uploadTime: "6h",
//         description: "Evening vibes 🌇",
//         uploadVideo: "https://picsum.photos/400/600?random=3",
//         reaction: 200,
//         comment: 50,
//         share: 18,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=4",
//         userName: "Hamza",
//         uploadTime: "1d",
//         description: "Gym time 💪",
//         uploadVideo: "https://picsum.photos/400/600?random=4",
//         reaction: 310,
//         comment: 72,
//         share: 40,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=5",
//         userName: "Bilal",
//         uploadTime: "1d",
//         description: "Road trip 🚗",
//         uploadVideo: "https://picsum.photos/400/600?random=5",
//         reaction: 145,
//         comment: 28,
//         share: 12,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=6",
//         userName: "Zain",
//         uploadTime: "2d",
//         description: "Chill day 😌",
//         uploadVideo: "https://picsum.photos/400/600?random=6",
//         reaction: 76,
//         comment: 14,
//         share: 4,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=7",
//         userName: "Ayan",
//         uploadTime: "2d",
//         description: "Learning JS 🚀",
//         uploadVideo: "https://picsum.photos/400/600?random=7",
//         reaction: 98,
//         comment: 19,
//         share: 7,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=8",
//         userName: "Hassan",
//         uploadTime: "3d",
//         description: "Sunset view 🌅",
//         uploadVideo: "https://picsum.photos/400/600?random=8",
//         reaction: 260,
//         comment: 60,
//         share: 25,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=9",
//         userName: "Daniyal",
//         uploadTime: "3d",
//         description: "Street food 😋",
//         uploadVideo: "https://picsum.photos/400/600?random=9",
//         reaction: 180,
//         comment: 44,
//         share: 20,
//     },
//     {
//         profilePic: "https://i.pravatar.cc/150?img=10",
//         userName: "Saad",
//         uploadTime: "4d",
//         description: "Weekend fun 🎉",
//         uploadVideo: "https://picsum.photos/400/600?random=10",
//         reaction: 95,
//         comment: 16,
//         share: 5,
//     },
// ];


// let localLast = document.getElementById("localNameLast")



const getDataName = () => {
    let localFirst = document.getElementById("userName")

    let getData = JSON.parse(localStorage.getItem("currentUser"))

    localFirst.innerHTML = `
                   ${getData.name} ${getData.lastNaam}
    `
}

getDataName()


function logOut() {
    const logOutUser = localStorage.removeItem("currentUser")
    window.location.href = "../login/login.html"
}
const storyContainer = document.getElementById("story-container");

// const createStoryHTML = () => {
//     for (let i = 0; i < ArrOfStories.length; i++) {
//         const story = ArrOfStories[i];
//         const storyHTML = ` <div class="story"
//                             style="background-image: url(${story.storyFile});">

//                             <div class="profile-pic">
//                                 <img src="${story.profilePic}"
//                                     alt="">
//                             </div>

//                             <div class="story-content">
//                                 <p>${story.UserName}</p>
//                             </div>
//                         </div>`;

//         storyContainer.innerHTML += storyHTML;
//     }
// };

// createStoryHTML()


const postStory = () => {

    const returnArr = ArrOfStories.map((story, index) => {
        return ` <div class="story"
                           style="background-image: url(${story.storyFile});">
                           <div class="profile-pic">
                               <img src="${story.profilePic}"
                                   alt="">
                           </div>
                           <div class="story-content">
                               <p>${story.UserName}</p>
                           </div>
                       </div>`
    })
    storyContainer.innerHTML = returnArr.join("")

}
postStory()



// const uploadVideo = () => {
//     for (let i = 0; i < postVideos.length; i++) {
//         let post = postVideos[i]
//         const postHTML = ` <div class="post">
//                             <div class="post-header">
//                                 <div class="profile-content">
//                                     <div class="profile-pic">
//                                         <img src="${post.profilePic}" alt="">
//                                     </div>
//                                     <div class="post-user-detail">
//                                         <p id="name">${post.userName}</p>
//                                         <p>${post.uploadTime}</p>
//                                     </div>
//                                 </div>
//                                 <div class="post-icons">
//                                     <i class="fa-solid fa-ellipsis"></i>
//                                     <i class="fa-solid fa-xmark" onclick="re(this)"></i>
//                                 </div>
//                             </div>
//                             <div class="post-caption">
//                                 <p>${post.description}</p>
//                             </div>
//                             <div class="post-image">
//                                 <img src="${post.uploadVideo}" alt="">
//                             </div>
//                             <div class="post-reactions">
//                                 <div>
//                                     <i class="fa-solid fa-thumbs-up"></i>
//                                     <i class="fa-regular fa-face-grin-beam-sweat"></i>
//                                     <p>${post.reaction}</p>
//                                 </div>
//                                 <div>
//                                     <p>${post.comment} comments</p>
//                                     <p>${post.share} share</p>
//                                 </div>
//                             </div>
//                             <div class="post-footer">
//                                 <div>
//                                     <i class="fa-regular fa-thumbs-up"></i> Like
//                                 </div>
//                                 <div>
//                                     <i class="fa-regular fa-comment"></i> Comment
//                                 </div>
//                                 <div>
//                                     <i class="fa-regular fa-share-from-square"></i> Share
//                                 </div>
//                             </div>
//                         </div> --> `
//         postID.innerHTML += postHTML
//     }
// }

const postID = document.getElementById("post-container")

const uploadVideo = () => {
    const postWaleLog = JSON.parse(localStorage.getItem("postsVideos"))
    const returnArr = postWaleLog?.map((post) => {
        return `
        <div class="post">
                             <div class="post-header">
                                 <div class="profile-content">
                                     <div class="profile-pic">
                                         <img src="${post.profilePic}" alt="">
                                     </div>
                                     <div class="post-user-detail">
                                         <p id="name">${post.userName}</p>
                                         <p>${post.uploadTime}</p>
                                     </div>
                                 </div>
                                 <div class="post-icons">
                                     <i class="fa-solid fa-ellipsis"></i>
                                     <i class="fa-solid fa-xmark" onclick="re(this)"></i>
                                 </div>
                             </div>
                             <div class="post-caption">
                                 <p>${post.description}</p>
                             </div>
                             <div class="post-image">
                                 <img src="${post.uploadVideo}" alt="">
                             </div>
                             <div class="post-reactions">
                                 <div>
                                     <i class="fa-solid fa-thumbs-up"></i>
                                     <i class="fa-regular fa-face-grin-beam-sweat"></i>
                                     <p>${post.reaction}</p>
                                 </div>
                                 <div>
                                     <p>${post.comment} comments</p>
                                     <p>${post.share} share</p>
                                 </div>
                             </div>
                             <div class="post-footer">
                                 <div>
                                     <i class="fa-regular fa-thumbs-up"></i> Like
                                 </div>
                                 <div>
                                     <i class="fa-regular fa-comment"></i> Comment
                                 </div>
                                 <div>
                                     <i class="fa-regular fa-share-from-square"></i> Share
                                 </div>
                             </div>
                         </div> 
        `
    })
    postID.innerHTML = returnArr ? returnArr.join("") : "";
}

uploadVideo()

const createrName = () => {
    let localFirst = document.getElementById("Name")

    let getData = JSON.parse(localStorage.getItem("currentUser"))

    localFirst.innerHTML = `
                   ${getData.name} ${getData.lastNaam}
    `
}

createrName()
let closeCreate = document.getElementById("close")
const closeHide = document.getElementById("show-hide")

closeCreate.addEventListener("click", () => {
    closeHide.style.display = "none"
})

const createVideo = document.getElementById("createVideo")

createVideo.addEventListener("click", () => {
    closeHide.style.display = "flex"
})

// arman24101894@gmail.com

const createPostForm = document.getElementById("show-hide")
createPostForm.addEventListener("submit", (e) => fullInputAndPostVideo(e));

const fullInputAndPostVideo = (e) => {
    e.preventDefault();
    let caption = document.getElementById("desription")
    let imgUrl = document.getElementById("img-url")
    let user = JSON.parse(localStorage.getItem("currentUser"))
    const posts = JSON.parse(localStorage.getItem("postsVideos")) || []
    const newPost =
    {
        profilePic: "https://i.pravatar.cc/150?img=1",
        userName: `${user.name} ${user.lastNaam}`,
        uploadTime: "2h",
        description: caption.value,
        uploadVideo: imgUrl.value,
        reaction: 0,
        comment: 0,
        share: 0,
    }

    posts.unshift(newPost)

    localStorage.setItem("postsVideos", JSON.stringify(posts))

    uploadVideo()
    closeHide.style.display = "none"

    caption.value = ""
    imgUrl.value = ""
}


