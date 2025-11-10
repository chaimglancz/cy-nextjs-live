export default function CyMath({ cyResult }) {
  return <p>Calculated result: {cyResult}</p>;
}

export async function getStaticProps() {
  const cyCalculation = 5 * 10 + 3;
  return {
    props: {
      cyResult: cyCalculation
    }
  };
}