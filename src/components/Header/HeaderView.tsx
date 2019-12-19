import Link from 'next/link'

export const HeaderView = () => (
  <header>
    <div className='o-container'>
      <ul className='o-list-inline'>
        <li className='u-m-r'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/jobs' as='/jobs/'>
            <a>Jobs</a>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default HeaderView
