import React, { useEffect, useState } from 'react';
import c from './TwitCard.module.css';
export default function TwitCard() {
  // const [tweets, setTweets] = useState(777);
  // const [followers, setFollowers] = useState((100500).toFixed(3));
  const isFollowing = localStorage.getItem('isFollowing');
  const countFollowers = localStorage.getItem('countFollowers');

  const [following, setFollowing] = useState(
    isFollowing === 'true' ? isFollowing : false
  );
  const [followers, setFollowers] = useState(100500);

  const tweets = 777;
  useEffect(() => {
    const countFollowers = localStorage.getItem('countFollowers');

    if (isFollowing) {
      setFollowing(isFollowing === 'true');
    }
    if (countFollowers) {
      setFollowers(parseInt(countFollowers));
    }
  }, []);
  function handleClick() {
    if (following) {
      setFollowing(false);
      setFollowers(followers - 1);

      localStorage.setItem('isFollowing', 'false');
      localStorage.setItem('countFollowers', followers - 1);
    } else {
      setFollowing(true);
      setFollowers(followers + 1);

      localStorage.setItem('isFollowing', 'true');
      localStorage.setItem('countFollowers', followers + 1);
    }
  }

  return (
    <div className={c.TwitContainer}>
      <ul className={c.TwitList}>
        <li className={c.TwitCard}>
          <div className={c.TwitBgImg}>
            <div className={c.TwitBgLogo}></div>
          </div>
          <div className={c.BothObj}>
            <div className={c.TwitImg}></div>
            <div className={c.TwitLine}></div>
          </div>

          <p className={c.TwitText}>
            <span className={c.TwitNumbers}>{`${tweets}`} </span> tweets
          </p>
          <p className={c.TwitText}>
            <span className={c.TwitNumbers}>
              {`${followers.toLocaleString('en-US')}`}
            </span>{' '}
            Followers
          </p>
          <button
            className={c.TwitBtn}
            onClick={handleClick}
            style={{ backgroundColor: following ? '#5CD3A8' : '#EBD8FF' }}
          >
            <span className={c.TwitBtnText}>
              {following ? 'Following' : 'Follow'}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
