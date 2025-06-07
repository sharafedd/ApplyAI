'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Job = {
  id: number;
  title: string;
  company: string;
  match_score: number;
};

export default function Matches() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from('job').select('*');
      if (error) console.error(error);
      else setJobs(data || []);
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Matched Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} className="border-b pb-2 mb-3">
          <h3 className="text-lg font-medium">{job.title}</h3>
          <p>{job.company}</p>
          <p>Match score: {job.match_score}%</p>
        </div>
      ))}
    </div>
  );
}
