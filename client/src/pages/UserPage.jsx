import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post1.png"
        postTitle="Let's talk"
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post2.png"
        postTitle="Let's talk"
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg="/post3.png"
        postTitle="Let's talk"
      />
      <UserPost likes={1200} replies={481} postTitle="first talk" />
    </>
  );
};

export default UserPage;
