import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div >
        <p >
        <h1>這是我的自我介紹</h1>
        <h2>
          <ul>
            <li><strong>姓名:</strong><em>翁濬緯</em></li>
            <li><strong>學號:</strong><em>411630337</em></li>
            <li><strong>興趣:</strong><em>打羽球、看劇</em></li>
          </ul>
        </h2>
        </p >
        <img src="mom.jpg" width="500" />
        <span>
          <table>
            <tr>
              <th>~9/18</th>
              <th>9/18~</th>
            </tr>
            <tr>
              <td>迷你地鐵</td>
              <td>迷你空管</td>
            </tr>
          </table>
        </span>
        <div >
          <form action="/submit" method="post">
            <label htmlFor="name">現在的心情:</label>
            <input type="text" id="name" name="name" />
            <input type="submit" value="送出" />
          </form>
          <a href="https://www.instagram.com/xi_06_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            這是我最愛的媽媽 </a>
        </div>
      </div>
    </body>
  );
};

export default App;
