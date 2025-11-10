export default function CyStatic({ cyMessage }) {
  return <h1>{cyMessage}</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      cyMessage: 'Built at build time!'
    }
  };
}