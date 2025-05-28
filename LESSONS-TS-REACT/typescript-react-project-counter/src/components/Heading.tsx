import type { ReactElement } from "react";

type HeadingProps = {
    title: string;
}

// Component kendini otomatik olarak JSX Element olarak tanımlar. Bu yüzden ayriyetten bir fonksiyonda oldugu gibi belirtmemize gerek yok. Burada JSX yerine ReactElement'e çevirdik. Şart değil!
const Heading = ({title}: HeadingProps): ReactElement => {
  return <h1>{title}</h1>
}

export default Heading