import { renderHook, act } from '@testing-library/react';
import { useWallet } from '../../src/hooks/useWallet';

// Mock freighter-api
jest.mock('@stellar/freighter-api', () => ({
  isConnected: jest.fn().mockResolvedValue(true),
  getPublicKey: jest.fn().mockResolvedValue('GBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'),
  setAllowed: jest.fn().mockResolvedValue(true)
}));

describe('useWallet Hook', () => {
  it('should initialize with null address', () => {
    const { result } = renderHook(() => useWallet());
    expect(result.current.address).toBeNull();
    expect(result.current.isConnecting).toBe(false);
  });

  it('should handle connect action', async () => {
    const { result } = renderHook(() => useWallet());
    
    await act(async () => {
      await result.current.connect();
    });

    expect(result.current.address).toBe('GBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  });

  it('should handle disconnect action', async () => {
    const { result } = renderHook(() => useWallet());
    
    await act(async () => {
      await result.current.connect();
    });
    
    act(() => {
      result.current.disconnect();
    });

    expect(result.current.address).toBeNull();
  });
});
