import { useState, useEffect } from 'react'

import JobListingsItem from './Item'
import JobListingsEmpty from './JobListingsEmpty'
import TitleBanner from '../TitleBanner'

type JobListingsViewProps = {
  jobs?: []
}

const JobListingsView = ({ jobs }: JobListingsViewProps) => {
  if (!jobs) return <JobListingsEmpty />

  return (
    <section className='c-job-listings'>
      <div className='o-container'>
        <TitleBanner title={`Our current vacancies`} />
        {
          jobs.map(({ id, attributes }, key) =>
            <JobListingsItem
              id={id}
              key={key}
              {...attributes}
            />
          )
        }
      </div>
    </section>
  )
}

export default JobListingsView
