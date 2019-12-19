import ListingItem from '../../ListingItem'

import { stripHTML } from '../../../utils/stripHTML'

type JobListingsItemProps = {
  id: string,
  title: string,
  body?: {
    processed: string
  }
}

const JobListingsItem = ({ id, title, body }: JobListingsItemProps) => {
  const excerpt = `${stripHTML(body.processed).slice(0, 210)}...`

  return (
    <ListingItem
      type={`job`}
      id={id}
      className={`c-job-listings-item`}
      title={title}
      excerpt={excerpt}
    />
  )
}

export default JobListingsItem
