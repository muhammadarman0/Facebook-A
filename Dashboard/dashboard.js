const storyArray = [
    {
        fullname: "Muhammad Arman",
        profilePic: "https://i.pravatar.cc/100?img=1",
        storyImg: "https://picsum.photos/300/500?random=1"
    },
    {
        fullname: "Ali Khan",
        profilePic: "https://i.pravatar.cc/100?img=2",
        storyImg: "https://picsum.photos/300/500?random=2"
    },
    {
        fullname: "Sara Ahmed",
        profilePic: "https://i.pravatar.cc/100?img=3",
        storyImg: "https://picsum.photos/300/500?random=3"
    }, {
        fullname: "Zain Malik",
        profilePic: "https://i.pravatar.cc/100?img=10",
        storyImg: "https://picsum.photos/300/500?random=10"
    },
    {
        fullname: "Hira Shah",
        profilePic: "https://i.pravatar.cc/100?img=11",
        storyImg: "https://picsum.photos/300/500?random=11"
    },
];

console.log(storyArray);

let storyCont = document.getElementById("story-items")



for (let i = 0; i < storyArray.length; i++) {
    const storyItmes = () => {
        const story = storyArray[i]

        let itemsAddStoryAnother = `  <div class="contain-stories"
                            style="background-image: url(${story.storyImg});">
                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                                <div class="story-text">
                                    <p>${story.fullname}</p>
                                </div>
                            </div>
                        </div>`
        storyCont.innerHTML += itemsAddStoryAnother
    }
    storyItmes()
}