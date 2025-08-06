import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { auth } from '../services/firebase';
import VideoPlayer from '../components/VideoPlayer';
import Quiz from '../components/Quiz';
import TextContent from '../components/TextContent';

const lessons = {
  '1': {
    title: 'Intro to AI',
    text: 'Artificial Intelligence is the simulation of human intelligence by machines.',
    videoId: 'dQw4w9WgXcQ',
  },
  '2': {
    title: 'Basics of ML',
    text: 'Machine Learning allows systems to learn and improve from experience.',
    videoId: 'tgbNymZ7vqY',
  },
};

function LessonPage() {
  const { id } = useParams();
  const lesson = lessons[id];

  const handleEvent = (eventType) => {
    api.post('/clickstream', {
      userId: auth.currentUser?.uid || 'anonymous',
      eventType,
      metadata: { lessonId: id, videoId: lesson.videoId },
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">{lesson.title}</h1>
      <TextContent text={lesson.text} />
      <VideoPlayer videoId={lesson.videoId} onEvent={handleEvent} />
      <Quiz lessonId={id} onEvent={handleEvent} />
    </div>
  );
}

export default LessonPage;
