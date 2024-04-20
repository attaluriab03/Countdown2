import React, { useEffect, useState } from 'react';
import '../styles/Trivia.css';
import Button from '@mui/material/Button';

const Trivia = () => {
    const [questions, setQuestions] = useState([]);
    const [currentCorrect, setCurrentCorrect] = useState(0);
    const [color, setColor] = useState("");
    

    
    const renderChoices = (correct, incorrect) => {
        const answers = [...incorrect, correct];
        // randomly sorts array so that the last answer is not always the correct answer
        return answers.sort(() => Math.random() - 0.5); 
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://the-trivia-api.com/v2/questions');
            const data = await response.json();
            if (data && data.length > 0) {
                setQuestions(data);
                console.log(data);
            }
        };
        fetchData();
    }, []);

    const handleClick = (answer, correctAnswer, color) => {
        if (answer === correctAnswer) {
            setCurrentCorrect(currentCorrect + 1);
            color = "correct";
        }
        else {
            color = "incorrect";
        }
        setColor(color);
    };

    // const setClassName = (answer, correctAnswer) => {
    //     return answer === correctAnswer ? "correct" : "incorrect";
    // };

    return (
        <div className="trivia">
            <h1>Trivia Game</h1>
            <p>Number of Correct Answers: {currentCorrect}</p>
            {questions && questions.map((question, qIndex) => {
                const mixedAnswers = renderChoices(question.correctAnswer, question.incorrectAnswers);
                return (
                    <div key={qIndex}>
                        <p>{question.question.text}</p>
                        {mixedAnswers.map((answer, aIndex) => (
                            <Button
                                key={aIndex}
                                className={color}
                                onClick={() => handleClick(answer, question.correctAnswer, color)}
                            >
                                {answer}
                            </Button>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default Trivia;

