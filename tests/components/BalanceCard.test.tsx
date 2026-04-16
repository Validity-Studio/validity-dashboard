import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BalanceCard } from '../../src/components/dashboard/BalanceCard';

describe('BalanceCard Component', () => {
  it('renders correctly with given balance', () => {
    render(<BalanceCard balance="10000000" isLoading={false} onClaim={() => {}} />);
    expect(screen.getByText('Vault Balance')).toBeInTheDocument();
    expect(screen.getByText('1.0000000')).toBeInTheDocument();
  });

  it('shows loading state when isLoading is true', () => {
    render(<BalanceCard balance="10000000" isLoading={true} onClaim={() => {}} />);
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('calls onClaim when claim button is clicked', () => {
    const handleClaim = jest.fn();
    render(<BalanceCard balance="10000000" isLoading={false} onClaim={handleClaim} />);
    const button = screen.getByText('Claim Rewards');
    fireEvent.click(button);
    expect(handleClaim).toHaveBeenCalledTimes(1);
  });
});
