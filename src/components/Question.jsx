function Question({ question, currentQuestion, totalQuestions, onAnswer }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-purple-600">
              질문 {currentQuestion + 1} / {totalQuestions}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          {question.question}
        </h2>

        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswer(question.id, answer.value)}
              className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 text-left hover:border-purple-500 hover:bg-purple-50 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium">{answer.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
