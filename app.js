window.addEventListener('load', () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem('username');
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt('What is your name?');
    localStorage.setItem('username', username);
  }

  const containerEl = document.querySelector('#newsfeed');
  console.log(localStorage.username);
  // This makes things appear
  // 10回繰り返すしかできていない

  let tempLength = bacefook.newsfeed.length
// 11回目までの投稿
// for文で配列の１０〜０
  const createNewsFeed = (temp) => {
    // for (let index = bacefook.newsfeed.length - 1; index >= temp; index--) {
    for (let index = temp; index <= bacefook.newsfeed.length - 1; index++) {
      
      const post = bacefook.newsfeed[index];
      // 記事コンテナ作成
      const articleContainerEl = document.createElement('article');
      articleContainerEl.className = "articleContainer";
      
      //friend作成
      const friendEl = document.createElement('div');
      friendEl.className = 'friend';
      friendEl.innerText = post.friend;
      // friend追加
      articleContainerEl.append(friendEl);

      // timeStamp作成
      const timestampEl = document.createElement('div');
      timestampEl.className = 'timeStamp';
      // timestampEl.innerText = post.timestamp;
      timestampEl.innerText = moment(post.timestamp, "YYYYMMDD").fromNow();
      // timeStamp追加
      articleContainerEl.append(timestampEl);
      
      // ポスト作成
      const postEl = document.createElement('div');
      postEl.className = "post";
      postEl.innerText = post.text;
      // ポスト追加
      articleContainerEl.append(postEl);
      
      // 画像作成
      const imageEl = document.createElement('img');
      imageEl.src = post.image.src;
      imageEl.alt = post.image.alt;
      // 画像追加
      articleContainerEl.append(imageEl);

      // 気持ち作成
      const feelingEl = document.createElement('div');
      feelingEl.className = 'feeling';
      feelingEl.innerText = post.feeling;
      // 気持ち追加
      articleContainerEl.append(feelingEl);

      // containerにpost追加
      containerEl.prepend(articleContainerEl);
    }
    tempLength = bacefook.newsfeed.length
  }
  // 最初の11個を作る
  createNewsFeed(0);
  // 12個目以降
  setInterval(() => createNewsFeed(tempLength), 3000);

});