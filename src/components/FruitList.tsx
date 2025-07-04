interface FruitListProps {
    // items: Array<string>;
    // items: string[];
    items?: string[];
    // items: any;
    // items: undefined;
    // items: unknown;
}

function FruitList(props: FruitListProps) {
    // const { items } = props as { items: string[] };
    const items = props.items;
    return (
        <ul>
            {/* ? 를 사용한 조건부 참조형 타입 컨트롤 수행 시 */}
            {/* 해당 타입을 사용할 때에도 조건부 참조하면 좋다 */}
            {items?.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default FruitList;