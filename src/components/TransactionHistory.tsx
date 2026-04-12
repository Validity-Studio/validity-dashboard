import React from 'react';
import { TransactionRecord } from '../hooks/useVault';
import { formatBalance } from '../utils/contractHelpers';
import { ArrowDownLeft, ArrowUpRight, Gift } from 'lucide-react';

interface TransactionHistoryProps {
  transactions: TransactionRecord[];
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Transaction History</h3>
        <div className="text-gray-500 text-center py-8">No recent transactions</div>
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'deposit': return <ArrowDownLeft className="text-green-500" size={20} />;
      case 'withdraw': return <ArrowUpRight className="text-red-500" size={20} />;
      case 'claim': return <Gift className="text-brand-500" size={20} />;
      default: return null;
    }
  };

  const getAmountColor = (type: string) => {
    switch (type) {
      case 'deposit': return 'text-green-600';
      case 'withdraw': return 'text-red-600';
      case 'claim': return 'text-brand-600';
      default: return 'text-gray-900';
    }
  };

  const getAmountPrefix = (type: string) => {
    switch (type) {
      case 'deposit': return '+';
      case 'withdraw': return '-';
      case 'claim': return '+';
      default: return '';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Transaction History</h3>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-full shadow-sm">
                {getIcon(tx.type)}
              </div>
              <div>
                <div className="font-medium capitalize text-gray-900">{tx.type}</div>
                <div className="text-sm text-gray-500">
                  {new Date(tx.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
            <div className={`font-bold ${getAmountColor(tx.type)}`}>
              {getAmountPrefix(tx.type)}{formatBalance(tx.amount)} VLD
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
