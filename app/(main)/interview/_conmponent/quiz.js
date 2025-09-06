"use client"
import { generateQuiz} from '@/actions/interview';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useFetch from '@/hooks/useFetch';
import React, { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners';

const Quiz = () => {


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showExplanation, setShowExplanation] = useState(false)

    const {
        loading: generatingQuiz,
        fn: generateQuizFn,
        data: quizData,
    } = useFetch(generateQuiz);

    useEffect(()=>{
        
    },[])

    if(generatingQuiz){
        return <BarLoader className='mt-4' width={"100%"} color="gray"/>
    }

    if (!quizData) {
        return (
            <Card className="mx-2">
                <CardHeader>
                    <CardTitle>Ready to to test your knowledge?</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className='text-muted-foreground'>
                    This quiz contains 10 questions designed to assess your understanding of key concepts and skills relevant to your industry. Each question is multiple-choice. Take your time and choose the best answer for each question.
                   </p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={generateQuizFn}>Start Quiz</Button>
                </CardFooter>
            </Card>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Quiz
