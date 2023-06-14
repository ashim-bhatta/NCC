type PropsType = {
  value: string | number | undefined;
  name: string;
};

const WalletSingleItem = ({ value, name }: PropsType) => {
  return (
    <h4>
      {name}: <span>{value}</span>
    </h4>
  );
};

export default WalletSingleItem;
