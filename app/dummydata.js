export default {
  services: [
    {
      name: "Video Shoutout",
      totalCount: 23,
      pending: 15,
    },
    {
      name: "Video Call",
      totalCount: 23,
      pending: 15,
    },
    {
      name: "Conferencing",
      totalCount: 23,
      pending: 15,
    },
    {
      name: "Review",
      totalCount: 23,
      pending: 15,
    },
    {
      name: "Comment",
      totalCount: 23,
      pending: 15,
    },
    {
      name: "Messaging",
      totalCount: 23,
      pending: 15,
    },
  ],
  posts: [
    {
      avatar: require("./assets/avatar.gif"),
      postedBy: "Sayantan Chandra",
      postedOn: "1 hour ago",
      imageUri: "https://picsum.photos/300/200",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      likes: Math.round(Math.random() * 100),
      comments: Math.round(Math.random() * 100),
      views: Math.round(Math.random() * 100),
    },
    {
      avatar: require("./assets/avatar.gif"),
      postedBy: "John smith",
      postedOn: "1 hour ago",
      imageUri: "https://picsum.photos/300/200",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      likes: Math.round(Math.random() * 100),
      comments: Math.round(Math.random() * 100),
      views: Math.round(Math.random() * 100),
    },
  ],
};
