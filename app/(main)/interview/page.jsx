import { getAssessments } from '@/actions/interview'
import React from 'react'
import StatsCard from './_conmponent/statsCard';
import PerformanceChart from './_conmponent/performanceChart';
import QuizList from './_conmponent/quizList';

const InterviewPage = async () => {
  const assessments=await getAssessments();

  return (
    <div>
  
        <h1 className='text-6xl font-bold gradient-title'>
          Interview Preparation
          </h1>
      <div className='space-y-6'>
        <StatsCard assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  )
}

export default InterviewPage
