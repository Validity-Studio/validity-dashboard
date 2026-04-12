import Head from 'next/head';
import { useWallet } from '../hooks/useWallet';
import { useVault } from '../hooks/useVault';
import { BalanceCard } from '../components/BalanceCard';
import { DepositForm } from '../components/DepositForm';
import { WithdrawForm } from '../components/WithdrawForm';
import { TransactionHistory } from '../components/TransactionHistory';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { address, isConnecting, connect } = useWallet();
  const { balance, isLoading, transactions, deposit, withdraw, claimRewards } = useVault();
  const router = useRouter();

  // Redirect to home if not connected, though allowing them to connect here is fine too.
  // We'll prompt them to connect instead.

  if (!address) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Wallet to Continue</h2>
        <p className="text-gray-500 mb-8">Please connect your Stellar wallet to access the dashboard.</p>
        <button
          onClick={connect}
          disabled={isConnecting}
          className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Head>
        <title>Dashboard - Validity</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <BalanceCard 
            balance={balance} 
            isLoading={isLoading} 
            onClaim={claimRewards} 
          />
        </div>
        
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <DepositForm onDeposit={deposit} isLoading={isLoading} />
          <WithdrawForm onWithdraw={withdraw} isLoading={isLoading} />
        </div>
      </div>

      <TransactionHistory transactions={transactions} />

      {/* TODO: add governance interface */}
      {/* TODO: add wallet options (e.g., Albedo, xBull) */}
    </div>
  );
}
