var posts=["2025/09/03/git配置托管平台/","2025/09/02/ssh/","2025/09/02/我的第一篇文章/","2025/09/02/hello-world/","2025/09/02/部署到服务器或其他托管平台/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };