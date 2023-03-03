import { useRouter } from "next/router"


export function Product() {
    const { query } = useRouter()

    return (
        <div>Product: {query.id}</div>
    )
}