import { mnemonicToSeedSync } from 'bip39'
import {
  Keypair as SolanaKeypair,
  // PublicKey as SolanaPublickey,
} from '@solana/web3.js'
import { derivePath } from 'ed25519-hd-key'
import { Account } from '@/types/wallet'
import { bytesToHex } from '@/utils/etc'
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

export const getSolanaAccountFromMnemonicPaths = (
  mnemonic: string,
  password: string,
  ids: number[]
): Account[] => {
  // const mnemonic =
  //   'neither lonely flavor argue grass remind eye tag avocado spot unusual intact'
  const seed = mnemonicToSeedSync(mnemonic, password) // (mnemonic, password)
  const accounts = ids.map((i) => {
    const path = `m/44'/501'/${i}'/0'`
    const keypair = SolanaKeypair.fromSeed(
      derivePath(path, seed.toString('hex')).key
    )
    console.log(`${path} => ${keypair.secretKey}`)
    console.log(`${path} => ${keypair.publicKey.toBase58()}`)
    return new SolanaAccount(keypair)
  })
  return accounts
}
