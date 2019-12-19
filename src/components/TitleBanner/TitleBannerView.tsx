type TitleBannerViewProps = {
  title: string
}

export const TitleBannerView = ({ title }: TitleBannerViewProps) => (
  <header className='c-title-banner'>
    <div className='o-container'>
      <h1 className='c-title-banner__title'>{title}</h1>
    </div>
  </header>
)

export default TitleBannerView
