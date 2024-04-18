import React, { useEffect, useState } from 'react';
import '../styles/Trivia.css';

const Trivia = () => {
    const [questions, setQuestions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [answerChoices, setAnswerChoices] = useState([]);
    const [currentCorrect, setCurrentCorrect] = useState(0);

    // Function to mix and randomize answers
    const renderChoices = (correct, incorrect) => {
        const answers = [...incorrect, correct];
        return answers.sort(() => Math.random() - 0.5); // Shuffle the array
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://the-trivia-api.com/v2/questions');
            const data = await response.json();
            if (data && data.length > 0) {
                setQuestions(data);
                const correct = data[0].correctAnswer;
                setCorrectAnswer(correct);
                const mixedAnswers = renderChoices(correct, data[0].incorrectAnswers);
                setAnswerChoices(mixedAnswers);
            }
        };
        fetchData();
    }, []);

    
    const handleClick = (answer) => {
        if (answer === correctAnswer) {
            setCurrentCorrect((prevCorrect) => prevCorrect + 1);
        }
        
    };

    return (
        <div className="trivia">
            <h1>Trivia Game</h1>
            {questions && questions.map((question, index) => (
                <> 
                    <p key={index}>{question.question.text}</p>
                    {answerChoices.map((answer, index) => (
                        <div> 
                            <button key={index} onClick={() => handleClick(answer)}>
                                {answer}
                            </button>
                        </div>
                    ))}
                </>
                
            ))}
            <p> Number of Correct Answers: {currentCorrect}</p>
        </div>
    );
}

export default Trivia;

