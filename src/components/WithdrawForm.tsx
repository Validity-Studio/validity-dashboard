import React, { useState } from 'react';
import { parseAmount } from '../utils/contractHelpers';

interface WithdrawFormProps {
  onWithdraw: (amount: string) => Promise<void>;
  isLoading: boolean;
}

export const WithdrawForm: React.FC<WithdrawFormProps> = ({ onWithdraw, isLoading }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) return;
    
    // Default decimals = 7
    const parsedAmount = parseAmount(amount);
    await onWithdraw(parsedAmount);
    setAmount('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Withdraw</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="withdraw-amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount (VLD)
          </label>
          <input
            id="withdraw-amount"
            type="number"
            step="0.0000001"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
            placeholder="0.00"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !amount}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Withdraw Tokens'}
        </button>
      </form>
    </div>
  );
};
