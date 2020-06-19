export default {
  services: [
    {
      name: "Video Shoutout",
      totalCount: 23,
      pending: 15,
      imageUri: require("./assets/orange.png"),
    },
    {
      name: "Video Call",
      totalCount: 56,
      pending: 15,
      imageUri: require("./assets/darkblue.png"),
    },
    {
      name: "Conferencing",
      totalCount: 11,
      pending: 15,
      imageUri: require("./assets/darkviolet.png"),
    },
    {
      name: "Review",
      totalCount: 110,
      pending: 15,
      imageUri: require("./assets/gold.png"),
    },
    {
      name: "Comment",
      totalCount: 11,
      pending: 15,
      imageUri: require("./assets/brick.png"),
    },
    {
      name: "Messaging",
      totalCount: 56,
      pending: 15,
      imageUri: require("./assets/lightviolet.png"),
    },
  ],
  posts: [
    {
      avatar: require("./assets/avatar.gif"),
      postedBy: "Sayantan Chandra",
      postedOn: "1 hour ago",
      imageUri: require("./assets/class_commercial-dance_banner.png"),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...`,
      likes: Math.round(Math.random() * 100),
      comments: Math.round(Math.random() * 100),
      views: Math.round(Math.random() * 100),
    },
    {
      avatar: require("./assets/avatar.gif"),
      postedBy: "John smith",
      postedOn: "1 hour ago",
      imageUri: require("./assets/automotive-background.png"),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...`,
      likes: Math.round(Math.random() * 100),
      comments: Math.round(Math.random() * 100),
      views: Math.round(Math.random() * 100),
    },
  ],
};
