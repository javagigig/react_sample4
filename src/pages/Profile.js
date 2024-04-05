import React, { useState, useEffect } from 'react';
import Post from '../components/Menu';
import './Profile.css'; // 프로필 페이지 스타일 import
import { VscVerifiedFilled } from "react-icons/vsc";
import React from 'react'


const Profile = () => {
  var [userInfo, setUserInfo] = useState({username : "", follower : 0, following : 0, posts : 0, profile : "", profileImage : ""});
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`http://localhost:3001/profile.dox?userId=user4`);
        const jsonData = await response.json();
        jsonData.posts = 20;
        jsonData.profileImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eHvTFniGUMP7aHA8jMbVWyRxaBUtU3YLDQ&s';
        setUserInfo(jsonData);
      } catch (error) {
        console.error("에러!");
      }
    }
    fetchProfile();
  }, []);
 
  const list = [
      {id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물입니다.'},
      {id: 2, title: '두 번째 게시물', content: '두 번째 게시물입니다.'},
      {id: 3, title: '세 번째 게시물', content: '세 번째 게시물입니다.'},
      {id: 4, title: '두 번째 게시물', content: '두 번째 게시물입니다.'},
      {id: 5, title: '세 번째 게시물', content: '세 번째 게시물입니다.'},
  ];

  return (
<div>
      <div className="container">
        <div className=".sidebar-icons">
          <div className="profile">
            <div className="profile-header">
              <div className="profile-image">
                <img src={userInfo.profileImage} alt="레이짱" />
              </div>
              <div className="profile-info">
                <h2>@{userInfo.username}<VscVerifiedFilled /></h2>
                <p>{userInfo.profile}🖤</p>
                <div className="profile-stats">
                  <div>
                    <strong>{userInfo.posts}</strong>
                    <span>게시물</span>
                  </div>
                  <div>
                    <strong>{userInfo.follower}</strong>
                    <span>팔로워</span>
                  </div>
                  <div>
                    <strong>{userInfo.following}</strong>
                    <span>팔로잉</span>
                  </div>
                </div>
              </div>
              </div>
            <div className="profile-posts">
              <br /><br />
              <hr />
              <h3>내가 작성한 게시글</h3>
              <div className="posts-list">
                {list.map((post) => (
                  <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar"></div>
      </div>
      
    </div>
  );
};

export default Profile;