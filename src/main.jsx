import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 카카오 SDK 초기화
if (window.Kakao && !window.Kakao.isInitialized()) {
  // 여기에 발급받은 JavaScript 키를 입력하세요
  // https://developers.kakao.com/ 에서 앱을 생성하고 JavaScript 키를 발급받을 수 있습니다
  const KAKAO_APP_KEY = import.meta.env.VITE_KAKAO_APP_KEY || 'YOUR_KAKAO_APP_KEY'

  if (KAKAO_APP_KEY && KAKAO_APP_KEY !== 'YOUR_KAKAO_APP_KEY') {
    window.Kakao.init(KAKAO_APP_KEY)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
