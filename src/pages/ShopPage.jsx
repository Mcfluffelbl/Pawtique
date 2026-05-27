import "../styles/ShopPage.css";

import {
  Search,
  Cart,
  Heart,
  Truck,
  ShieldCheck,
  ArrowRepeat,
} from "react-bootstrap-icons";

function ShopPage() {
  return (
    <div className="shop-page">

      <section className="shop-hero">

        <div className="shop-hero-text">

          <h1>
            Shop Our <span>Cat Favorites</span>
          </h1>

          <p>
            Quality products for happy, healthy cats.
          </p>

          <button>
            <Cart />
            Shop Now
          </button>

        </div>

        <img
          src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
          alt="Cute cat"
        />

      </section>

      <section className="shop-controls">

        <div className="categories">

          <button className="active">
            All Products
          </button>

          <button>Food</button>
          <button>Treats</button>
          <button>Toys</button>
          <button>Beds</button>
          <button>Accessories</button>

        </div>

        <div className="search-bar">

          <input
            type="text"
            placeholder="Search products..."
          />

          <Search />

        </div>

      </section>

      <section className="products-grid">

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=600&auto=format&fit=crop"
            alt="Cat food"
          />

          <div className="product-info">

            <h3>Whisker Crunch Food</h3>

            <p>Premium chicken recipe for cats.</p>

            <div className="price-row">
              <h4>$24.99</h4>
              <span>⭐⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop"
            alt="Toy"
          />

          <div className="product-info">

            <h3>Feather Teaser Toy</h3>

            <p>Interactive fun toy for playful cats.</p>

            <div className="price-row">
              <h4>$8.99</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=600&auto=format&fit=crop"
            alt="Bed"
          />

          <div className="product-info">

            <h3>Cozy Plush Bed</h3>

            <p>Ultra soft bed for cozy cat naps.</p>

            <div className="price-row">
              <h4>$29.99</h4>
              <span>⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=600&auto=format&fit=crop"
            alt="Collar"
          />

          <div className="product-info">

            <h3>Pink Paw Collar</h3>

            <p>Stylish and comfy cat accessory.</p>

            <div className="price-row">
              <h4>$9.99</h4>
              <span>⭐⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

      </section>

      <section className="shop-features">

        <div className="feature-box">
          <Truck />
          <div>
            <h4>Free Shipping</h4>
            <p>On orders over $49</p>
          </div>
        </div>

        <div className="feature-box">
          <ShieldCheck />
          <div>
            <h4>Secure Payment</h4>
            <p>100% safe & secure</p>
          </div>
        </div>

        <div className="feature-box">
          <ArrowRepeat />
          <div>
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default ShopPage;