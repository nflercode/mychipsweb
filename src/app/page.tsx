import Hero from '@/components/hero/hero';
import {Logotype} from '@/components/logotype/logotype';
export default function Home({}: {} ) {
  return (
    <div>
      <Logotype />
      <h1>Welcome to MyChipsWeb!</h1>
      <p>Get started by clicking the button below.</p>
      <a href="/create-table">
        <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'>Create table</button>
      </a>
    </div>
  );
}

