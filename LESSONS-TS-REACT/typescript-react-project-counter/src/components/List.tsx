
// import { ReactNode } from "react";
// This error occurs because TypeScript's verbatimModuleSyntax requires you to use type-only imports for types. You can fix this by updating your import statement to use the import type syntax:

import type { ReactNode } from "react";

interface ListProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
}

//! 1.YOL ->  T extends {} ifadesi, T'nin boş bir nesne türünden türediğini belirtir. Bu, T'nin herhangi bir nesne türü olabileceği anlamına gelir. Eğer T'nin belirli bir türde olması gerekiyorsa, o türü burada belirtebilirsin. Örneğin, T extends string gibi bir ifade kullanabilirsin.

//! 2.YOL <T,>
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List