# Validity Dashboard

Validity Dashboard is a modern web application that allows users to interact with Validity smart contracts deployed on the Stellar blockchain using Soroban. It is built using Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Connect Stellar Wallet**: Easily connect using Freighter or other supported Stellar wallets.
- **Deposit Tokens**: Deposit tokens into the Validity Vault.
- **Withdraw Tokens**: Withdraw tokens from the vault securely.
- **Claim Rewards**: Claim rewards earned through participation in the Validity Network.
- **Balance & Transactions**: View your real-time balance and a complete history of your transactions.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/validity-network/validity-dashboard.git
   cd validity-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Connect Wallet

1. Click on the "Connect Wallet" button in the Navbar.
2. Approve the connection request in your Freighter wallet extension.
3. Once connected, your Stellar address will be displayed, and you will have full access to the dashboard features.

## Contribution Guidelines

We welcome contributions to the Validity Dashboard! Please review our [Contributing Guidelines](CONTRIBUTING.md) before submitting a Pull Request. You can also refer to the [Frontend Guide](docs/frontend-guide.md) and [Architecture](docs/architecture.md) documentation.

## License
MIT License
