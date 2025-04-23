import { useRouter } from 'next/router';

export default function Help() {
  const router = useRouter();
  const { slug = [] } = router.query;

  return (
    <div>
      <h1>Help Section</h1>
      <p>{slug.length > 0 ? slug.join('/') : 'Main Help Page'}</p>
    </div>
  );
}
