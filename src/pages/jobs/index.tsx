import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../layouts/default'

import TitleBanner from '../../components/TitleBanner'
import ImageBanner from '../../components/ImageBanner'
import JobListings from '../../components/JobListings'

type JobsIndexProps = {
  title: string,
  body?: string,
  image?: {
    alt: string,
    path: string
  },
  jobs?: []
}

const JobsIndex = ({ title, body, image, jobs }: JobsIndexProps) => {
  const [currentJobs, setCurrentJobs] = useState(jobs)

  useEffect(() => {
    setCurrentJobs(jobs)
  }, [jobs])

  return (
    <Layout>
      <TitleBanner title={title} />
      <ImageBanner {...image} />
      <JobListings jobs={currentJobs} />
    </Layout>
  )
}

export default JobsIndex

/**
 * Sets initial props on the default export.
 *
 * @see https://nextjs.org/learn/basics/fetching-data-for-pages
 *
 * @todo use Promise.all() to wrap awaits; be careful of fail-fast
 * @todo cache data to prevent unnecessary requests
 *
 */
JobsIndex.getInitialProps = async () => {
  /**
   * Fetch all of the data for the page
   *
   * @todo rewrite destructuring for legibility
   *
   */
  const response = await fetch(`${process.env.API_ROOT}/page/d531df90-0fb9-4475-bdc6-8222b22924c7`)
  const { data: page } = await response.json()
  const { title, body } = page.attributes

  /**
   * Fetch `field_image` using data in above response, we have to do this
   * separately because it's an entity and only exists as a relationship
   * with the (page) node.
   *
   * @todo `page` API endpoint should contain field_image data
   */
  const { field_image } = page.relationships
  const imageResponse = await fetch(`${field_image.links.related.href}`)
  const { data: image } = await imageResponse.json()

  /**
   * Fetch a list of jobs
   */
  const jobsResponse = await fetch(`${process.env.API_ROOT}/jobs/?sort=-created&filter[status][value]=1`)
  const { data: jobs } = await jobsResponse.json()

  return {
    title,
    body,
    image: {
      path: image.attributes.uri.url,
      alt: field_image.data.meta.alt
    },
    jobs
  }
}
