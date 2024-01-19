import Link from 'next/link';
export default function Header() {
  return (
    <div className="min-h-16 border-b-2 dark:bg-white/60 flex items-center">
      <div className="max_width">
        <Link href='/'>
          <h2 className='font-black text-2xl'>H5自研游戏</h2>
        </Link>
      </div>
    </div>
  );
}
