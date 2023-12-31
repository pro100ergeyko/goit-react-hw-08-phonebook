import { Vortex } from 'react-loader-spinner';

const spinnerVortex = () => {
  return (
    <Vortex
      visible={true}
      height="180"
      width="180"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
};

export { spinnerVortex };
