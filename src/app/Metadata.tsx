export default function Metadata({metaData}: any) {
    const {title, description} = metaData
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    );
}