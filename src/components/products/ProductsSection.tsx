import { Product } from './Product'
import { Link } from 'react-router-dom'
import './productsSection.css'
import { PRODUCTS } from '../../products'


export default function ProductsSection() {
  return (
    <section id="shop">
        <div className="products-filter wrapper">
            <h1 className="title">Our Products</h1>
            <div className="filter desktop-only">
                <div className="btn-filter">
                    <button className="active">Bestsellers</button>
                    <button>Newest</button>
                </div>
                <div className="range-slider">
                    <h4>Price Range</h4>
                    <h4 className="data">
                         ₦<span className="min">28,000</span>
                        -
                        ₦<span className="max">72,000</span>
                    </h4>
                    <div className="range">
                        <input type="range" name="" id="lower" value="0" min="0" max="50" />
                        <input type="range" name="" id="upper" value="30" min="0" max="150" />
                    </div>
                </div>
            </div>

            <div className="products">
                {PRODUCTS.map((product) => (
                <Product {...product} key={product.id} />
                ))}
            </div>
            <div className="flex" style={{justifyContent: 'center'}}>
                <Link to="/cart" className="btn btn-orange">
                    <span>View cart</span>
                </Link>
            </div>
      </div>
    </section>
  )
}
