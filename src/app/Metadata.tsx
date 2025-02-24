export default function Metadata({ metaData }: any) {
  const { title, description, keywords } = metaData;
    // console.log({ metaData });
  return (
    <>
      {/* <title>{title}</title> */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
}
