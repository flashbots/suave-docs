/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {useSDK} from '@metamask/sdk-react';

/**
 * Button that connects Metamask to relevant SUAVE RPC when it's clicked.
 */
function RPCButton() {
  const {sdk} = useSDK();
  const rpcUrl = 'https://rpc.rigil.suave.flashbots.net';
  const blockExplorerUrl = 'https://explorer.rigil.suave.flashbots.net';

  const connectToRPC = async () => {
    if (sdk) {
      const addChainParams = {
        chainId: '0x1008C45',
        chainName: `Rigil Testnet`,
        iconUrls: ['https://docs.flashbots.net/img/logo.png'],
        nativeCurrency: {
          name: 'Ethereum',
          symbol: 'ETH',
          decimals: 18,
        },
        rpcUrls: [rpcUrl],
        blockExplorerUrls: [blockExplorerUrl]
      };
      await sdk.connect();
      // delete local storage key "providerType" to allow users pick extension
      // or mobile when connecting
      localStorage.removeItem('providerType');
      // do it manually with window.ethereum
      try {
        await window.ethereum?.request({
          method: 'wallet_addEthereumChain',
          params: [addChainParams],
        });
      } catch (err) {
        // handle "add" error
      }
    } else {
      // handle general error
    }
  };

  return (
    <div className="mx-auto my-10 flex flex-col items-center justify-center gap-2 md:w-1/2">
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigator.clipboard.writeText(rpcUrl)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            navigator.clipboard.writeText(rpcUrl);
          }
        }}
        className="group relative flex min-w-full max-w-full items-start gap-2 rounded-md border-solid border-slate-200 p-3 transition-colors duration-200 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mt-0.5 w-4 min-w-[16px]">
          <path
            fillRule="evenodd"
            d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <p className="m-0 text-sm font-bold">RPC URL</p>
          <p className="m-0 break-all text-sm text-gray-700">{rpcUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="ring-offset-background focus-visible:ring-ring inline-flex h-10 min-w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-md border-none bg-gray-950 px-4 py-2 text-base font-bold text-white transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        onClick={() => connectToRPC()}>
        Connect to Rigil
      </button>
    </div>
  );
}

export default RPCButton;
