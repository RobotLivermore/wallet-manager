import { mnemonicToSeedSync } from 'bip39'
import {
  Keypair as SolanaKeypair,
  // PublicKey as SolanaPublickey,
} from '@solana/web3.js'
import { derivePath } from 'ed25519-hd-key'
import { Account } from '@/types/wallet'
// import { bytesToHex } from '@/utils/etc'
import bs58 from 'bs58'

class SolanaAccount {
  keypair: SolanaKeypair
  constructor(keypair: SolanaKeypair) {
    this.keypair = keypair
  }

  SecretKey() {
    return bs58.encode(this.keypair.secretKey)
  }

  Address() {
    return this.keypair.publicKey.toBase58()
  }
}

export const getSolanaPath = (idx: number) => `m/44'/501'/${idx}'/0'`

export const getSeed = (mnemonic: string, password: string) => {
  return mnemonicToSeedSync(mnemonic, password)
}

export const getSolanaAccountFromSeedPaths = (
  seed: Buffer,
  idx: number
): Account => {
  const path = getSolanaPath(idx)
  const keypair = SolanaKeypair.fromSeed(
    derivePath(path, seed.toString('hex')).key
  )
  return new SolanaAccount(keypair)
}
