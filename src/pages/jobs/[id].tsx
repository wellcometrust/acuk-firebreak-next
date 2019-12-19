import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

import Layout from '../../layouts/default'

import TitleBanner from '../../components/TitleBanner'
import Section from '../../components/Section'

type JobProps = {
  title: string,
  sections?: [{
    attributes: {
      field_title: string,
      field_body: {
        processed: string
      }
    }
  }]
}

const Job = ({ title, sections }: JobProps) => (
  <Layout>
    <TitleBanner title={title} />
    {
      sections.map(({ attributes }, key) =>
        <Section
          key={key}
          title={attributes.field_title}
          body={attributes.field_body.processed}
        />
      )
    }
  </Layout>
)

/**
 * Sets initial props on the default export.
 *
 * @see https://nextjs.org/learn/basics/fetching-data-for-pages
 *
 * @todo use Promise.all() to wrap awaits; be careful of fail-fast
 *
 */
Job.getInitialProps = async (context: any) => {
  const { id } = context.query

  // Fetch this page
  const response = await fetch(`${process.env.API_ROOT}/jobs/${id}`)
  const { data } = await response.json()
  const { title, field_job_section: content } = data.attributes

  // Gather IDs for field_job_section relations
  const contentIDs = content.map(({ value }: any) => value)

  // Fetch related field_collection entities
  const allSectionsResponse = await fetch(`http://127.0.0.1:8888/jsonapi/field_collection_item/field_job_section/`)
  const { data: allSections } = await allSectionsResponse.json()
  const sections = allSections.filter(({ attributes }: any) => contentIDs.indexOf(attributes.drupal_internal__item_id) !== -1)

  return { title, sections }
}

export default Job
