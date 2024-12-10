import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import './VideoSection.css'; // Ensure to include your styles here

const videoData = [
  {
    chapter: 'Chapter: Motion',
    description: 'An overview of motion and its types.',
    thumbnail: '/c1.jpeg', // Replace with actual thumbnail
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
  },
  {
    chapter: 'Chapter: Probability',
    description: 'Understanding basic probability concepts.',
    thumbnail:  '/c2.jpeg', // Replace with actual thumbnail
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID2',
  },
  {
    chapter: 'Chapter: The Road Not Taken',
    description: 'An analysis of the poem by Robert Frost.',
    thumbnail:  '/c3.jpeg', // Replace with actual thumbnail
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID3',
  },{
    chapter: 'Chapter: Environment',
    description: 'We are surrounded with atmosphere.',
    thumbnail:  '/c4.jpeg', // Replace with actual thumbnail
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID1',
  },
  {
    chapter: 'Chapter: Civilization',
    description: 'Revolution is the part of lie.',
    thumbnail:  '/c5.jpeg', // Replace with actual thumbnail
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID2',
  },
  {
    chapter: 'Chapter: The story of my life',
    description: 'An the great indian scientist web archides.',
    thumbnail: '/c6.jpeg', // Replace with actual thumbnail
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID3',
  },
];

const VideoSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentVideo('');
  };

  return (
    <div className="video-section py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Educational Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {videoData.map((video, index) => (
            <div key={index} className="video-card bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img src={video.thumbnail} alt={video.chapter} className="w-full h-48 object-cover" />
                <div className="play-button absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PlayCircleOutlined />}
                    size="large"
                    className=""
                    onClick={() => handlePlayVideo(video.videoUrl)}
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{video.chapter}</h3>
                <p className="text-gray-600 mt-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        title="Watch Video"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
        className="video-modal"
      >
        <iframe
          width="100%"
          height="400"
          src={currentVideo}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video"
        />
      </Modal>
    </div>
  );
};

export default VideoSection;
