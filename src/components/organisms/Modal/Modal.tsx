import { useGetBalance } from '@/Hooks/useGetBalance';
import WalletSingleItem from '@/components/molecules/WalletSingleItem/WalletSingleItem';
import { getErrorMessage } from '@/utils/GetErrorMessage';
import { formatEther } from '@ethersproject/units';
import { useWeb3React } from '@web3-react/core';
import { MdClose } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import modalState from '../../../recoil/Modal.recoil';
import { injected } from '../../../utils/InjectorConnector';
import Button from '../../atoms/Button/Button';
import styles from './Modal.module.css';

const Modal = () => {
  const [isOpen, setIsopen] = useRecoilState(modalState);
  const { activate, account, chainId, deactivate } = useWeb3React();
  const { balance, loading } = useGetBalance();

  const handleModelClose = () => {
    setIsopen(!isOpen);
  };

  const handleDissconnect = () => {
    deactivate();
  };

  const handleConnect = () => {
    injected.isAuthorized().then((isAuthorized: any) => {
      activate(injected, undefined, true).catch((error: any) => {
        {
          alert(getErrorMessage(error));
        }
      });
    });
  };

  return (
    <div
      className={`${styles.modal} ${isOpen && styles.open}`}
      onClick={handleModelClose}
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e?.stopPropagation()}
      >
        <div className={styles.close} onClick={handleModelClose}>
          <MdClose />
        </div>
        <header className={styles.modalHeader}>
          <h2 className='title'>Wallet Details</h2>
        </header>
        <main>
          {loading && <p>Loading...</p>}
          {!loading && !account && <p>Please! connect to your wallet.</p>}
          {!loading && account && (
            <>
              <WalletSingleItem name='account' value={account} />
              <WalletSingleItem
                name='balance'
                value={balance ? formatEther(balance) : ''}
              />
              <WalletSingleItem name='chain Id' value={chainId} />
            </>
          )}
        </main>
        <footer className={styles.modelFooter}>
          {!account ? (
            <Button
              value={loading ? 'Loading' : 'Connect'}
              onClick={handleConnect}
            />
          ) : (
            <Button value='Disconnect ' onClick={handleDissconnect} />
          )}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
