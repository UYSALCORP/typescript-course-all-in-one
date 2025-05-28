import type { ReactNode } from "react";
// ReactNode, React bileşenlerinin içerebileceği her türlü öğeyi temsil eder. Bu, metin, bileşenler, diziler ve null gibi öğeleri içerir.
// ReactNode import etmezsen react.ReactNode olarak kullanabilirsin. Ama bu şekilde import edersen sadece ReactNode olarak da kullanabilirsin.

type SectionProps = {
    title?: string,
    children?: ReactNode // children, Section içinde başka bir şey render edebilmek için
}

const Section = ({ title = "My Subheading", children }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
}

// Section component'i, başlık ve içerik alabilen bir bileşendir. Başlık varsayılan olarak "My Subheading" olarak ayarlanmıştır.

export default Section;