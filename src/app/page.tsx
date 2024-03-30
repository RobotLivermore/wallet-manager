import WalletManager from '@/components/WalletManager'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '@/assets/github.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="w-full text-3xl font-bold border-b-2 border-black px-8 py-4">
        Wallet Manner
      </h1>
      <WalletManager />
      <footer className="w-full px-4 py-4 border-t-2 border-black">
        <Link
          href="https://github.com/warm-mechine-book/wallet-manager"
          target="_blank"
        >
          <Image alt="github" width={24} height={24} src={GithubIcon} />
        </Link>
      </footer>
    </main>
  )
}
