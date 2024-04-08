/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useEffect } from 'react';

interface Topic {
  id: number;
  title: string;
  slug: string;
}

const RequestsForSuapps: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('https://collective.flashbots.net/tag/request-for-suapp.json');
        const data = await response.json();
        console.log(data)
        setTopics(data.topic_list.topics); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching topics:', error);
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const baseUrl = 'https://collective.flashbots.net/t/';

  return (
    <div>
      {topics.length > 0 ? (
        <ol>
          {topics.map(topic => (
            <li key={topic.id}>
                <a href={`${baseUrl}${topic.slug}/${topic.id}`} target="_blank" rel="noopener noreferrer">
                {topic.title}
                </a>    
            </li>
          ))}
        </ol>
      ) : (
        <p>No topics found.</p>
      )}
    </div>
  );
};

export default RequestsForSuapps;
