import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  { id: '1', title: 'Intro to AI', videoId: 'dQw4w9WgXcQ' },
  { id: '2', title: 'Basics of ML', videoId: 'tgbNymZ7vqY' },
];

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Lesson Dashboard</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id} className="mb-2">
            <Link className="text-blue-600 underline" to={`/lesson/${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;