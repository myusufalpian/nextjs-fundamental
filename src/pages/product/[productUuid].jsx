import { useRouter } from "next/router";

const DetailProductPage = () => {
    const {query} = useRouter(); 
    return (
        <div>
            {/* 940e74ca-d3bd-4ad1-89f5-3dd9c9fd09dd  */}
            <h1>Detail Product</h1>
            <p>Product: {query.productUuid}</p>
        </div>
    )
}

export default DetailProductPage;