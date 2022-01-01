import Image from "next/image";
import Product from "./Product";

function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0, 4).map(({ id, title, price, description, image, rating, category }) => (
                <Product 
                    key={id} 
                    id={id}
                    title={title} 
                    price={price} 
                    description={description} 
                    image={image} 
                    category={category} 
                    rating={rating}
                />
            ))}

            <img 
                className="md:col-span-full" 
                src="https://links.papareact.com/dyz" 
                alt="" 
            />

            <div className="md:col-span-2">
                {products.slice(4,5).map(({ id, title, price, description, image, rating, category }) => (
                    <Product 
                        key={id} 
                        id={id}
                        title={title} 
                        price={price} 
                        description={description} 
                        image={image} 
                        category={category} 
                        rating={rating}
                    />
                ))}
            </div>

            {products.slice(4,products.length).map(({ id, title, price, description, image, rating, category }) => (
                <Product 
                    key={id} 
                    id={id}
                    title={title} 
                    price={price} 
                    description={description} 
                    image={image} 
                    category={category} 
                    rating={rating}
                />
            ))}
        </div>
    )
}

export default ProductFeed