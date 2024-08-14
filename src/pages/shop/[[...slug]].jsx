import { useRouter } from "next/router";

const ShopPage = () => {
    const { query } = useRouter(); 
    return (
        <div>
            {/* 940e74ca-d3bd-4ad1-89f5-3dd9c9fd09dd  */}
            <h1>Detail Product</h1>
            <p>Product: {`${query.slug == undefined ? "-" : query.slug[0] + " - " + query.slug[1] + " - " + query.slug[2]}`}</p>
        </div>
    )
}

export default ShopPage;