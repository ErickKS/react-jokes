interface BlurProps {
  customStyles?: string;
}

export function Blur({ customStyles }: BlurProps) {
  return <div className={`blur absolute -z-10 ${customStyles}`} />;
}
