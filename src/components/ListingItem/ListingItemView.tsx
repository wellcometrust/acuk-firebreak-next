import Link from 'next/link'
import cx from 'classnames'

type ListingItemViewProps = {
  id: string,
  type: 'job' | 'article',
  title: string,
  excerpt?: string,
  className?: string,
  footerText?: string
}

export const ListingItemView = ({ id, type, title, excerpt, footerText, className }: ListingItemViewProps) => {
  const classNames = cx('c-listing-item', {
    [className]: className
  })

  return (
    <article className={classNames}>
      <h3 className='c-listing-item__title'>
        <Link href={`/${type}s/[id]`} as={`/${type}s/${id}`}>
          <a>{title}</a>
        </Link>
      </h3>
      {excerpt && <p className='c-listing-item__excerpt'>{excerpt}</p>}
      {footerText && <p className='c-listing-item__footer'>{footerText}</p>}
    </article>
  )
}

export default ListingItemView
