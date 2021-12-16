# Router
SPA(Single Page Application)  
- 새로운 페이지를 로드하지 않고 필요한 데이터만 가져와 렌더링 하는 방식

## 목록
---
* Install
* Example

### Install
---
1. 설치
```
npm i react-router-dom
```

2. src/App.js 상단에 코드 추가
```js
import { BrowserRouter, Route } from 'react-router-dom';
```

3. 새로운 페이지 생성 
```js
// src/pages/About.js

import React from "react";

function About() {
  return (
    <div>This is About page.</div>
  );
}

export default About;
```

4. 렌더링 코드 추가
```js
// <Route> 코드는 반드시 <BrowserRouter> 안에서 실행

<Router>
    <Route path="/about" element={<About />} />
</Router>
```

### Example
---
Link Component 사용
```js
// src/App.js

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error /> } />
    </Routes>
    <div> Footer </div>
</Router>
```