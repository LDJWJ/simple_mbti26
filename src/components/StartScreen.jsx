function StartScreen({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          MBTI 성격 테스트
        </h1>
        <p className="text-gray-600 mb-2 text-lg">
          나는 어떤 성격일까?
        </p>
        <p className="text-gray-500 mb-8">
          질문에 답하고 나의 MBTI 유형을 알아보세요
        </p>

        <div className="bg-purple-50 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-gray-700 mb-3">테스트 방법</h2>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>각 질문에 솔직하게 답변해주세요</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>정답은 없으니 편하게 선택하세요</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>원하는 테스트 버전을 선택해주세요</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => onStart("short")}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            간단 테스트 (12문항)
            <span className="block text-sm font-normal mt-1 opacity-90">빠르게 결과 확인</span>
          </button>
          <button
            onClick={() => onStart("full")}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 px-8 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
          >
            정밀 테스트 (24문항)
            <span className="block text-sm font-normal mt-1 opacity-90">더 정확한 결과</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartScreen
