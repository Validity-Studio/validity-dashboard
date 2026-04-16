import React from 'react';
import { formatBalance } from '../../services/stellar/contractHelpers';

interface BalanceCardProps {
  balance: string;
  isLoading: boolean;
  onClaim: () => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ balance, isLoading, onClaim }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
      <h3 className="text-gray-500 font-medium mb-2">Vault Balance</h3>
      <div className="text-4xl font-bold text-gray-900 mb-6">
        {isLoading ? '...' : formatBalance(balance)} <span className="text-2xl text-gray-500 font-normal">VLD</span>
      </div>
      <button 
        onClick={onClaim}
        disabled={isLoading}
        className="w-full bg-brand-50 text-brand-600 hover:bg-brand-100 border border-brand-200 py-3 rounded-lg font-medium transition disabled:opacity-50"
      >
        Claim Rewards
      </button>
    </div>
  );
};
