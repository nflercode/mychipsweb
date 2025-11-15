
import Hero from '@/components/hero/hero';
import Image from 'next/image';

export default function Home({}: {} ) {
  return (
    <div>
      <Hero imageSrc="/start_bg.png" options={{ roundedBottom: true, height: '600px' }}>
        <Image src="/logotype.png" alt="Logo" width={200} height={200} />
      </Hero>
      <h1>Welcome to MyChipsWeb!</h1>
      <p>Get started by clicking the button below.</p>
      <a href="/create-table">
        <button>Create table</button>
      </a>
    </div>
  );
}
  
