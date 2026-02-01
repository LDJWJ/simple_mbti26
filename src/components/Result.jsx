import { useState } from 'react'
import BibleCharacterIllust from './BibleCharacterIllust'
import HistoricalFigureIllust from './HistoricalFigureIllust'

function Result({ result, onRestart }) {
  const [copied, setCopied] = useState(false)
  const [copiedType, setCopiedType] = useState('')

  const bibleText = result.bibleCharacter
    ? `\n\n[성경 속 닮은꼴 인물]\n${result.bibleCharacter.name}\n${result.bibleCharacter.description}`
    : ''

  const historicalText = result.historicalFigure
    ? `\n\n[역사 속 닮은꼴 인물]\n${result.historicalFigure.name}\n${result.historicalFigure.description}`
    : ''

  const shortText = `[나의 MBTI 결과] ${result.type} - ${result.title}\n\n[주요 특성]\n${result.characteristics.join(', ')}${bibleText}${historicalText}\n\n나도 테스트해보기 → ${window.location.origin}${window.location.pathname}`

  const resultURL = `${window.location.origin}${window.location.pathname}?type=${result.type}`

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setCopiedType(type)
      setTimeout(() => { setCopied(false); setCopiedType('') }, 2000)
    } catch (err) {
      alert('복사에 실패했습니다. 다시 시도해주세요.')
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

        {result.bibleCharacter && (
          <div className="bg-amber-50 rounded-2xl p-6 mb-6 border border-amber-200">
            <h3 className="font-semibold text-gray-700 mb-3 text-lg">성경 속 닮은꼴 인물</h3>
            <BibleCharacterIllust characterId={result.bibleCharacter.id} />
            <p className="text-2xl font-bold text-amber-700 mb-2 text-center">
              {result.bibleCharacter.name}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {result.bibleCharacter.description}
            </p>
          </div>
        )}

        {result.historicalFigure && (
          <div className="bg-sky-50 rounded-2xl p-6 mb-6 border border-sky-200">
            <h3 className="font-semibold text-gray-700 mb-3 text-lg">역사 속 닮은꼴 인물</h3>
            <HistoricalFigureIllust figureId={result.historicalFigure.id} />
            <p className="text-2xl font-bold text-sky-700 mb-2 text-center">
              {result.historicalFigure.name}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {result.historicalFigure.description}
            </p>
          </div>
        )}

        {result.scores && Object.values(result.scores).some(v => v > 0) && <div className="bg-purple-50 rounded-2xl p-6 mb-8">
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
        </div>}

        {copied && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
            ✓ {copiedType} 클립보드에 복사되었습니다!
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={() => handleCopy(shortText, '결과가')}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            결과 복사하기
          </button>

          <button
            onClick={() => handleCopy(resultURL, '결과 URL이')}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-500 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            결과 URL 복사하기
          </button>

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
