type ImageBannerViewProps = {
  path: string,
  alt: string
}

export const ImageBannerView = ({ path, alt }: ImageBannerViewProps) => (
  <figure className='c-image-banner'>
    <img
      src={`${process.env.ASSETS_URL}${path}`}
      alt={alt}
    />
  </figure>
)

export default ImageBannerView
