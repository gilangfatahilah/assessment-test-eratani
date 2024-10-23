import React, { useState } from 'react';
import ActivityCard from './activity-card';

interface Activity {
  image: string;
  date: string;
  publishedBy: string;
  title: string;
  description: string;
}

interface ActivitySectionProps {
  activities: Activity[];
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ activities }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedActivities = showAll ? activities : activities.slice(0, 3);

  return (
    <section className='px-6 md:px-[72px] mx-auto py-6 md:py-12 space-y-6 md:space-y-12'>
      <h1 className='text-primary font-bold text-2xl md:text-5xl text-center md:pb-6'>Kegiatan</h1>
      {displayedActivities.map((activity, index) => (
        <ActivityCard
          key={index}
          image={activity.image}
          date={activity.date}
          title={activity.title}
          description={activity.description}
          publishedBy={activity.publishedBy}
        />
      ))}

      {!showAll && (
        <p
          className='text-2xl text-center text-secondary underline cursor-pointer'
          onClick={() => setShowAll(true)}
        >
          Lihat lainnya
        </p>
      )}
    </section>
  );
};

export default ActivitySection;
