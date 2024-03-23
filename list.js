// express 모듈을 불러옵니다.
const express = require('express');
const app = express();

// '/list' 경로에 대한 GET 요청을 처리합니다.
app.get('/list', (req, res) => {
  // 응답할 데이터
  const list = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  // JSON 형태로 데이터를 응답합니다.
  res.json(list);
});

// 서버를 3000 포트에서 시작합니다.
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
