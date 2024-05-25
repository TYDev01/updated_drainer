// components/table/Table.tsx

import React from 'react';

interface Wallet {
  balance: number | string;
  chain: string;
}

interface Wallets {
  [address: string]: Wallet;
}

interface WalletTableProps {
  wallets: Wallets;
}

const WalletTable: React.FC<WalletTableProps> = ({ wallets }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Wallet Address</th>
            <th className="px-4 py-2">Chain</th>
            <th className="px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(wallets).map(([address, wallet]) => (
            <tr key={address} className="border-b border-gray-400">
              <td className="px-4 py-2">{address}</td>
              <td className="px-4 py-2">{wallet.chain}</td>
              <td className="px-4 py-2">{wallet.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WalletTable;
