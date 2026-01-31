import { useState } from 'react'

function Result({ result, onRestart }) {
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const shareText = `🎯 나의 MBTI는 ${result.type}! (${result.title})

✨ 주요 특성: ${result.characteristics.join(', ')}

나도 테스트해보기 👉 ${window.location.origin}${window.location.pathname}`

  const shareTextShort = `나의 MBTI는 ${result.type} (${result.title})입니다!`

  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      alert('복사에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MBTI 테스트 결과',
        text: shareTextShort,
        url: window.location.href
      })
    } else {
      handleCopyURL()
    }
  }

  const handleKakaoShare = () => {
    if (window.Kakao && window.Kakao.Share) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `나의 MBTI는 ${result.type}!`,
          description: `${result.title} - ${result.characteristics.join(', ')}`,
          imageUrl: 'https://via.placeholder.com/800x400/9333ea/ffffff?text=MBTI+TEST',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '나도 테스트하기',
            link: {
              mobileWebUrl: window.location.origin + window.location.pathname,
              webUrl: window.location.origin + window.location.pathname,
            },
          },
        ],
      })
    } else {
      alert('카카오톡 공유를 사용할 수 없습니다.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white text-5xl font-bold py-4 px-8 rounded-2xl mb-4">
            {result.type}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {result.title}
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-gray-700 mb-3 text-lg">성격 특징</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {result.description}
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg">주요 특성</h3>
          <div className="grid grid-cols-2 gap-3">
            {result.characteristics.map((char, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 text-center font-medium text-gray-700 shadow-sm"
              >
                {char}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg">세부 점수</h3>
          <div className="space-y-3">
            {[
              { key1: 'E', key2: 'I', label1: '외향', label2: '내향' },
              { key1: 'S', key2: 'N', label1: '감각', label2: '직관' },
              { key1: 'T', key2: 'F', label1: '사고', label2: '감정' },
              { key1: 'J', key2: 'P', label1: '판단', label2: '인식' }
            ].map((item, index) => {
              const total = result.scores[item.key1] + result.scores[item.key2]
              const percentage1 = (result.scores[item.key1] / total) * 100

              return (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-600">
                      {item.label1} ({item.key1})
                    </span>
                    <span className="font-medium text-gray-600">
                      {item.label2} ({item.key2})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 transition-all"
                        style={{ width: `${percentage1}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-12 text-right">
                      {result.scores[item.key1]}:{result.scores[item.key2]}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {copied && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center animate-fade-in">
            ✓ 클립보드에 복사되었습니다!
          </div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={handleCopyURL}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              URL 복사
            </button>

            <button
              onClick={handleKakaoShare}
              className="bg-yellow-400 text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
              </svg>
              카카오톡
            </button>

            <button
              onClick={handleNativeShare}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              공유
            </button>
          </div>

          <button
            onClick={onRestart}
            className="w-full bg-white border-2 border-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            다시 테스트하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result
