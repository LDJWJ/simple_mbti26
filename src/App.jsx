import { useState, useEffect } from 'react'
import { questionsShort, questionsFull } from './data/questions'
import { mbtiDescriptions } from './data/results'
import StartScreen from './components/StartScreen'
import Question from './components/Question'
import Result from './components/Result'

function App() {
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const type = params.get('type')?.toUpperCase()
    if (type && mbtiDescriptions[type]) {
      setResult({
        type,
        ...mbtiDescriptions[type],
        scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      })
    }
  }, [])

  const handleStart = (version) => {
    setQuestions(version === "full" ? questionsFull : questionsShort)
    setStarted(true)
  }

  const handleAnswer = (questionId, answer) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (finalAnswers) => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

    Object.values(finalAnswers).forEach(answer => {
      scores[answer] = (scores[answer] || 0) + 1
    })

    const mbtiType =
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P')

    setResult({
      type: mbtiType,
      ...mbtiDescriptions[mbtiType],
      scores
    })
  }

  const handleRestart = () => {
    setStarted(false)
    setQuestions([])
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
  }

  if (!started) {
    return <StartScreen onStart={handleStart} />
  }

  if (result) {
    return <Result result={result} onRestart={handleRestart} />
  }

  return (
    <Question
      question={questions[currentQuestion]}
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      onAnswer={handleAnswer}
    />
  )
}

export default App
