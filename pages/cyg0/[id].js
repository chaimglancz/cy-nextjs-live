import { useRouter } from 'next/router';

export default function Cy() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>cyg0 {id}</h1>
    </div>
  );
}