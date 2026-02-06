
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

    const returnArr = ArrOfStories.map((story,index) => {
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
