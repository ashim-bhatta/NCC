import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';

export const useGetBalance = () => {
  const { account, library, chainId } = useWeb3React();
  const [balance, setBalance] = useState<string | null>();
  const [loading, setLoading] = useState(false);

  useEffect((): any => {
    if (!!account && !!library) {
      setLoading(true);
      library
        .getBalance(account)
        .then((balance: any) => {
          setBalance(balance);
          setLoading(false);
        })
        .catch(() => {
          setBalance(null);
          setLoading(false);
        });

      return () => {
        setBalance(undefined);
        setLoading(false);
      };
    }
  }, [account, library, chainId]);

  return { balance, loading };
};
