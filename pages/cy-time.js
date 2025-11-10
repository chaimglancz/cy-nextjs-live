export default function CyTime({ cyBuildTime }) {
  return <p>Built at: {cyBuildTime}</p>;
}

export async function getStaticProps() {
  return {
    props: {
      cyBuildTime: new Date().toISOString()
    }
  };
}