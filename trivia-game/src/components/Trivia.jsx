import React, {useEffect, useState} from 'react';
import '../styles/Trivia.css';

const Trivia = () => {

    const [questions, setQuestions] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            // use this url: https://the-trivia-api.com/v2/questions
            const result = await fetch('https://opentdb.com/api.php?amount=10');
            const data = await result.json();
            if (data.results) {
                setQuestions(data.results);
            }
        }
        fetchData();

    }, [])

    return (
        <div class="trivia"> 
            <h1> Trivia Game </h1>
            {questions && questions.map((question, index) => ( 
                <p key={index}> {question.question} </p>
            ))}
        </div>
    );

}

export default Trivia;