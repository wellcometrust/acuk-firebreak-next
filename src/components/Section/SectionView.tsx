type SectionViewProps = {
  title: string,
  body: string,
}

const SectionView = ({ title, body }: SectionViewProps) => (
  <section>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </section>
)

export default SectionView
