// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './LecturePage.css';

// const LecturePage = () => {
//     const { courseId, lectureId } = useParams();

//     const lectures = [
//         { id: 1, title: 'Lecture 1', videoUrl: '' },
//         { id: 2, title: 'Lecture 2', videoUrl: '' },
//         { id: 3, title: 'Lecture 3', videoUrl: '' },
//     ];

//     const currentLecture = lectures.find((lecture) => lecture.id === parseInt(lectureId));

//     return (
//         <div className="lecture-page">
//             <h1>Course {courseId} - Lecture {lectureId}</h1>
//             <div className="video-player">
//                 <iframe
//                     title="Youtube Video Player"
//                     src={currentLecture.videoUrl}
//                     allowFullScreen
//                 ></iframe>
//             </div>
//         </div>
//     );
// };

// export default LecturePage;

import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './LecturePage.css'; // Import the CSS file for styling

const LecturePage = () => {
  const lectureId = useParams().id;

  const lectures = {
    1: {
      id: 1,
      title: 'Python Lecture-1',
      videoUrl: 'https://youtu.be/vLqTf2b6GZw',
    },
    2: {
      id: 2,
      title: 'Python Lecture-2',
      videoUrl: 'https://youtu.be/rfscVS0vtbw',
    },
    3: {
      id: 3,
      title: 'Python Lecture-3',
      videoUrl: 'https://youtu.be/kqtD5dpn9C8',
    },
    4: {
      id: 4,
      title: 'React JS Lecture-1',
      videoUrl: 'https://youtu.be/bMknfKXIFA8',
    },
    5: {
      id: 5,
      title: 'React JS Lecture-2',
      videoUrl: 'https://youtu.be/w7ejDZ8SWv8',
    },
    6: {
      id: 6,
      title: 'React JS Lecture-3',
      videoUrl: 'https://youtu.be/Ke90Tje7VS0',
    },
    7: {
      id: 7,
      title: 'Java Lecture-1',
      videoUrl: 'https://youtu.be/eIrMbAQSU34',
    },
    8: {
      id: 8,
      title: 'Java Lecture-2',
      videoUrl: 'https://youtu.be/A74TOX803D0',
    },
    9: {
      id: 9,
      title: 'Java Lecture-3',
      videoUrl: 'https://youtu.be/UmnCZ7-9yDY',
    },
    10: {
      id: 10,
      title: 'Communications Lecture-1',
      videoUrl: 'https://youtube.com/playlist?list=PLm_MSClsnwm-AIEbpyIxoTT8t7UzkHSYC',
    },
    11: {
      id: 11,
      title: 'Communications Lecture-2',
      videoUrl: 'https://youtube.com/playlist?list=PL9RcWoqXmzaKWxaNoDhW4O1kA0hK9AYys',
    },
    12: {
      id: 12,
      title: 'Communications Lecture-3',
      videoUrl: 'https://youtu.be/HAnw168huqA',
    },
  };

  const lecture = lectures[lectureId];

  if(!lecture) {
    return <div>Lecture not found!</div>
  }

  return (
    <div className="lecture-page">
      <h1>{lecture.title}</h1>
      <div className="video-container">
        <ReactPlayer
          url={lecture.videoUrl}
          controls
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      
    </div>
  );
};

export default LecturePage;
