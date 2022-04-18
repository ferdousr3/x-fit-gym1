import React from "react";
import Answers from "../../components/Answers/Answers";

const Blog = () => {
  return (
    <div className="container pt-20 mx-auto bg-six">
      <div className="max-w-2xl mx-auto">
        <Answers
          ques="Difference between authorization and authentication"
          ans="In the authentication system, the identity of users is checked for providing the access to the app or website. In the authorization process, a person’s or user’s authorities are checked for accessing the resources he can add or delete with his permission. In the authentication process, the user must be verified. On the other hand, an authorized person is valid and verified. Without authentication or unverified user never access any system its safe data."
        />
        <Answers
          ques="Why are you using firebase? What other options do you have to implement authentication"
          ans="firebase is used for user authentication. If we want to create a won authentication system then it's more costly and has security issues.   firebase solves this problem, firebase is easy to use and more secure. Without Email, Password we can implement social accounts (like Facebook, Linkedin, Twitter, etc ) login, Github, and many more. also, we can use a Microsoft account, Apple ID"
        />
        <Answers
          ques="What other services does firebase provide other than authentication"
          ans="Firebase's main feature is authentication but it provides many services. you can use it as a store database, a real-time database for chatting apps, or for other apps. Deploy your react app or other apps(asp.net core) by its API, but React app you deploy it directly from your computer. it also helps you with game development apps. firebase provides Cloud hosting and Matching learning projects services."
        />
      </div>
    </div>
  );
};

export default Blog;
